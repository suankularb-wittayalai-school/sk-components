| [Read in English](#suankularb-components) | [อ่านในภาษาไทย](#ระบบ-ui-สวนกุหลาบ) |
| ----------------------------------------- | ----------------------------------- |

# Suankularb Components

This repository is aimed at creating a consistent design system and experience across all Suankularb features and applications.

## Table of contents

- [Installation](#installation)
- [Component List](#component-list)

## Installation

### CSS

Copy and paste the following code into your project's `<head>` tag:

```css
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@suankularb-components/css@latest/dist/css/suankularb-components.min.css" crossorigin="anonymous">
```

### NPM

Run the following command in your project's root directory:

```powershell
npm install --save @suankularb-components/css
```

### Yarn

Run the following command in your project's root directory:

```powershell
yarn add @suankularb-components/css
```

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

`active` class indicates that the Navigation Item is the current page.

```html
<a class="nav__item" href="">
  <i class="icon nav__item__icon">circle</i>
  <span>Item 1</span>
</a>
<a class="nav__item active" href="">
  <i class="icon nav__item__icon">circle</i>
  <span>Active Item</span>
</a>
<a class="nav__item" href="">
  <i class="icon nav__item__icon">circle</i>
  <span>Item 3</span>
</a>
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

### Table

- Table has 2 styles: `outlined` and `elevated`.
- Table’s content is a normal HTML table.

```html
<div class="table__wrapper--outlined">
  <table class="table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table Cell 1</td>
        <td>Table Cell 2</td>
        <td>Table Cell 3</td>
      </tr>
      <tr>
        <td>Table Cell 4</td>
        <td>Table Cell 5</td>
        <td>Table Cell 6</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Input

#### Keyboard Input

- Supports these inputs: `email`, `number`, `password`, `tel`, `text`, and `url`

```html
<div class="input">
  <input type="text" placeholder="Label" />
  <div class="input__placeholder">Label</div>
</div>
```

#### Native Input

- Supports these inputs: `color`, `date`, `datetime-local`, `month`, and `time`

```html
<div class="input--persistent">
  <input type="date" />
  <div class="input--persistent__label">Label</div>
</div>
```

#### Select

- Native

```html
<div class="dropdown--native">
  <select>
    <option>Item 1</option>
    <option>Item 2</option>
    <option>Item 3</option>
    <option>Item 4</option>
  </select>
  <div class="dropdown__label">Label</div>
</div>
```

- With JavaScript

  Apply the class `show` to `dropdown` to show the options.

  ```html
  <div class="dropdown show">
    <!-- Dropdown Button toggles the Options -->
    <button class="dropdown__button" aria-haspopup="listbox" role="combobox">
      <span>Selected Item</span>
      <i class="icon dropdown__icon">expand_more</i>
    </button>

    <!-- Dropdown Options -->
    <div class="dropdown__options" role="listbox">
      <button aria-selected="false" role="option">Item 1</button>
      <button aria-selected="true" role="option" class="selected">
        Selected Item
      </button>
      <button aria-selected="false" role="option">Item 3</button>
      <button aria-selected="false" role="option">Item 4</button>
    </div>

    <div class="dropdown__label">Label</div>
  </div>
  ```

- Without JavaScript\*

  \*While this type doesn’t require JavaScript to show and hide options, it does not handle display of the selected item.

  ```html
  <div class="dropdown dropdown--pure-css">
    <!-- Same as With JavaScript -->
  </div>
  ```

#### Search

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

Select List Items are organized into groups. If your list is not organized into groups, use `select-list--no-group` instead of `select-list`.

```html
<ul class="select-list">
  <!-- List Group -->
  <li class="select-list__group">
    <!-- Group Header -->
    <h3 class="select-list__header">Header 1</h3>

    <!-- Group Items -->
    <ul class="select-list__items">
      <!-- This item is active, and its content is shown in the Active Item section -->
      <li><button class="select-list__item--active">Item 1</button></li>

      <!-- These items are not active -->
      <li><button class="select-list__item--inactive">Item 2</button></li>
      <li><button class="select-list__item--inactive">Item 3</button></li>
    </ul>
  </li>
</ul>
```

## Content Layouts

### Regular Layout

> Components mentioned: [Card](#card)

```html
<main class="content-layout">
  <!-- Cards (see Card component) -->
  <section class="card--outlined">Card 1</section>
  <section class="card--outlined">Card 2</section>
</main>
```

### List Layout

> Components mentioned: [Search](#search), [Select List](#select-list), [Card](#card)

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

# ระบบ UI สวนกุหลาบวิทยาลัย

Repository นี้มีไว้เพื่อเป็นเครื่องมือที่จะช่วยเราสร้างระบบ UI ที่เข้าใจง่ายและสม่ำเสมอ ตลอดภายในแอพพลิเคชั่นทั้งหมดจากโรงเรียนสวนกุหลาบวิทยาลัย

## Component ทั้งหมด

### Button

```html
<!-- Filled button -->
<button class="btn--filled">Filled</button>

<!-- Outlined button -->
<button class="btn--outlined">Outlined</button>

<!-- Text button -->
<button class="btn--text">Text</button>
```

### Navigation

class `active` แสดงว่า Navigation Item นั้นเป็นหน้าปัจจุบัน

```html
<a class="nav__item" href="">
  <i class="icon nav__item__icon">circle</i>
  <span>Item 1</span>
</a>
<a class="nav__item active" href="">
  <i class="icon nav__item__icon">circle</i>
  <span>Active Item</span>
</a>
<a class="nav__item" href="">
  <i class="icon nav__item__icon">circle</i>
  <span>Item 3</span>
</a>
```

### Page Header

Page Header ควรใช้คู่กับพื้นหลังแบบไล่ระดับสี

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

- Card มี 3 ประเภท: `elevated` `outlined` และ `tonal`.
- เนื้อหาของ Card สามารถจัดเป็นกลุ่มๆ ได้ โดยแต่ละกลุ่มต้องมี Card Header และ Card List
- Card List มีหลาย Item
- Item Actions จะแสดงเมื่อผู้ใช้ hover หรือ <kbd>tab</kbd> เข้าไปใน Item

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

### Table

- Table มี 2 ประเภท: `outlined` และ `elevated`
- เนื้อหาของ Table เป็นตาราง HTML

```html
<div class="table__wrapper--outlined">
  <table class="table">
    <thead>
      <tr>
        <th>หัวตาราง 1</th>
        <th>หัวตาราง 1</th>
        <th>หัวตาราง 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>เซลล์ 1</td>
        <td>เซลล์ 2</td>
        <td>เซลล์ 3</td>
      </tr>
      <tr>
        <td>เซลล์ 4</td>
        <td>เซลล์ 5</td>
        <td>เซลล์ 6</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Input

#### ใช้แป้นพิมพ์เท่านั้น

- ใช้ `input` `type` ได้ดังนี้: `email` `number` `password` `tel` `text` และ `url`

```html
<div class="input">
  <input type="text" placeholder="Label" />
  <div class="input__placeholder">Label</div>
</div>
```

#### ใช้ UI ที่เบราว์เซอร์ให้มา

- ใช้ `input` `type` ได้ดังนี้: `color` `date` `datetime-local` `month` และ `time`

```html
<div class="input--persistent">
  <input type="date" />
  <div class="input--persistent__label">Label</div>
</div>
```

#### Select

- Native (ใช้ตามที่เบราว์เซอร์ให้มา)

```html
<div class="dropdown--native">
  <select>
    <option>Item 1</option>
    <option>Item 2</option>
    <option>Item 3</option>
    <option>Item 4</option>
  </select>
  <div class="dropdown__label">Label</div>
</div>
```

- ใช้กับ JavaScript
  การเพิ่ม class `show` ให้ `dropdown` จะแสดง Options

  ```html
  <div class="dropdown show">
    <!-- Dropdown Button toggles the Options -->
    <button class="dropdown__button" aria-haspopup="listbox" role="combobox">
      <span>Selected Item</span>
      <i class="icon dropdown__icon">expand_more</i>
    </button>

    <!-- Dropdown Options -->
    <div class="dropdown__options" role="listbox">
      <button aria-selected="false" role="option">Item 1</button>
      <button aria-selected="true" role="option" class="selected">
        Selected Item
      </button>
      <button aria-selected="false" role="option">Item 3</button>
      <button aria-selected="false" role="option">Item 4</button>
    </div>

    <div class="dropdown__label">Label</div>
  </div>
  ```

- ไม่ใช้ JavaScript\*

  \*ไม่ใช้ JavaScript ในการควบคุมการแสดง Options แต่ยังต้องใช้ในการแสดง Selected Item

  ```html
  <div class="dropdown dropdown--pure-css">
    <!-- เนื้อหาเหมือนกับแบบที่ใช้ JavaScript -->
  </div>
  ```

#### Search

- วาง button ไว้ข้างหน้าและ/หรือข้างหลัง input
- button ควรมี icon เป็นเนื้อหา

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
  <!-- Item สามารถจัดได้เป็นกลุ่มๆ นี่เป็นหนึ่งในกลุ่ม header -->
  <h3 class="select-list__header">Header 1</h3>

  <!-- Item นี้ active และเนื้อหาของ Item นี้จะแสดงในส่วน Active Item -->
  <li><button class="select-list__item--active">Item 1</button></li>

  <!-- Item เหล่านี้ไม่ active -->
  <li><button class="select-list__item--inactive">Item 2</button></li>
  <li><button class="select-list__item--inactive">Item 3</button></li>
</ul>
```

## Layouts

### Regular Layout

> code กล่าวถึง: [Card](#card)

```html
<main class="content-layout">
  <!-- Cards (see Card component) -->
  <section class="card--outlined">Card 1</section>
  <section class="card--outlined">Card 2</section>
</main>
```

### List Layout

> code กล่าวถึง: [Search](#search), [Select List](#select-list), [Card](#card)

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
