| [Read in English](#suankularb-components) | [อ่านในภาษาไทย](#ระบบ-ui-สวนกุหลาบ) |
| ----------------------------------------- | ----------------------------------- |

# Suankularb Components

This repository is aimed at creating a consistent design system and experience across all Suankularb features and applications.

## Development

If you want to help us develop SK Components, please read carefully below:

- Every directory nested inside of the `scss` directory must have a `_all.scss` file, which must have `@use` for every file inside that directory.
- The file `core.scss` must have `@use` for every `_all.scss` file.
- Compile SCSS to CSS continuously with:
  ```bat
  npm run dev
  ```
  This will create the `dist\css\style.css` file, which can be used in an HTML file for testing.

## Installation

### CSS

Copy and paste the following code into your project’s `<head>` tag:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@suankularb-components/css@latest/dist/css/suankularb-components.min.css"
  crossorigin="anonymous"
/>
```

### NPM

Run the following command in your project’s root directory:

```bat
npm install --save @suankularb-components/css
```

### Yarn

Run the following command in your project’s root directory:

```bat
yarn add @suankularb-components/css
```

# ระบบ UI สวนกุหลาบวิทยาลัย

Repository นี้มีไว้เพื่อเป็นเครื่องมือที่จะช่วยเราสร้างระบบ UI ที่เข้าใจง่ายและสม่ำเสมอ ตลอดภายในแอพพลิเคชั่นทั้งหมดจากโรงเรียนสวนกุหลาบวิทยาลัย

## การช่วยพัฒนา

หากต้องการช่วยพัฒนา SK Components กรุณาอ่านข้อมูลต่อไปนี้

- ในทุกโฟลเดอร์ภายในโฟลเดอร์ `scss` ต้องมีไฟล์ `_all.scss` ซึ่งมี `@use` สำหรับทุกไฟล์ภายในโฟลเดอร์นั้นๆ
- ในไฟล์ `core.scss` ต้องมี `@use` สำหรับทุกไฟล์ `_all.scss`
- compile SCSS ไปยัง CSS อย่างต่อเนื่องด้วยคำสั่ง
  ```bat
  npm run dev
  ```
  จะสร้างไฟล์ `dist\css\style.css` ซึ่งสามารถนำไปใช้ในไฟล์ HTML เพื่อทดสอบได้

## การติดตั้ง

### CSS

คัดลอกส่วนของ CSS ที่ต้องการจากภายในส่วนนี้ไปยังตำแหน่งที่ต้องการ

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@suankularb-components/css@latest/dist/css/suankularb-components.min.css"
  crossorigin="anonymous"
/>
```

### NPM

ใช้คำสั่งต่อไปนี้ใน root directory ของโปรเจกต์

```bat
npm install -s @suankularb-components/css@latest
```

### Yarn

ใช้คำสั่งต่อไปนี้ใน root directory ของโปรเจกต์

```bat
yarn add @suankularb-components/css@latest
```
