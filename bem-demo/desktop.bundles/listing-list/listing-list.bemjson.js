([
    { block: 'global' },
    {
        block: 'page',
        title: 'Пирожки',
        styles: [
            {
                elem: 'css',
                'url': 'listing-list.css',
                'ie': false
            }
        ],
        content: [
            {
                block: 'header',
                content: [
                    {
                        elem: 'subtitle',
                        content: 'интернет-магазин одежды'
                    },
                    {
                        elem: 'actions',
                        content: [
                            {
                                elem: 'action',
                                elemMods: { 'signin': true },
                                content: {
                                    block: 'link',
                                    mix: [ { block: 'header', elem: 'link' } ],
                                    'url': '#',
                                    content: 'Войти'
                                }
                            },
                            {
                                elem: 'action',
                                elemMods: { 'signup': true },
                                content: {
                                    block: 'link',
                                    mix: [ { block: 'header', elem: 'link' } ],
                                    'url': '#',
                                    content: 'Зарегистрироваться'
                                }
                            },
                            {
                                elem: 'action',
                                elemMods: { 'basket': true },
                                content: {
                                    block: 'link',
                                    mix: [ { block: 'header', elem: 'link' } ],
                                    'url': '#',
                                    content: 'Корзина'
                                }
                            }
                        ]
                    },
                    { elem: 'title', content: 'Золушка' },
                    {
                        elem: 'search',
                        content: {
                            block: 'search',
                            tag: 'form',
                            attrs: { 'action': '#' },
                            content: [
                                {
                                    elem: 'query',
                                    tag: 'input',
                                    attrs: {
                                        'type': 'search',
                                        'placeholder': 'платье бальное'
                                    }
                                },
                                {
                                    elem: 'submit',
                                    tag: 'input',
                                    attrs: { 'type': 'submit', 'value': 'Найти' }
                                }
                            ]
                        }
                    }
                ]
            },
            {
                block: 'menu',
                content: {
                    elem: 'content',
                    content: [
                        {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                tag: 'a',
                                attrs: { 'href': '#' },
                                content: 'Кареты'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                tag: 'a',
                                attrs: { 'href': '#' },
                                content: 'Лошади'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                tag: 'a',
                                attrs: { 'href': '#' },
                                content: 'Кучеры'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                tag: 'a',
                                attrs: { 'href': '#' },
                                content: 'Лакеи'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                mix: [ { block: 'is-current' } ],
                                tag: 'a',
                                attrs: { 'href': '#' },
                                content: 'Платья'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                tag: 'a',
                                attrs: { 'href': '#' },
                                content: 'Туфли'
                            }
                        }
                    ]
                }
            },
            {
                block: 'content',
                content: {
                    block: 'listing',
                    content: [
                        {
                            elem: 'header',
                            content: [
                                {
                                    elem: 'breadcrumbs',
                                    content: {
                                        block: 'breadcrumbs',
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    elem: 'link',
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: 'Платья'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    elem: 'link',
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: 'Платья бальные'
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    elem: 'title',
                                    tag: 'h1',
                                    content: 'Коктельные платья'
                                },
                                {
                                    elem: 'sorting',
                                    content: {
                                        block: 'sorting',
                                        content: [
                                            {
                                                elem: 'title',
                                                content: 'Сортировать:'
                                            },
                                            {
                                                elem: 'mode',
                                                content: {
                                                    elem: 'link',
                                                    mix: [ { block: 'is-current' } ],
                                                    tag: 'span',
                                                    content: 'по популярности'
                                                }
                                            },
                                            {
                                                elem: 'mode',
                                                content: {
                                                    elem: 'link',
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: 'по цене'
                                                }
                                            },
                                            {
                                                elem: 'mode',
                                                content: {
                                                    elem: 'link',
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: 'по новизне'
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    elem: 'view-mode',
                                    content: {
                                        block: 'view-mode',
                                        content: [
                                            {
                                                elem: 'mode',
                                                content: {
                                                    elem: 'link',
                                                    mix: [ { block: 'is-current' } ],
                                                    tag: 'span',
                                                    content: 'плиткой'
                                                }
                                            },
                                            {
                                                elem: 'mode',
                                                content: {
                                                    elem: 'link',
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: 'списком'
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            elem: 'content',
                            content: [
                                {
                                    block: 'listing-items',
                                    content: [
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-01.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '2 700 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Mary Mea'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Элегантное коктейльное платье из качественной вискозной ткани, имитирующей кружево. Сочетание\n                    тонкого рисунка и романтичных линий платья создают стильный и в тоже время нежный образ. В этом\n                    платье Вы будите выглядеть роскошно на любом празднике!'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-02.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '4 700 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Goddess London'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Шик этого платья будет заметен женщине, обладающей отличным вкусом. Прямой крой подчеркнет\n                    стройный силуэт фигуры. Вырез горловины достаточно универсален. Рукава длиной в 3/4. Платье\n                    застегивается на молнию. Декор в виде рисунка по всему изделию продемонстрирует Вашу богатую\n                    натуру. Такое платье уместно как на каждый день, так и в создании коктейльного образа.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'banner',
                                            content: {
                                                elem: 'link',
                                                tag: 'a',
                                                attrs: { 'href': '#' },
                                                content: 'Лучшие мыши на рынке! Оптом дешевле!'
                                            }
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-03.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '1 999 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье People'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Маленькое коктейльное платье модного расклешенного к низу трапециевидного силуэта выполнено из\n                    тонкой плательной ткани. В нижней части платье декорировано широкой кружевной тесьмой в тон\n                    основному материалу. Эта эффектная модель отлично скроет небольшие несовершенства фигуры\n                    в области талии и бедер, визуально удлинит ноги и сделает силуэт легче и изящнее.\n                    Отличный вариант для шумной вечеринки!'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-04.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '2 000 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье BSB'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Это интересное платье длины "мини" сможет стать Вашим партнером на коктейльной вечеринке\n                    и в повседневной носке. Модель с округлым вырезом горловины и короткими рукавами\n                    оформлена геометрическим орнаментом.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-05.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '2 750 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Key'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Это интересное платье длины "мини" сможет стать Вашим партнером на коктейльной вечеринке\n                    и в повседневной носке. Модель с округлым вырезом горловины и короткими рукавами\n                    оформлена геометрическим орнаментом.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-06.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '1 700 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье V&V'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Коктейльное платье из качественной полушерстяной ткани, расклешенное от бедер, длиной до колен,\n                    без воротника, горловина V-образной формы, без рукавов, без подкладки. Спереди выполнен один\n                    горизонтальный рельеф под грудью от левого до правого бокового шва, один наклонный рельеф\n                    от левого бокового шва на уровне линии ниже талии до правого бокового шва на уровне бедер.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-07.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '5 520 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Prio'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Коктейльное платье из поливискозной ткани. Расклешенное от бедер, длиной до колен,\n                    без воротника, горловина V-образной формы, без рукавов, без подкладки. Спереди выполнен\n                    один горизонтальный рельеф под грудью от левого до правого бокового шва, один наклонный\n                    рельеф от левого бокового шва на уровне линии ниже талии до правого бокового шва\n                    на уровне бедер.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-08.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '2 320 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Fever'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Симпатичное, коктейльное короткое платье на изящных бретелях. Приталенный силуэт.\n                    Модель оформлена эффектным кружевом.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-09.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '8 700 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Verezo'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Платье-футляр из двух тканей. На горловине и манжетах - легкая сборка, которая придает\n                    образу кокетливые нотки. Изделие приталенного силуэта, с застежкой на молнию. Красивый\n                    вариант на коктейльное мероприятие.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-10.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '2 190 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Tops&Tops'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Прекрасный вариант для романтического свидания или коктейльной вечеринки - красивое легкое\n                    платье. Модель на широких бретелях с застежкой на молнию сзади. Верхний слой выполнен\n                    из кружевного полотна расшитого пайетками.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-11.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '3 000 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье Richardi'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Прекрасный вариант для романтического свидания или коктейльной вечеринки - красивое\n                    легкое платье. Модель на широких бретелях с застежкой на молнию сзади. Верхний слой\n                    выполнен из кружевного полотна расшитого пайетками.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'list-item',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    attrs: { 'href': '#' },
                                                    content: {
                                                        elem: 'image',
                                                        tag: 'img',
                                                        attrs: { 'src': '../../tmp/placeholder-12.jpg' }
                                                    }
                                                },
                                                {
                                                    elem: 'meta',
                                                    content: [
                                                        { elem: 'price', content: '701 руб.' },
                                                        {
                                                            elem: 'title',
                                                            content: {
                                                                tag: 'a',
                                                                attrs: { 'href': '#' },
                                                                content: 'Платье T&M'
                                                            }
                                                        },
                                                        {
                                                            elem: 'description',
                                                            content: 'Эффектное, коктейльное платье с фигурным вырезом на лифе отлично подойдет для создания\n                    яркого образа. Модель средней длины, приталенного силуэта с расклешенной юбочной частью,\n                    помогает в выгодном свете подчеркнуть все ее достоинства, а в сочетании с высокими\n                    каблуками выглядит сексуально и приковывает восхищенные взгляды.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'listing-nav',
                                    content: [
                                        {
                                            block: 'categories',
                                            content: [
                                                { elem: 'title', content: 'Категории' },
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        elem: 'link',
                                                        tag: 'a',
                                                        attrs: { 'href': '#' },
                                                        content: 'Платья'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'level': '2' },
                                                    content: {
                                                        elem: 'link',
                                                        tag: 'a',
                                                        attrs: { 'href': '#' },
                                                        content: 'Платья бальные'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'level': '3' },
                                                    content: {
                                                        elem: 'link',
                                                        tag: 'a',
                                                        attrs: { 'href': '#' },
                                                        content: 'Коктельные платья'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'level': '3' },
                                                    content: {
                                                        elem: 'link',
                                                        tag: 'a',
                                                        attrs: { 'href': '#' },
                                                        content: 'Клубные платья'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'level': '3' },
                                                    content: {
                                                        elem: 'link',
                                                        tag: 'a',
                                                        attrs: { 'href': '#' },
                                                        content: 'Вечерние платья'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'level': '3' },
                                                    content: {
                                                        elem: 'link',
                                                        tag: 'a',
                                                        attrs: { 'href': '#' },
                                                        content: 'Выпускные платья'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'facets',
                                            content: [
                                                {
                                                    block: 'facet',
                                                    content: [
                                                        { elem: 'title', content: 'Цена, руб.' },
                                                        {
                                                            elem: 'content',
                                                            content: {
                                                                block: 'price',
                                                                content: [
                                                                    {
                                                                        elem: 'group',
                                                                        elemMods: { 'from': true },
                                                                        content: [
                                                                            {
                                                                                elem: 'title',
                                                                                tag: 'label',
                                                                                content: 'От:'
                                                                            },
                                                                            {
                                                                                elem: 'field',
                                                                                tag: 'input',
                                                                                attrs: { 'type': 'text', 'placeholder': '900' }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'group',
                                                                        elemMods: { 'to': true },
                                                                        content: [
                                                                            {
                                                                                elem: 'title',
                                                                                tag: 'label',
                                                                                content: 'До:'
                                                                            },
                                                                            {
                                                                                elem: 'field',
                                                                                tag: 'input',
                                                                                attrs: {
                                                                                    'type': 'text',
                                                                                    'placeholder': '20 000'
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        { elem: 'more', content: 'Показать' }
                                                    ]
                                                },
                                                {
                                                    block: 'facet',
                                                    content: [
                                                        {
                                                            elem: 'title',
                                                            content: 'Основной материал'
                                                        },
                                                        {
                                                            elem: 'content',
                                                            content: {
                                                                block: 'checkbox-list',
                                                                content: [
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            mix: [ { block: 'is-selected' } ],
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: 'Акрил'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: 'Вискоза'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            mix: [ { block: 'is-selected' } ],
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: 'Лайкра'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: 'Лен'
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        { elem: 'more', content: 'Еще 11…' }
                                                    ]
                                                },
                                                {
                                                    block: 'facet',
                                                    content: [
                                                        { elem: 'title', content: 'Размер' },
                                                        {
                                                            elem: 'content',
                                                            content: {
                                                                block: 'checkbox-list',
                                                                mix: [ { block: 'is-compact' } ],
                                                                content: [
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '38'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '39'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '40'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '41'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '42'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '43'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '44'
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'link',
                                                                            tag: 'a',
                                                                            attrs: { 'href': '#' },
                                                                            content: '45'
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                block: 'menu',
                content: [
                    {
                        elem: 'content',
                        content: [
                            {
                                elem: 'item',
                                content: {
                                    elem: 'link',
                                    tag: 'a',
                                    attrs: { 'href': '#' },
                                    content: 'Кареты'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    elem: 'link',
                                    tag: 'a',
                                    attrs: { 'href': '#' },
                                    content: 'Лошади'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    elem: 'link',
                                    tag: 'a',
                                    attrs: { 'href': '#' },
                                    content: 'Кучеры'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    elem: 'link',
                                    tag: 'a',
                                    attrs: { 'href': '#' },
                                    content: 'Лакеи'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    elem: 'link',
                                    mix: [ { block: 'is-current' } ],
                                    tag: 'a',
                                    attrs: { 'href': '#' },
                                    content: 'Платья'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    elem: 'link',
                                    tag: 'a',
                                    attrs: { 'href': '#' },
                                    content: 'Туфли'
                                }
                            }
                        ]
                    },
                    {
                        block: 'footer',
                        content: '© 2013-2015 Общество Фей'
                    }
                ]
            }
        ]
    }
])
