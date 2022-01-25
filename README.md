| [Read in English](#suankularb-components) | [อ่านในภาษาไทย](#ระบบ-ui-สวนกุหลาบ) |
| ---- | ---- |

# Suankularb Components

This repository is aimed at creating a consistent designs system and experience across all Suankularb features and applications.

## Documentation

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

# ระบบ UI สวนกุหลาบ

Repository นี้มีไว้เพื่อเป็นเครื่องมือที่จะช่วยเราสร้างระบบ UI ที่เข้าใจง่ายและสม่ำเสมอ ตลอดภายในแอพพลิเคชั่นทั้งหมดจากโรงเรียนสวนกุหลาบวิทยาลัย
