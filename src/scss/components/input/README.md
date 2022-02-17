| [Read in English](#input-components) | [อ่านในภาษาไทย](#component-ที่รับข้อมูลจากผู้ใช้) |
| ------------------------------------ | ------------------------------------------------- |

# Input Components

## Keyboard Input

- Supports these inputs: `email`, `number`, `password`, `tel`, `text`, and `url`

```html
<div class="input">
  <input type="text" placeholder="Label" />
  <div class="input__placeholder">Label</div>
</div>
```

## Native Input

- Supports these inputs: `color`, `date`, `datetime-local`, `month`, and `time`

```html
<div class="input--persistent">
  <input type="date" />
  <div class="input--persistent__label">Label</div>
</div>
```

## Select

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

## Search

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

## Select List

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

# Component ที่รับข้อมูลจากผู้ใช้

## ใช้แป้นพิมพ์เท่านั้น

- ใช้ `input` `type` ได้ดังนี้: `email` `number` `password` `tel` `text` และ `url`

```html
<div class="input">
  <input type="text" placeholder="Label" />
  <div class="input__placeholder">Label</div>
</div>
```

## ใช้ UI ที่เบราว์เซอร์ให้มา

- ใช้ `input` `type` ได้ดังนี้: `color` `date` `datetime-local` `month` และ `time`

```html
<div class="input--persistent">
  <input type="date" />
  <div class="input--persistent__label">Label</div>
</div>
```

## Select

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

## Search

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

## Select List

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
