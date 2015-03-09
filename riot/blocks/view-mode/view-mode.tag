<x-view-mode>
  <div class="view-mode">
    <inner-html/>
  </div>
</x-view-mode>

<x-view-mode-item>
  <div class="view-mode__item">
    <a href="{opts.href}" class="view-mode__link{opts.current ? ' is-current' : ''}">{opts.text}</a>
  </div>
</x-view-mode-item>
