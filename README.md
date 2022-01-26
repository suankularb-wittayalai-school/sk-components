| [Read in English](#suankularb-components) | [อ่านในภาษาไทย](#ระบบ-ui-สวนกุหลาบ) |
| ---- | ---- |

# Suankularb Components

This repository is aimed at creating a consistent designs system and experience across all Suankularb features and applications.

## Component List

### Buttons

```html
<!-- Filled button -->
<button class="btn--filled">Filled</button>

<!-- Outlined button -->
<button class="btn--outlined">Outlined</button>

<!-- Text button -->
<button class="btn--text">Text</button>
```

### Navigation

`--active` indicates that the Navigation Item is the current page.

```html
<nav class="nav">
  <a class="nav__item--active" href="#">Active Item</a>
  <a class="nav__item" href="#">Item 2</a>
  <a class="nav__item" href="#">Item 3</a>
</nav>
```

### Page Header

Although the Page Header comes with a default colour, it is intended to be paired with a background gradient.

```html
<header class="header">

  <div class="header__icons">

    <!-- Back Button -->
    <a href="#">
      <i class="icon header__icons__back" translate="no">
        arrow_back
      </i>
    </a>
    </button>

    <!-- Page Icon -->
    <i class="icon header__icons__page" translate="no">
      dashboard
    </i>

  </div>

  <!-- Header Text -->
  <div class="header__text">
    <h4>Header</h4>
    <p>Subtitle</p>
  </div>

</header>
```

### Card

- Card has 3 styles: `elevated`, `outlined`, and `tonal`.
- Card’s content can be organized into groups, each having a Card Header and a Card List.
- Card List consists of Items
- Item Actions show when the Item is hovered or if they are tabbed into.

```html
<div class="card--outlined">
  <!-- Card Header -->
  <div class="card__header">
    <i class="icon card__header__icon" translate="no">contacts</i>
    <h2 class="card__header__text">Contacts</h2>
  </div>

  <!-- Card List -->
  <ul class="card__list">
    <!-- Item -->
    <li class="card__list__item">
      <!-- Item Content -->
      <div class="card__item__content">
        <i class="icon card__item__icon" translate="no">email</i>
        <p>john.doe@example.com</p>
      </div>

      <!-- Item Actions -->
      <div class="card__item__actions">
        <!-- Item Action -->
        <button class="btn btn--text btn--icon">
          <i class="icon card__icon"> content_copy </i>
        </button>
        <!-- Item Action -->
        <button class="btn btn--text btn--icon">
          <i class="icon card__icon" translate="no">share</i>
        </button>
      </div>
    </li>
  </ul>
</div>
```

### Search

- Buttons can be put in front and/or after the input.
- Buttons are meant to be used with an icon as their child.

```html
<div class="search">
  <!-- Button -->
  <button class="search__button">
    <i class="icon search__icon" translate="no">search</i>
  </button>

  <!-- Input -->
  <input type="search" class="search__input" placeholder="Search" />
</div>
```

### Select List

```html
<ul class="select-list">
  <!-- Items can be organized into groups, this is one of the groups’ header -->
  <h3 class="select-list__header">Header 1</h3>

  <!-- This item is active, and its content is shown in the Active Item section -->
  <li><button class="select-list__item--active">Item 1</button></li>

  <!-- These items are not active -->
  <li><button class="select-list__item--inactive">Item 2</button></li>
  <li><button class="select-list__item--inactive">Item 3</button></li>
</ul>
```

## Layouts

### Regular Layout

> Components mentioned: [Card](#card)

```html
<main class="page-layout">
  <!-- Cards (see Card component) -->
  <section class="card--outlined">Card 1</section>
  <section class="card--outlined">Card 2</section>
</main>
```

### List Layout

> Components mentioned: [Search](#search), [Select List](#select-list), [Card](#card)

```html
<main class="page-layout--list">
  <!-- List section -->
  <section class="page-layout--list__list">
    <!-- Search (see Search component) -->
    <div class="page-layout--list__list__search">
      <div class="search">
        <button class="search__button">
          <i class="icon search__icon" translate="no">search</i>
        </button>
        <input type="search" class="search__input" placeholder="Search" />
      </div>
    </div>

    <!-- Select List (see Select List component) -->
    <ul class="select-list page-layout--list__list__list">
      <h3 class="select-list__header">Header 1</h3>
      <li><button class="select-list__item--active">Item 1</button></li>
      <li><button class="select-list__item--inactive">Item 2</button></li>
      <li><button class="select-list__item--inactive">Item 3</button></li>
    </ul>
  </section>

  <!-- Active Item section (see Card component) -->
  <section class="page-layout--list__main">
    <section class="card--outlined">Card 1</section>
    <section class="card--outlined">Card 2</section>
  </section>
</main>
```

# ระบบ UI สวนกุหลาบ

Repository นี้มีไว้เพื่อเป็นเครื่องมือที่จะช่วยเราสร้างระบบ UI ที่เข้าใจง่ายและสม่ำเสมอ ตลอดภายในแอพพลิเคชั่นทั้งหมดจากโรงเรียนสวนกุหลาบวิทยาลัย
