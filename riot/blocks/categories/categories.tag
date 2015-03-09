<x-categories>
  <div class="categories">
    <div class="categories__title">Категории</div>
    <div each="{opts.items}" class="categories__item categories__item_level_{level}">
      <a href="{href}" class="categories__link{current ? ' is-current' : ''}">{text}</a>
    </div>
  </div>
</x-categories>
