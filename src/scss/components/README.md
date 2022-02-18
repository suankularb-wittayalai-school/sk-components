| [Read in English](#component-list) | [อ่านในภาษาไทย](#รายการ-component) |
| ---------------------------------- | ---------------------------------- |

# Component List

## Table of Contents

- [General Components](#general-components)
- [Input Components](input/README.md)

## General Components

### Buttons

```html
<!-- Filled button -->
<button class="btn--filled">Filled</button>

<!-- Outlined button -->
<button class="btn--outlined">Outlined</button>

<!-- Text button -->
<button class="btn--text">Text</button>
```

### FABs

```html
<!-- Normal FAB -->
<button class="fab fab--primary">
  <div class="fab__content">
    <div class="fab__icon">
      <i class="icon" translate="no">circle</i>
    </div>
  </div>
</button>

<!-- Large FAB -->
<button class="fab--large fab--primary">
  <div class="fab__content">
    <div class="fab__icon">
      <i class="icon" translate="no">circle</i>
    </div>
  </div>
</button>

<!-- Extended FAB -->
<button class="fab--extended fab--primary">
  <div class="fab__content">
    <div class="fab__icon">
      <i class="icon" translate="no">circle</i>
    </div>
    <span>Label</span>
  </div>
</button>
```

### Navigation

`active` class indicates that the Navigation Item is the current page.

```html
<nav class="nav">
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

# รายการ Component

## สารบัญ

- [Component ทั่วไป](#component-ทั่วไป)
- [Component ที่รับข้อมูลจากผู้ใช้](input/README.md)

## Component ทั่วไป

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
