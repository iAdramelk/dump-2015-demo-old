module.exports = [
  {block: 'global'},
  {
    block: 'page',
    title: 'Пирожки',
    data: require('../../../data/listing'),
    mods: {bundle: "listing-grid-advanced"},
    'styles': [
      {
        elem: 'css',
        'url': 'listing-grid-advanced.css'
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
                elemMods: {'signin': true},
                content: {
                  block: 'link',
                  mix: [{block: 'header', elem: 'link'}],
                  url: '#',
                  content: 'Войти'
                }
              },
              {
                elem: 'action',
                elemMods: {'signup': true},
                content: {
                  block: 'link',
                  mix: [{block: 'header', elem: 'link'}],
                  url: '#',
                  content: 'Зарегистрироваться'
                }
              },
              {
                elem: 'action',
                elemMods: {'basket': true},
                content: {
                  block: 'link',
                  mix: [{block: 'header', elem: 'link'}],
                  url: '#',
                  content: 'Корзина'
                }
              }
            ]
          },
          {elem: 'title', content: 'Золушка'},
          {
            elem: 'search',
            content: {
              block: 'search',
              tag: 'form',
              attrs: {'action': '#'},
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
                  attrs: {'type': 'submit', 'value': 'Найти'}
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
                attrs: {'href': '#'},
                content: 'Кареты'
              }
            },
            {
              elem: 'item',
              content: {
                elem: 'link',
                tag: 'a',
                attrs: {'href': '#'},
                content: 'Лошади'
              }
            },
            {
              elem: 'item',
              content: {
                elem: 'link',
                tag: 'a',
                attrs: {'href': '#'},
                content: 'Кучеры'
              }
            },
            {
              elem: 'item',
              content: {
                elem: 'link',
                tag: 'a',
                attrs: {'href': '#'},
                content: 'Лакеи'
              }
            },
            {
              elem: 'item',
              content: {
                elem: 'link',
                mix: [{block: 'is-current'}],
                tag: 'a',
                attrs: {'href': '#'},
                content: 'Платья'
              }
            },
            {
              elem: 'item',
              content: {
                elem: 'link',
                tag: 'a',
                attrs: {'href': '#'},
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
                          attrs: {'href': '#'},
                          content: 'Платья'
                        }
                      },
                      {
                        elem: 'item',
                        content: {
                          elem: 'link',
                          tag: 'a',
                          attrs: {'href': '#'},
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
                    block: 'article-lead'
                  }
                }
              ]
            },
            {
              elem: 'content',
              content: [
                {
                  elem: 'main',
                  mods: {'advanced-items': true},
                  content: [
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-01.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {
                                elem: 'title',
                                content: 'Платье Mary Mea'
                              },
                              {elem: 'price', content: '2 700 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-02.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {
                                elem: 'title',
                                content: 'Платье Goddess London'
                              },
                              {elem: 'price', content: '4 700 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'banner',
                      mods: {'grid': true},
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: 'Лучшие мыши на рынке! Оптом дешевле!'
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-03.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {
                                elem: 'title',
                                content: 'Платье People'
                              },
                              {elem: 'price', content: '1 999 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-04.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {elem: 'title', content: 'Платье BSB'},
                              {elem: 'price', content: '2 000 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-06.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {elem: 'title', content: 'Платье V&V'},
                              {elem: 'price', content: '1 700 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-07.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {elem: 'title', content: 'Платье Prio'},
                              {elem: 'price', content: '5 520 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-08.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {
                                elem: 'title',
                                content: 'Платье Fever'
                              },
                              {elem: 'price', content: '2 320 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-09.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {
                                elem: 'title',
                                content: 'Платье Verezo'
                              },
                              {elem: 'price', content: '8 700 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-10.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {
                                elem: 'title',
                                content: 'Платье Tops&Tops'
                              },
                              {elem: 'price', content: '2 190 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-11.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {
                                elem: 'title',
                                content: 'Платье Richardi'
                              },
                              {elem: 'price', content: '3 000 руб.'}
                            ]
                          }
                        ]
                      }
                    },
                    {
                      block: 'preview-item',
                      content: {
                        elem: 'link',
                        tag: 'a',
                        attrs: {'href': '#'},
                        content: [
                          {
                            elem: 'image',
                            tag: 'img',
                            attrs: {'src': '../../tmp/placeholder-12.jpg'}
                          },
                          {
                            elem: 'meta',
                            content: [
                              {elem: 'title', content: 'Платье T&M'},
                              {elem: 'price', content: '701 руб.'}
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  elem: 'nav',
                  content: [
                    {
                      block: 'categories',
                      content: [
                        {elem: 'title', content: 'Категории'},
                        {
                          elem: 'item',
                          content: {
                            elem: 'link',
                            tag: 'a',
                            attrs: {'href': '#'},
                            content: 'Платья'
                          }
                        },
                        {
                          elem: 'item',
                          elemMods: {'level': '2'},
                          content: {
                            elem: 'link',
                            tag: 'a',
                            attrs: {'href': '#'},
                            content: 'Платья бальные'
                          }
                        },
                        {
                          elem: 'item',
                          elemMods: {'level': '3'},
                          content: {
                            elem: 'link',
                            mix: {block: 'is-current'},
                            tag: 'span',
                            content: 'Коктельные платья'
                          }
                        },
                        {
                          elem: 'item',
                          elemMods: {'level': '3'},
                          content: {
                            elem: 'link',
                            tag: 'a',
                            attrs: {'href': '#'},
                            content: 'Клубные платья'
                          }
                        },
                        {
                          elem: 'item',
                          elemMods: {'level': '3'},
                          content: {
                            elem: 'link',
                            tag: 'a',
                            attrs: {'href': '#'},
                            content: 'Вечерние платья'
                          }
                        },
                        {
                          elem: 'item',
                          elemMods: {'level': '3'},
                          content: {
                            elem: 'link',
                            tag: 'a',
                            attrs: {'href': '#'},
                            content: 'Выпускные платья'
                          }
                        }
                      ]
                    },
                    {
                      block: 'help' }
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
                  attrs: {'href': '#'},
                  content: 'Кареты'
                }
              },
              {
                elem: 'item',
                content: {
                  elem: 'link',
                  tag: 'a',
                  attrs: {'href': '#'},
                  content: 'Лошади'
                }
              },
              {
                elem: 'item',
                content: {
                  elem: 'link',
                  tag: 'a',
                  attrs: {'href': '#'},
                  content: 'Кучеры'
                }
              },
              {
                elem: 'item',
                content: {
                  elem: 'link',
                  tag: 'a',
                  attrs: {'href': '#'},
                  content: 'Лакеи'
                }
              },
              {
                elem: 'item',
                content: {
                  elem: 'link',
                  mix: [{block: 'is-current'}],
                  tag: 'a',
                  attrs: {'href': '#'},
                  content: 'Платья'
                }
              },
              {
                elem: 'item',
                content: {
                  elem: 'link',
                  tag: 'a',
                  attrs: {'href': '#'},
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
  }];
