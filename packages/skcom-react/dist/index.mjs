// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined")
    return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// ../skcom-css/dist/css/components/button.css
styleInject(':root {\n  --motion-short-1: 50ms;\n  --motion-short-2: 100ms;\n  --motion-short-3: 150ms;\n  --motion-short-4: 200ms;\n  --motion-medium-1: 250ms;\n  --motion-medium-2: 300ms;\n  --motion-medium-3: 350ms;\n  --motion-medium-4: 400ms;\n  --motion-long-1: 450ms;\n  --motion-long-2: 500ms;\n  --motion-long-3: 550ms;\n  --motion-long-4: 600ms;\n  --motion-extra-long-1: 700ms;\n  --motion-extra-long-2: 800ms;\n  --motion-extra-long-3: 900ms;\n  --motion-extra-long-4: 1000ms;\n  --easing-standard: cubic-bezier(0.2, 0, 0, 1);\n  --easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);\n  --easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);\n  --easing-emphasized: var(--easing-standard);\n  --easing-emphasized-accelerate: cubic-bezier(0.05, 0.7, 0.1, 1);\n  --easing-emphasized-decelerate: cubic-bezier(0.3, 0, 0.8, 0.15);\n}\n:root {\n  --white: #ffffff;\n  --black: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n:root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-variation-settings: "FILL" 0;\n}\n.skc-icon--filled {\n  font-variation-settings: "FILL" 1;\n}\n.skc-icon--weight-100 {\n  font-variation-settings: "wght" 100;\n}\n.skc-icon--weight-200 {\n  font-variation-settings: "wght" 200;\n}\n.skc-icon--weight-300 {\n  font-variation-settings: "wght" 300;\n}\n.skc-icon--weight-400 {\n  font-variation-settings: "wght" 400;\n}\n.skc-icon--weight-500 {\n  font-variation-settings: "wght" 500;\n}\n.skc-icon--weight-600 {\n  font-variation-settings: "wght" 600;\n}\n.skc-icon--weight-700 {\n  font-variation-settings: "wght" 700;\n}\n.skc-icon-grade-\\[-25\\] {\n  font-variation-settings: "GRAD" -25;\n}\n.skc-icon--grade-0 {\n  font-variation-settings: "wght" 0;\n}\n.skc-icon--grade-200 {\n  font-variation-settings: "wght" 200;\n}\n.skc-icon--size-20,\n.skc-button__icon .skc-icon {\n  font-size: 20px;\n  font-variation-settings: "opsz" 20;\n}\n.skc-icon--size-24 {\n  font-size: 24px;\n  font-variation-settings: "opsz" 24;\n}\n.skc-icon--size-40 {\n  font-size: 40px;\n  font-variation-settings: "opsz" 40;\n}\n.skc-icon--size-48 {\n  font-size: 48px;\n  font-variation-settings: "opsz" 48;\n}\n.skc-button {\n  all: unset;\n  font-family: var(--font-display);\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .5rem;\n  padding: .625rem 1.5rem;\n  cursor: pointer;\n  border-radius: var(--rounded-full);\n}\n.skc-button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-button:has(.skc-button__icon:first-child) {\n  padding-left: 1rem;\n}\n.skc-button__label {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n}\n.skc-button.skc-button--filled {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-button.skc-button--filled::before {\n  background-color: var(--on-primary);\n}\n.skc-button.skc-button--filled:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--filled:focus::before,\n.skc-button.skc-button--filled:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--filled:hover,\n.skc-button.skc-button--filled:focus {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--filled:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--filled.skc-button--dangerous {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-button.skc-button--filled.skc-button--dangerous::before {\n  background-color: var(--on-error);\n}\n.skc-button.skc-button--tonal {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--tonal::before {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--tonal:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--tonal:focus::before,\n.skc-button.skc-button--tonal:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--tonal:hover,\n.skc-button.skc-button--tonal:focus {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--tonal:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--tonal.skc-button--dangerous {\n  color: var(--on-error-container);\n  background-color: var(--error-container);\n}\n.skc-button.skc-button--tonal.skc-button--dangerous::before {\n  background-color: var(--on-error-container);\n}\n.skc-button.skc-button--outlined {\n  transition: border-color var(--motion-short-4) var(--easing-standard);\n  color: var(--primary);\n  border: 1px solid var(--outline);\n}\n.skc-button.skc-button--outlined::before {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--outlined:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--outlined:focus::before,\n.skc-button.skc-button--outlined:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--outlined:focus {\n  z-index: 10;\n  border-color: var(--primary);\n}\n.skc-button.skc-button--outlined.skc-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected::before {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected:focus {\n  border-color: var(--secondary);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous::before {\n  background-color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--text {\n  padding: .625rem .75rem;\n  color: var(--primary);\n}\n.skc-button.skc-button--text::before {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--text:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--text:focus::before,\n.skc-button.skc-button--text:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--text:focus {\n  border-color: var(--primary);\n}\n.skc-button.skc-button--text.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous::before {\n  background-color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--text:has(.skc-button__icon:first-child) {\n  padding-left: .75rem;\n}\n');

// src/utils/className.ts
function cn(classNames) {
  return classNames.filter((className) => className).join(" ");
}

// ../skcom-css/dist/css/components/icon.css
styleInject('.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-variation-settings: "FILL" 0;\n}\n.skc-icon--filled {\n  font-variation-settings: "FILL" 1;\n}\n.skc-icon--weight-100 {\n  font-variation-settings: "wght" 100;\n}\n.skc-icon--weight-200 {\n  font-variation-settings: "wght" 200;\n}\n.skc-icon--weight-300 {\n  font-variation-settings: "wght" 300;\n}\n.skc-icon--weight-400 {\n  font-variation-settings: "wght" 400;\n}\n.skc-icon--weight-500 {\n  font-variation-settings: "wght" 500;\n}\n.skc-icon--weight-600 {\n  font-variation-settings: "wght" 600;\n}\n.skc-icon--weight-700 {\n  font-variation-settings: "wght" 700;\n}\n.skc-icon-grade-\\[-25\\] {\n  font-variation-settings: "GRAD" -25;\n}\n.skc-icon--grade-0 {\n  font-variation-settings: "wght" 0;\n}\n.skc-icon--grade-200 {\n  font-variation-settings: "wght" 200;\n}\n.skc-icon--size-20 {\n  font-size: 20px;\n  font-variation-settings: "opsz" 20;\n}\n.skc-icon--size-24 {\n  font-size: 24px;\n  font-variation-settings: "opsz" 24;\n}\n.skc-icon--size-40 {\n  font-size: 40px;\n  font-variation-settings: "opsz" 40;\n}\n.skc-icon--size-48 {\n  font-size: 48px;\n  font-variation-settings: "opsz" 48;\n}\n');

// src/MaterialIcon/index.tsx
import { jsx } from "react/jsx-runtime";
function MaterialIcon({
  icon,
  fill,
  weight,
  grade,
  size,
  style,
  className
}) {
  return /* @__PURE__ */ jsx("i", {
    "aria-hidden": "true",
    style,
    className: cn([
      "skc-icon",
      fill && "skc-icon--filled",
      weight && `skc-icon--weight-${weight}`,
      grade == -25 ? "skc-icon--grade-[-25]" : grade !== void 0 ? `skc-icon--grade-${grade}` : void 0,
      size && `skc-icon--size-${size}`,
      className
    ]),
    translate: "no",
    children: icon
  });
}
MaterialIcon.displayName = "Button";

// src/Button/index.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function Button({
  children,
  appearance,
  icon,
  alt,
  tooltip,
  selected,
  dangerous,
  loading,
  disabled,
  onClick,
  href,
  element,
  style,
  className
}) {
  const props = {
    style,
    className: cn([
      "skc-button",
      appearance === "filled" ? "skc-button--filled" : appearance === "tonal" ? "skc-button--tonal" : appearance === "outlined" ? "skc-button--outlined" : appearance === "text" ? "skc-button--text" : void 0,
      selected && "skc-button--selected",
      dangerous && "skc-button--dangerous",
      (loading || disabled) && "skc-button--disabled",
      className
    ])
  };
  const content = /* @__PURE__ */ jsxs(Fragment, {
    children: [
      (selected || icon) && /* @__PURE__ */ jsx2("div", {
        className: "skc-button__icon",
        children: selected ? /* @__PURE__ */ jsx2(MaterialIcon, {
          icon: "done"
        }) : icon
      }),
      children && /* @__PURE__ */ jsx2("span", {
        className: "skc-button__label",
        children
      })
    ]
  });
  return href && element ? element({ ...props, children: content, href }) : href ? /* @__PURE__ */ jsx2("a", {
    ...props,
    href,
    children: content
  }) : /* @__PURE__ */ jsx2("button", {
    ...props,
    type: "button",
    onClick,
    children: content
  });
}
Button.displayName = "Button";

// ../skcom-css/dist/css/components/segmented-button.css
styleInject(":root {\n  --white: #ffffff;\n  --black: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.skc-segmented-button {\n  display: flex;\n  flex-direction: row;\n}\n.skc-segmented-button > .skc-button {\n  border-radius: 0;\n}\n.skc-segmented-button > .skc-button:first-child {\n  border-radius: var(--rounded-full) 0 0 var(--rounded-full);\n}\n.skc-segmented-button > .skc-button:last-child {\n  border-radius: 0 var(--rounded-full) var(--rounded-full) 0;\n}\n.skc-segmented-button > .skc-button:not(:first-child) {\n  border-left-width: 0;\n}\n.skc-segmented-button.skc-segmented-button--density-0 > .skc-button {\n  padding-block: .625rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-1\\] > .skc-button {\n  padding-block: .5rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-2\\] > .skc-button {\n  padding-block: .375rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-3\\] > .skc-button {\n  padding-block: .25rem;\n}\n.skc-segmented-button.skc-segmented-button--full > .skc-button {\n  width: 100%;\n}\n");

// src/SegmentedButton/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function SegmentedButton({
  children,
  alt,
  density,
  full,
  style,
  className
}) {
  return /* @__PURE__ */ jsx3("div", {
    style,
    className: cn([
      "skc-segmented-button",
      density == 0 ? "skc-segmented-button--density-0" : density !== void 0 ? `skc-segmented-button--density-[${density}]` : void 0,
      full && "skc-segmented-button--full",
      className
    ]),
    role: "group",
    "aria-label": alt,
    children
  });
}
SegmentedButton.displayName = "Segmented Button";
export {
  Button,
  MaterialIcon,
  SegmentedButton
};
