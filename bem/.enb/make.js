var enbBemTechs = require('enb-bem-techs');


module.exports = function (config) {
    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), { target: '?.bemjson.js' }],
            //[require('enb/techs/file-provider'), { target: '?.bemdecl.js' }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [enbBemTechs.bemjsonToBemdecl],

            // css
            [require('enb/techs/css')],

            // bemtree
            [require('enb-bemxjst/techs/bemtree-old'), { devMode: process.env.BEMTREE_ENV === 'development' }],

            // bemhtml
            [require('enb-bemxjst/techs/bemhtml-old'), { devMode: process.env.BEMHTML_ENV === 'development' }],

            // html
            [require('./techs/html-from-bemtree')]
        ]);

        nodeConfig.addTargets([
            '?.css',
            '?.bemtree.js',
            '?.html'
        ]);
    });

    config.nodes('*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: getDesktops(config) }]
        ]);
    });

};

function getDesktops(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}
