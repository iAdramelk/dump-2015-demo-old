<x-listing>
  <div class="listing">
    <inner-html/>
  </div>
</x-listing>

<x-listing-header>
  <div class="listing__header">
    <inner-html/>
  </div>
</x-listing-header>

<x-listing-breadcrumbs>
  <div class="listing__breadcrumbs">
    <inner-html/>
  </div>
</x-listing-breadcrumbs>

<x-listing-title>
  <h1 class="listing__title">{opts.title}</h1>
</x-listing-title>

<x-listing-sorting>
  <div class="listing__sorting">
    <inner-html/>
  </div>
</x-listing-sorting>

<x-listing-view-mode>
  <div class="listing__view-mode">
    <inner-html/>
  </div>
</x-listing-view-mode>

<x-listing-content>
  <div class="listing__content">
    <inner-html/>
  </div>
</x-listing-content>

<x-listing-items>
  <div class="listing__items{opts.advanced ? ' listing__items_advanced' : ''}">
    <inner-html/>
  </div>

  console.log(this.opts.advanced)
</x-listing-items>

<x-listing-nav>
  <div class="listing__nav">
    <inner-html/>
  </div>
</x-listing-nav>
