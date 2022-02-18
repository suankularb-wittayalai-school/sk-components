| [Read in English](#layout-list) | [อ่านในภาษาไทย](#รายการ-layout) |
| ------------------------------- | ------------------------------- |

# Layout List

## Page Layout

> Components mentioned: [Navigation](..\components\README.md#navigation), [Content Layout](#content-layouts)

```html
<body class="page-layout">
  <!-- Navigation (see Navigation component) -->
  <nav class="nav">
    <a class="nav__item" href="#">
      <i class="icon nav__item__icon">circle</i>
      <span>Item 1</span>
    </a>
    <a class="nav__item active" href="#">
      <i class="icon nav__item__icon">circle</i>
      <span>Active Item</span>
    </a>
    <a class="nav__item" href="#">
      <i class="icon nav__item__icon">circle</i>
      <span>Item 3</span>
    </a>

    <!-- Layout (see Content Layouts) -->
    <main class="content-layout">
      <!-- … -->
    </main>
  </nav>
</body>
```

## Content Layouts

### Regular Layout

> Components mentioned: [Card](..\components\README.md#card)

```html
<main class="content-layout">
  <!-- Cards (see Card component) -->
  <section class="card--outlined">Card 1</section>
  <section class="card--outlined">Card 2</section>
</main>
```

### List Layout

> Components mentioned: [Search](..\components\README.md#search), [Select List](..\components\input\README.md#select-list), [Card](..\components\README.md#card)

```html
<main class="content-layout--list">
  <!-- List section -->
  <section class="content-layout--list__list">
    <!-- Search (see Search component) -->
    <div class="content-layout--list__list__search">
      <div class="search">
        <button class="search__button">
          <i class="icon search__icon" translate="no">search</i>
        </button>
        <input type="search" class="search__input" placeholder="Search" />
      </div>
    </div>

    <!-- Select List (see Select List component) -->
    <ul class="select-list content-layout--list__list__list">
      <li class="select-list__group">
        <h3 class="select-list__header">Header 1</h3>
        <ul class="select-list__items">
          <li><button class="select-list__item--active">Item 1</button></li>
          <li><button class="select-list__item--inactive">Item 2</button></li>
          <li><button class="select-list__item--inactive">Item 3</button></li>
        </ul>
      </li>
    </ul>
  </section>

  <!-- Active Item section (see Card component) -->
  <section class="content-layout--list__main">
    <section class="card--outlined">Card 1</section>
    <section class="card--outlined">Card 2</section>
  </section>
</main>
```

# รายการ Layout

## Page Layout

> code กล่าวถึง: [Navigation](..\components\README.md#navigation), [Content Layout](#content-layout)

```html
<body class="page-layout">
  <!-- Navigation (see Navigation component) -->
  <nav class="nav">
    <a class="nav__item" href="#">
      <i class="icon nav__item__icon">circle</i>
      <span>Item 1</span>
    </a>
    <a class="nav__item active" href="#">
      <i class="icon nav__item__icon">circle</i>
      <span>Active Item</span>
    </a>
    <a class="nav__item" href="#">
      <i class="icon nav__item__icon">circle</i>
      <span>Item 3</span>
    </a>

    <!-- Layout (see Content Layouts) -->
    <main class="content-layout">
      <!-- … -->
    </main>
  </nav>
</body>
```

## Content Layout

### Regular Layout

> code กล่าวถึง: [Card](..\components\README.md#card)

```html
<main class="content-layout">
  <!-- Cards (see Card component) -->
  <section class="card--outlined">Card 1</section>
  <section class="card--outlined">Card 2</section>
</main>
```

### List Layout

> code กล่าวถึง: [Search](..\components\README.md#search), [Select List](..\components\input\README.md#select-list), [Card](..\components\README.md#card)

```html
<main class="content-layout--list">
  <!-- List section -->
  <section class="content-layout--list__list">
    <!-- Search (ดู Search) -->
    <div class="content-layout--list__list__search">
      <div class="search">
        <button class="search__button">
          <i class="icon search__icon" translate="no">search</i>
        </button>
        <input type="search" class="search__input" placeholder="Search" />
      </div>
    </div>

    <!-- Select List (ดู Select List) -->
    <ul class="select-list content-layout--list__list__list">
      <h3 class="select-list__header">Header 1</h3>
      <li><button class="select-list__item--active">Item 1</button></li>
      <li><button class="select-list__item--inactive">Item 2</button></li>
      <li><button class="select-list__item--inactive">Item 3</button></li>
    </ul>
  </section>

  <!-- Active Item section (ดู Card) -->
  <section class="content-layout--list__main">
    <section class="card--outlined">Card 1</section>
    <section class="card--outlined">Card 2</section>
  </section>
</main>
```
