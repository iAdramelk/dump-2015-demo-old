/**
 * html-from-bemtree
 * =================
 *
 * Собирает *html*-файл с помощью *bemtree* и *bemhtml*.
 *
 * **Опции**
 *
 * * *String* **bemhtmlTarget** — Исходный BEMHTML-файл. По умолчанию — `?.bemhtml.js`.
 * * *String* **bemtreeTarget** — Исходный BEMJSON-файл. По умолчанию — `?.bemtree.js`.
 * * *String* **destTarget** — Результирующий HTML-файл. По умолчанию — `?.html`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb/techs/html-from-bemjson'));
 * ```
 */
var path = require('path'),
    vm = require('vm'),
    vow = require('vow'),
    vfs = require('enb/lib/fs/async-fs'),
    asyncRequire = require('enb/lib/fs/async-require'),
    dropRequireCache = require('enb/lib/fs/drop-require-cache');

module.exports = require('enb/lib/build-flow').create()
    .name('html-from-bemtree')
    .target('destTarget', '?.html')
    .useSourceFilename('bemtreeTarget', '?.bemtree.js')
    .useSourceFilename('bemhtmlTarget', '?.bemhtml.js')
    .builder(function(bemtreeFilename, bemhtmlFilename) {
        var bemBundle = path.basename(bemhtmlFilename, '.bemhtml.js');

        dropRequireCache(require, bemhtmlFilename);

        return vow.all([
                vfs.read(bemtreeFilename, 'utf-8'),
                asyncRequire(bemhtmlFilename)
            ])
            .spread(function(bemtree, bemhtml) {
                var ctx = vm.createContext({
                    Vow : vow,
                    Vfs : vfs,
                    console : console,
                    setTimeout : setTimeout,
                    bem: {
                        bundle: bemBundle
                    }
                });

                vm.runInContext(bemtree, ctx);

                return [ctx.BEMTREE, bemhtml.BEMHTML];
            })
            .spread(function(BEMTREE, BEMHTML) {
                return BEMTREE.apply({})
                    .then(function(bemjson) {
                        return BEMHTML.apply(bemjson);
                    });
            });
    })
    .createTech();
