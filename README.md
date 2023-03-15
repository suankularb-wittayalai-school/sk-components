# Suankularb Components

<picture>
  <source
    srcset="https://user-images.githubusercontent.com/26425747/225400385-795cd491-f678-4344-8e69-a887540932d8.png"
    media="(prefers-color-scheme: dark)"
  >
  <img src="https://user-images.githubusercontent.com/26425747/225400369-823cb553-b18b-49f8-9d3d-96302332b78b.png">
</picture>

<br>

SK Components is a design system consisting of tokens and components created with the goal of a consistent and harmonious experience across all Suankularb features and applications.

This repository is a monorepo consisting of the SKCom libraries and a demo application. You can find those in the directories listed below:

| Library/Application | Location               |
| ------------------- | ---------------------- |
| Demo application    | `apps\demo`            |
| SKCom Styles (CSS)  | `packages\skcom-css`   |
| ReSKCom (React)     | `packages\skcom-react` |

## Table of Contents

- [Resources](#resources)
- [Using SKCom](#using-skcom)
- [Developing SKCom](#developing-skcom)

## Resources

> ภาษาไทย (Thai): ในตอนนี้ยังไม่มีเอกสารในภาษาไทย แต่เราวางแผนที่จะจัดทำในอนาคต

- [The full documentation on design and implementation for SKCom](https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing).
- [The full API reference for ReSKCom](https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.hkwxehfhlxn0).
- Interact with the examples from the documentation with the [demo app](#the-demo-application).

## Using SKCom

> **Note**: SKCom Styles is not designed to be installed in apps. Below is how you can use ReSKCom in a React project.

> **Tip**: If you’re using the [Suankularb Next.js Template](https://github.com/suankularb-wittayalai-school/sk-nextjs-template), ReSKCom is already installed and set up.

### Installation

You can install ReSKCom in a React project with the following:

```
npm i @suankularb-components/react
```

### Set up

ReSKCom comes with no palette by default. To use the default palette, wrap your app with the `ThemeProvider` component. Ensure the component wraps all parts of the app that uses SKCom.

In a Next.js app, wrap `<Component {...pageProps} />` with `ThemeProvider`, like so:

```tsx
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

If you wish to create your own palette, study the [`_palette.scss` file](https://github.com/suankularb-wittayalai-school/sk-components/blob/main/packages/skcom-css/src/abstracts/_palette.scss) and declare variables in the same manner in a CSS file, then import it to your app.

### Complete

You can now use ReSKCom in your React project.

## Developing SKCom

Run the following at the project root to start the development server.

```
npm run dev
```

[Learn more](https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.2vpcu3kzzncl).

### The Demo Application

![A screenshot of the About page of the demo application.](https://user-images.githubusercontent.com/26425747/225408232-bb851e65-fd14-42d7-af33-10fdca8d3ebb.png)

After starting the development server, you can access the demo application locally. Go to [`http://localhost:3000/`](http://localhost:3000/).

You can interact with the examples in the documentation here, or dive deeper into how the examples are created by studying `apps\demo`.
