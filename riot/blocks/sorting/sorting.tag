<x-sorting>
  <div class="sorting">
    <div class="sorting__title">Сортировать:</div>
    <inner-html/>
  </div>
</x-sorting>

<x-sorting-item>
  <div class="sorting__item">
    <a href="{opts.href}" class="sorting__link{opts.current ? ' is-current' : ''}">{opts.text}</a>
  </div>
</x-sorting-item>
