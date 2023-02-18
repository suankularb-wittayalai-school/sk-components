"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Actions: () => Actions,
  AssistChip: () => AssistChip,
  Button: () => Button,
  FAB: () => FAB,
  MaterialIcon: () => MaterialIcon,
  SegmentedButton: () => SegmentedButton,
  ToggleButton: () => ToggleButton,
  useAnimationConfig: () => useAnimationConfig
});
module.exports = __toCommonJS(src_exports);

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

// ../skcom-css/dist/css/components/actions.css
styleInject(".skc-actions {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: .5rem;\n}\n.skc-actions.skc-actions--left {\n  justify-content: flex-start;\n}\n.skc-actions.skc-actions--center {\n  justify-content: center;\n}\n.skc-actions.skc-actions--right {\n  justify-content: flex-end;\n}\n.skc-actions.skc-actions--full {\n  flex-wrap: nowrap;\n}\n.skc-actions.skc-actions--full > .skc-button,\n.skc-actions.skc-actions--full > .skc-toggle-button {\n  width: 100%;\n}\n");

// src/utils/className.ts
function cn(classNames) {
  return classNames.filter((className) => className).join(" ");
}

// src/components/Actions/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Actions({ children, align, style, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    style,
    className: cn([
      "skc-actions",
      align === "left" ? "skc-actions--left" : align === "center" ? "skc-actions--center" : align === "right" ? "skc-actions--right" : align === "full" ? "skc-actions--full" : void 0,
      className
    ]),
    children
  });
}
Actions.displayName = "Actions";

// src/components/Button/index.tsx
var import_framer_motion2 = require("framer-motion");
var React2 = __toESM(require("react"));

// ../skcom-css/dist/css/components/icon.css
styleInject('.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n');

// src/components/MaterialIcon/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function MaterialIcon({
  icon,
  fill,
  weight,
  grade,
  size,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
    "aria-hidden": "true",
    style: {
      ...style,
      fontSize: size ? `${size / 16}rem` : void 0,
      fontVariationSettings: fill || weight || grade || size ? `"FILL" ${fill ? 1 : 0}, "wght" ${weight || 400}, "GRAD" ${grade || 0}, "opsz" ${size || 24}` : void 0
    },
    className: cn(["skc-icon", className]),
    translate: "no",
    children: icon
  });
}
MaterialIcon.displayName = "Button";

// ../skcom-css/dist/css/components/button.css
styleInject(':root {\n  --motion-short-1: 50ms;\n  --motion-short-2: 100ms;\n  --motion-short-3: 150ms;\n  --motion-short-4: 200ms;\n  --motion-medium-1: 250ms;\n  --motion-medium-2: 300ms;\n  --motion-medium-3: 350ms;\n  --motion-medium-4: 400ms;\n  --motion-long-1: 450ms;\n  --motion-long-2: 500ms;\n  --motion-long-3: 550ms;\n  --motion-long-4: 600ms;\n  --motion-extra-long-1: 700ms;\n  --motion-extra-long-2: 800ms;\n  --motion-extra-long-3: 900ms;\n  --motion-extra-long-4: 1000ms;\n  --easing-standard: cubic-bezier(0.2, 0, 0, 1);\n  --easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);\n  --easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);\n  --easing-emphasized: var(--easing-standard);\n  --easing-emphasized-accelerate: cubic-bezier(0.05, 0.7, 0.1, 1);\n  --easing-emphasized-decelerate: cubic-bezier(0.3, 0, 0.8, 0.15);\n}\n:root {\n  --white: #ffffff;\n  --black: #000000;\n  --primary-100: #ffffff;\n  --primary-99: #fafcff;\n  --primary-95: #e4f3ff;\n  --primary-90: #c5e7ff;\n  --primary-80: #80cfff;\n  --primary-70: #20b6f9;\n  --primary-60: #009ad8;\n  --primary-50: #007fb3;\n  --primary-40: #00658f;\n  --primary-30: #004c6d;\n  --primary-20: #00344c;\n  --primary-10: #001e2e;\n  --primary-0: #000000;\n  --secondary-100: #ffffff;\n  --secondary-99: #fcfcfc;\n  --secondary-95: #ffecf3;\n  --secondary-90: #ffd8e8;\n  --secondary-80: #ffafd5;\n  --secondary-70: #ff80c3;\n  --secondary-60: #ff3fb4;\n  --secondary-50: #e20098;\n  --secondary-40: #b50077;\n  --secondary-30: #8b005a;\n  --secondary-20: #62003e;\n  --secondary-10: #3d0025;\n  --secondary-0: #000000;\n  --tertiary-100: #ffffff;\n  --tertiary-99: #fffbf7;\n  --tertiary-95: #fff1b4;\n  --tertiary-90: #ffe24c;\n  --tertiary-80: #e4c521;\n  --tertiary-70: #c7aa00;\n  --tertiary-60: #a98f00;\n  --tertiary-50: #8c7600;\n  --tertiary-40: #6f5d00;\n  --tertiary-30: #544600;\n  --tertiary-20: #3a3000;\n  --tertiary-10: #221b00;\n  --tertiary-0: #000000;\n  --neutral-100: #ffffff;\n  --neutral-99: #fbfcff;\n  --neutral-95: #f0f1f4;\n  --neutral-90: #e1e2e5;\n  --neutral-80: #c5c6c9;\n  --neutral-70: #aaabad;\n  --neutral-60: #909194;\n  --neutral-50: #75777a;\n  --neutral-40: #5c5e61;\n  --neutral-30: #454749;\n  --neutral-20: #2e3133;\n  --neutral-10: #191c1e;\n  --neutral-0: #000000;\n  --neutral-variant-100: #ffffff;\n  --neutral-variant-99: #fafcff;\n  --neutral-variant-95: #ebf1f8;\n  --neutral-variant-90: #dde3ea;\n  --neutral-variant-80: #c1c7ce;\n  --neutral-variant-70: #a6acb2;\n  --neutral-variant-60: #8b9197;\n  --neutral-variant-50: #71787e;\n  --neutral-variant-40: #595f65;\n  --neutral-variant-30: #41484d;\n  --neutral-variant-20: #2b3136;\n  --neutral-variant-10: #161c21;\n  --neutral-variant-0: #000000;\n  --error-100: #ffffff;\n  --error-99: #fcfcfc;\n  --error-95: #ffede9;\n  --error-90: #ffdad4;\n  --error-80: #ffb4a9;\n  --error-70: #ff897a;\n  --error-60: #ff5449;\n  --error-50: #dd3730;\n  --error-40: #ba1b1b;\n  --error-30: #930006;\n  --error-20: #680003;\n  --error-10: #410001;\n  --error-0: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --outline-variant: #c1c7ce;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --outline-variant: #41484d;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --outline-variant: #c1c7ce;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --outline-variant: #41484d;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n:root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.display-large {\n  font-family: var(--font-display);\n  font-size: var(--text-8xl);\n  font-weight: var(--font-regular);\n  line-height: 4rem;\n  letter-spacing: -0.25px;\n}\n.display-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-7xl);\n  font-weight: var(--font-regular);\n  line-height: 3.25rem;\n  letter-spacing: 0px;\n}\n.display-small {\n  font-family: var(--font-display);\n  font-size: var(--text-6xl);\n  font-weight: var(--font-regular);\n  line-height: 2.75rem;\n  letter-spacing: 0px;\n}\n.headline-large {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-regular);\n  line-height: 2.5rem;\n  letter-spacing: 0px;\n}\n.headline-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-regular);\n  line-height: 2.25rem;\n  letter-spacing: 0px;\n}\n.headline-small {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-regular);\n  line-height: 2rem;\n  letter-spacing: 0px;\n}\n.title-large {\n  font-family: var(--font-display);\n  font-size: var(--text-2xl);\n  font-weight: var(--font-regular);\n  line-height: 1.75rem;\n  letter-spacing: 0px;\n}\n.title-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-lg);\n  font-weight: var(--font-medium);\n  line-height: 1.5rem;\n  letter-spacing: .1px;\n}\n.title-small {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.label-large {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.label-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.label-small {\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.body-large {\n  font-family: var(--font-body);\n  font-size: var(--text-lg);\n  font-weight: var(--font-regular);\n  line-height: 1.5rem;\n  letter-spacing: .5px;\n}\n.body-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n}\n.body-small {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-regular);\n  line-height: 1rem;\n  letter-spacing: .4px;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-button {\n  all: unset;\n  font-family: var(--font-display);\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .5rem;\n  padding: .625rem 1.5rem;\n  cursor: pointer;\n  border-radius: var(--rounded-full);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-button[aria-disabled=true] {\n  cursor: default;\n}\n.skc-button[aria-disabled=true]:not(:has(.skc-button__label)):hover > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:not(:has(.skc-button__label)):focus > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:not(:has(.skc-button__label)):active > .skc-button__icon > .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-button[aria-disabled=true]:hover,\n.skc-button[aria-disabled=true]:focus,\n.skc-button[aria-disabled=true]:active {\n  box-shadow: none !important;\n}\n.skc-button[aria-disabled=true]:hover::before,\n.skc-button[aria-disabled=true]:focus::before,\n.skc-button[aria-disabled=true]:active::before {\n  opacity: 0;\n}\n.skc-button[aria-disabled=true]:hover > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:focus > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:active > .skc-button__icon > .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n  transition: none;\n}\n.skc-button[aria-disabled=true]:hover > .skc-button__ripple,\n.skc-button[aria-disabled=true]:focus > .skc-button__ripple,\n.skc-button[aria-disabled=true]:active > .skc-button__ripple {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button:has(.skc-button__icon:first-child):has(.skc-button__label) {\n  padding-left: 1rem;\n}\n.skc-button:not(:has(.skc-button__label)) {\n  padding: .5rem;\n}\n.skc-button__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-button__icon .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.skc-button:not(:has(.skc-button__label)) .skc-button__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n}\n.skc-button:not(:has(.skc-button__label)):hover .skc-button__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-button:not(:has(.skc-button__label)):active .skc-button__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-button__label {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n}\n.skc-button.skc-button--filled {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-button.skc-button--filled::before,\n.skc-button.skc-button--filled .skc-button__ripple {\n  background-color: var(--on-primary);\n}\n.skc-button.skc-button--filled:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--filled:focus::before,\n.skc-button.skc-button--filled:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--filled:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--filled:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--filled.skc-button--dangerous {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-button.skc-button--filled.skc-button--dangerous::before,\n.skc-button.skc-button--filled.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-button.skc-button--filled[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--filled[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--tonal {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--tonal::before,\n.skc-button.skc-button--tonal .skc-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--tonal:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--tonal:focus::before,\n.skc-button.skc-button--tonal:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--tonal:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--tonal:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--tonal.skc-button--dangerous {\n  color: var(--on-error-container);\n  background-color: var(--error-container);\n}\n.skc-button.skc-button--tonal.skc-button--dangerous::before,\n.skc-button.skc-button--tonal.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--on-error-container);\n}\n.skc-button.skc-button--tonal[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--tonal[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--outlined {\n  transition: border-color var(--motion-short-4) var(--easing-standard);\n  color: var(--primary);\n  border: 1px solid var(--outline);\n}\n.skc-button.skc-button--outlined::before,\n.skc-button.skc-button--outlined .skc-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--outlined:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--outlined:focus::before,\n.skc-button.skc-button--outlined:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--outlined:focus {\n  z-index: 10;\n  border-color: var(--primary);\n}\n.skc-button.skc-button--outlined.skc-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected::before,\n.skc-button.skc-button--outlined.skc-button--selected .skc-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected:focus {\n  border-color: var(--secondary);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous::before,\n.skc-button.skc-button--outlined.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--outlined[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--outlined[aria-disabled=true]::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text {\n  padding: .625rem .75rem;\n  color: var(--primary);\n}\n.skc-button.skc-button--text::before,\n.skc-button.skc-button--text .skc-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--text:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--text:focus::before,\n.skc-button.skc-button--text:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--text:focus {\n  border-color: var(--primary);\n}\n.skc-button.skc-button--text.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous::before,\n.skc-button.skc-button--text.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--text[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n}\n.skc-button.skc-button--text[aria-disabled=true]::before {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text:has(.skc-button__icon:first-child) {\n  padding-left: .75rem;\n}\n');

// src/utils/animation.ts
var import_framer_motion = require("framer-motion");
var import_react = __toESM(require("react"));
function useAnimationConfig() {
  return {
    duration: {
      short1: 0.05,
      short2: 0.1,
      short3: 0.15,
      short4: 0.2,
      medium1: 0.25,
      medium2: 0.3,
      medium3: 0.35,
      medium4: 0.4,
      long1: 0.45,
      long2: 0.5,
      long3: 0.55,
      long4: 0.6,
      extraLong1: 0.7,
      extraLong2: 0.8,
      extraLong3: 0.9,
      extraLong4: 1
    },
    easing: {
      linear: [0, 0, 1, 1],
      standard: [0.2, 0, 0, 1],
      standardAccelerate: [0.3, 0, 1, 1],
      standardDecelerate: [0, 0, 0, 1],
      emphasized: [0.2, 0, 0, 1],
      emphasizedAccelerate: [0.05, 0.7, 0.1, 1],
      emphasizedDecelerate: [0.3, 0, 0.8, 0.15]
    }
  };
}
function transition(duration, easing) {
  return {
    type: "tween",
    duration,
    ease: easing
  };
}
function useRipple(parentRef) {
  const { duration, easing } = useAnimationConfig();
  const rippleControls = (0, import_framer_motion.useAnimationControls)();
  const [diameter, setDiameter] = import_react.default.useState(0);
  import_react.default.useEffect(() => {
    const button = parentRef.current;
    if (!button)
      return;
    setDiameter(
      Math.min(
        Math.max(
          Math.max(button.clientWidth, button.clientHeight),
          80
        ),
        160
      )
    );
  }, []);
  const [position, setPosition] = import_react.default.useState({ top: "0", left: "0" });
  function calculatePosition(x, y) {
    const button = parentRef.current;
    if (!button)
      return { top: "0", left: "0" };
    return {
      top: `${y - (button.offsetTop + diameter / 2)}px`,
      left: `${x - (button.offsetLeft + diameter / 2)}px`
    };
  }
  function animateRipple() {
    rippleControls.set({ scale: 0, opacity: 0.36 });
    rippleControls.start({
      scale: 4,
      opacity: 0,
      transition: transition(duration.long4, easing.standard)
    });
  }
  return {
    rippleListeners: {
      onMouseDown: (event) => {
        setPosition(calculatePosition(event.pageX, event.pageY));
        animateRipple();
      },
      onKeyDown: (event) => {
        if (!["Enter", " "].includes(event.key))
          return;
        const button = parentRef.current;
        if (!button)
          return;
        setPosition({
          top: `${button.clientHeight / 2 - diameter / 2}px`,
          left: `${button.clientWidth / 2 - diameter / 2}px`
        });
        animateRipple();
      }
    },
    rippleControls,
    rippleStyle: {
      ...position,
      width: `${diameter}px`,
      height: `${diameter}px`
    }
  };
}

// src/components/Button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  const buttonRef = React2.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);
  const props = {
    ref: buttonRef,
    "aria-disabled": disabled || loading,
    "aria-selected": selected,
    "aria-label": alt,
    title: tooltip,
    style,
    className: cn([
      "skc-button",
      appearance === "filled" ? "skc-button--filled" : appearance === "tonal" ? "skc-button--tonal" : appearance === "outlined" ? "skc-button--outlined" : appearance === "text" ? "skc-button--text" : void 0,
      selected && "skc-button--selected",
      dangerous && "skc-button--dangerous",
      className
    ]),
    onClick: () => {
      if (!(disabled || loading) && onClick && !href)
        onClick();
    },
    ...rippleListeners
  };
  const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      (selected || icon) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "skc-button__icon",
        children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialIcon, {
          icon: "done"
        }) : icon
      }),
      children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "skc-button__label",
        children
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion2.motion.span, {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-button__ripple",
        style: rippleStyle
      })
    ]
  });
  return href && element ? element({ ...props, children: content, href }) : href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
    ...props,
    href,
    children: content
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    ...props,
    type: "button",
    children: content
  });
}
Button.displayName = "Button";

// ../skcom-css/dist/css/components/segmented-button.css
styleInject(":root {\n  --white: #ffffff;\n  --black: #000000;\n  --primary-100: #ffffff;\n  --primary-99: #fafcff;\n  --primary-95: #e4f3ff;\n  --primary-90: #c5e7ff;\n  --primary-80: #80cfff;\n  --primary-70: #20b6f9;\n  --primary-60: #009ad8;\n  --primary-50: #007fb3;\n  --primary-40: #00658f;\n  --primary-30: #004c6d;\n  --primary-20: #00344c;\n  --primary-10: #001e2e;\n  --primary-0: #000000;\n  --secondary-100: #ffffff;\n  --secondary-99: #fcfcfc;\n  --secondary-95: #ffecf3;\n  --secondary-90: #ffd8e8;\n  --secondary-80: #ffafd5;\n  --secondary-70: #ff80c3;\n  --secondary-60: #ff3fb4;\n  --secondary-50: #e20098;\n  --secondary-40: #b50077;\n  --secondary-30: #8b005a;\n  --secondary-20: #62003e;\n  --secondary-10: #3d0025;\n  --secondary-0: #000000;\n  --tertiary-100: #ffffff;\n  --tertiary-99: #fffbf7;\n  --tertiary-95: #fff1b4;\n  --tertiary-90: #ffe24c;\n  --tertiary-80: #e4c521;\n  --tertiary-70: #c7aa00;\n  --tertiary-60: #a98f00;\n  --tertiary-50: #8c7600;\n  --tertiary-40: #6f5d00;\n  --tertiary-30: #544600;\n  --tertiary-20: #3a3000;\n  --tertiary-10: #221b00;\n  --tertiary-0: #000000;\n  --neutral-100: #ffffff;\n  --neutral-99: #fbfcff;\n  --neutral-95: #f0f1f4;\n  --neutral-90: #e1e2e5;\n  --neutral-80: #c5c6c9;\n  --neutral-70: #aaabad;\n  --neutral-60: #909194;\n  --neutral-50: #75777a;\n  --neutral-40: #5c5e61;\n  --neutral-30: #454749;\n  --neutral-20: #2e3133;\n  --neutral-10: #191c1e;\n  --neutral-0: #000000;\n  --neutral-variant-100: #ffffff;\n  --neutral-variant-99: #fafcff;\n  --neutral-variant-95: #ebf1f8;\n  --neutral-variant-90: #dde3ea;\n  --neutral-variant-80: #c1c7ce;\n  --neutral-variant-70: #a6acb2;\n  --neutral-variant-60: #8b9197;\n  --neutral-variant-50: #71787e;\n  --neutral-variant-40: #595f65;\n  --neutral-variant-30: #41484d;\n  --neutral-variant-20: #2b3136;\n  --neutral-variant-10: #161c21;\n  --neutral-variant-0: #000000;\n  --error-100: #ffffff;\n  --error-99: #fcfcfc;\n  --error-95: #ffede9;\n  --error-90: #ffdad4;\n  --error-80: #ffb4a9;\n  --error-70: #ff897a;\n  --error-60: #ff5449;\n  --error-50: #dd3730;\n  --error-40: #ba1b1b;\n  --error-30: #930006;\n  --error-20: #680003;\n  --error-10: #410001;\n  --error-0: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --outline-variant: #c1c7ce;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --outline-variant: #41484d;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --outline-variant: #c1c7ce;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --outline-variant: #41484d;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.skc-segmented-button {\n  display: flex;\n  flex-direction: row;\n}\n.skc-segmented-button > .skc-button {\n  border-radius: 0;\n}\n.skc-segmented-button > .skc-button:first-child {\n  border-radius: var(--rounded-full) 0 0 var(--rounded-full);\n}\n.skc-segmented-button > .skc-button:last-child {\n  border-radius: 0 var(--rounded-full) var(--rounded-full) 0;\n}\n.skc-segmented-button > .skc-button:not(:first-child) {\n  border-left-width: 0;\n}\n.skc-segmented-button.skc-segmented-button--density-0 > .skc-button {\n  padding-block: .625rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-1\\] > .skc-button {\n  padding-block: .5rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-2\\] > .skc-button {\n  padding-block: .375rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-3\\] > .skc-button {\n  padding-block: .25rem;\n}\n.skc-segmented-button.skc-segmented-button--full > .skc-button {\n  width: 100%;\n}\n");

// src/components/SegmentedButton/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function SegmentedButton({
  children,
  alt,
  density,
  full,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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

// src/components/ToggleButton/index.tsx
var import_framer_motion3 = require("framer-motion");
var React3 = __toESM(require("react"));

// ../skcom-css/dist/css/components/toggle-button.css
styleInject(':root {\n  --white: #ffffff;\n  --black: #000000;\n  --primary-100: #ffffff;\n  --primary-99: #fafcff;\n  --primary-95: #e4f3ff;\n  --primary-90: #c5e7ff;\n  --primary-80: #80cfff;\n  --primary-70: #20b6f9;\n  --primary-60: #009ad8;\n  --primary-50: #007fb3;\n  --primary-40: #00658f;\n  --primary-30: #004c6d;\n  --primary-20: #00344c;\n  --primary-10: #001e2e;\n  --primary-0: #000000;\n  --secondary-100: #ffffff;\n  --secondary-99: #fcfcfc;\n  --secondary-95: #ffecf3;\n  --secondary-90: #ffd8e8;\n  --secondary-80: #ffafd5;\n  --secondary-70: #ff80c3;\n  --secondary-60: #ff3fb4;\n  --secondary-50: #e20098;\n  --secondary-40: #b50077;\n  --secondary-30: #8b005a;\n  --secondary-20: #62003e;\n  --secondary-10: #3d0025;\n  --secondary-0: #000000;\n  --tertiary-100: #ffffff;\n  --tertiary-99: #fffbf7;\n  --tertiary-95: #fff1b4;\n  --tertiary-90: #ffe24c;\n  --tertiary-80: #e4c521;\n  --tertiary-70: #c7aa00;\n  --tertiary-60: #a98f00;\n  --tertiary-50: #8c7600;\n  --tertiary-40: #6f5d00;\n  --tertiary-30: #544600;\n  --tertiary-20: #3a3000;\n  --tertiary-10: #221b00;\n  --tertiary-0: #000000;\n  --neutral-100: #ffffff;\n  --neutral-99: #fbfcff;\n  --neutral-95: #f0f1f4;\n  --neutral-90: #e1e2e5;\n  --neutral-80: #c5c6c9;\n  --neutral-70: #aaabad;\n  --neutral-60: #909194;\n  --neutral-50: #75777a;\n  --neutral-40: #5c5e61;\n  --neutral-30: #454749;\n  --neutral-20: #2e3133;\n  --neutral-10: #191c1e;\n  --neutral-0: #000000;\n  --neutral-variant-100: #ffffff;\n  --neutral-variant-99: #fafcff;\n  --neutral-variant-95: #ebf1f8;\n  --neutral-variant-90: #dde3ea;\n  --neutral-variant-80: #c1c7ce;\n  --neutral-variant-70: #a6acb2;\n  --neutral-variant-60: #8b9197;\n  --neutral-variant-50: #71787e;\n  --neutral-variant-40: #595f65;\n  --neutral-variant-30: #41484d;\n  --neutral-variant-20: #2b3136;\n  --neutral-variant-10: #161c21;\n  --neutral-variant-0: #000000;\n  --error-100: #ffffff;\n  --error-99: #fcfcfc;\n  --error-95: #ffede9;\n  --error-90: #ffdad4;\n  --error-80: #ffb4a9;\n  --error-70: #ff897a;\n  --error-60: #ff5449;\n  --error-50: #dd3730;\n  --error-40: #ba1b1b;\n  --error-30: #930006;\n  --error-20: #680003;\n  --error-10: #410001;\n  --error-0: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --outline-variant: #c1c7ce;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --outline-variant: #41484d;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --outline-variant: #c1c7ce;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --outline-variant: #41484d;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-toggle-button {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  place-content: center;\n  padding: .5rem;\n  transition: background-color var(--motion-short-4) var(--easing-standard), color var(--motion-short-4) var(--easing-standard);\n  border-radius: var(--rounded-full);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-toggle-button:hover::before {\n  opacity: .08;\n}\n.skc-toggle-button:focus::before,\n.skc-toggle-button:active::before {\n  opacity: .12;\n}\n.skc-toggle-button[aria-disabled=true] {\n  cursor: default;\n}\n.skc-toggle-button[aria-disabled=true]:hover::before,\n.skc-toggle-button[aria-disabled=true]:focus::before,\n.skc-toggle-button[aria-disabled=true]:active::before {\n  opacity: 0;\n}\n.skc-toggle-button[aria-disabled=true]:hover > .skc-button__ripple,\n.skc-toggle-button[aria-disabled=true]:focus > .skc-button__ripple,\n.skc-toggle-button[aria-disabled=true]:active > .skc-button__ripple {\n  background-color: rgba(0, 0, 0, 0) !important;\n}\n.skc-toggle-button .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n}\n.skc-toggle-button:not([aria-disabled=true]):hover .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button:not([aria-disabled=true]):active .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected:not([aria-disabled=true]):hover .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected:not([aria-disabled=true]):active .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-toggle-button.skc-toggle-button--filled {\n  color: var(--primary);\n  background-color: var(--surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--filled::before,\n.skc-toggle-button.skc-toggle-button--filled .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected {\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous {\n  color: var(--error);\n  background-color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-toggle-button.skc-toggle-button--filled[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--filled[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--tonal {\n  color: var(--on-surface-variant);\n  background-color: var(--surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--tonal::before,\n.skc-toggle-button.skc-toggle-button--tonal .skc-toggle-button__ripple {\n  background-color: var(--on-surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous {\n  color: var(--error);\n  background-color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-toggle-button.skc-toggle-button--tonal[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--tonal[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined {\n  color: var(--on-surface);\n  border: 1px solid var(--outline);\n}\n.skc-toggle-button.skc-toggle-button--outlined::before,\n.skc-toggle-button.skc-toggle-button--outlined .skc-toggle-button__ripple {\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected {\n  color: var(--inverse-on-surface);\n  border-color: var(--inverse-surface);\n  background-color: var(--inverse-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--inverse-on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous {\n  color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true]::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true].skc-toggle-button--selected {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true].skc-toggle-button--selected::before {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard {\n  color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard::before,\n.skc-toggle-button.skc-toggle-button--standard .skc-toggle-button__ripple {\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected {\n  color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--standard[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n}\n');

// src/components/ToggleButton/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function ToggleButton({
  appearance,
  icon,
  alt,
  tooltip,
  dangerous,
  disabled,
  value,
  onChange,
  style,
  className
}) {
  const buttonRef = React3.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
    ref: buttonRef,
    "aria-disabled": disabled,
    "aria-pressed": value,
    "aria-label": alt,
    title: tooltip,
    style,
    className: cn([
      "skc-toggle-button",
      appearance === "filled" ? "skc-toggle-button--filled" : appearance === "tonal" ? "skc-toggle-button--tonal" : appearance === "outlined" ? "skc-toggle-button--outlined" : appearance === "standard" ? "skc-toggle-button--standard" : void 0,
      value && "skc-toggle-button--selected",
      dangerous && "skc-toggle-button--dangerous",
      className
    ]),
    onClick: () => onChange && !disabled && onChange(!value),
    ...rippleListeners,
    children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion3.motion.span, {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-toggle-button__ripple",
        style: rippleStyle
      })
    ]
  });
}
ToggleButton.displayName = "Toggle Button";

// src/components/AssistChip/index.tsx
var import_framer_motion4 = require("framer-motion");
var React4 = __toESM(require("react"));

// ../skcom-css/dist/css/components/chip.css
styleInject(':root {\n  --white: #ffffff;\n  --black: #000000;\n  --primary-100: #ffffff;\n  --primary-99: #fafcff;\n  --primary-95: #e4f3ff;\n  --primary-90: #c5e7ff;\n  --primary-80: #80cfff;\n  --primary-70: #20b6f9;\n  --primary-60: #009ad8;\n  --primary-50: #007fb3;\n  --primary-40: #00658f;\n  --primary-30: #004c6d;\n  --primary-20: #00344c;\n  --primary-10: #001e2e;\n  --primary-0: #000000;\n  --secondary-100: #ffffff;\n  --secondary-99: #fcfcfc;\n  --secondary-95: #ffecf3;\n  --secondary-90: #ffd8e8;\n  --secondary-80: #ffafd5;\n  --secondary-70: #ff80c3;\n  --secondary-60: #ff3fb4;\n  --secondary-50: #e20098;\n  --secondary-40: #b50077;\n  --secondary-30: #8b005a;\n  --secondary-20: #62003e;\n  --secondary-10: #3d0025;\n  --secondary-0: #000000;\n  --tertiary-100: #ffffff;\n  --tertiary-99: #fffbf7;\n  --tertiary-95: #fff1b4;\n  --tertiary-90: #ffe24c;\n  --tertiary-80: #e4c521;\n  --tertiary-70: #c7aa00;\n  --tertiary-60: #a98f00;\n  --tertiary-50: #8c7600;\n  --tertiary-40: #6f5d00;\n  --tertiary-30: #544600;\n  --tertiary-20: #3a3000;\n  --tertiary-10: #221b00;\n  --tertiary-0: #000000;\n  --neutral-100: #ffffff;\n  --neutral-99: #fbfcff;\n  --neutral-95: #f0f1f4;\n  --neutral-90: #e1e2e5;\n  --neutral-80: #c5c6c9;\n  --neutral-70: #aaabad;\n  --neutral-60: #909194;\n  --neutral-50: #75777a;\n  --neutral-40: #5c5e61;\n  --neutral-30: #454749;\n  --neutral-20: #2e3133;\n  --neutral-10: #191c1e;\n  --neutral-0: #000000;\n  --neutral-variant-100: #ffffff;\n  --neutral-variant-99: #fafcff;\n  --neutral-variant-95: #ebf1f8;\n  --neutral-variant-90: #dde3ea;\n  --neutral-variant-80: #c1c7ce;\n  --neutral-variant-70: #a6acb2;\n  --neutral-variant-60: #8b9197;\n  --neutral-variant-50: #71787e;\n  --neutral-variant-40: #595f65;\n  --neutral-variant-30: #41484d;\n  --neutral-variant-20: #2b3136;\n  --neutral-variant-10: #161c21;\n  --neutral-variant-0: #000000;\n  --error-100: #ffffff;\n  --error-99: #fcfcfc;\n  --error-95: #ffede9;\n  --error-90: #ffdad4;\n  --error-80: #ffb4a9;\n  --error-70: #ff897a;\n  --error-60: #ff5449;\n  --error-50: #dd3730;\n  --error-40: #ba1b1b;\n  --error-30: #930006;\n  --error-20: #680003;\n  --error-10: #410001;\n  --error-0: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --outline-variant: #c1c7ce;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --outline-variant: #41484d;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --outline-variant: #c1c7ce;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --outline-variant: #41484d;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n:root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.display-large {\n  font-family: var(--font-display);\n  font-size: var(--text-8xl);\n  font-weight: var(--font-regular);\n  line-height: 4rem;\n  letter-spacing: -0.25px;\n}\n.display-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-7xl);\n  font-weight: var(--font-regular);\n  line-height: 3.25rem;\n  letter-spacing: 0px;\n}\n.display-small {\n  font-family: var(--font-display);\n  font-size: var(--text-6xl);\n  font-weight: var(--font-regular);\n  line-height: 2.75rem;\n  letter-spacing: 0px;\n}\n.headline-large {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-regular);\n  line-height: 2.5rem;\n  letter-spacing: 0px;\n}\n.headline-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-regular);\n  line-height: 2.25rem;\n  letter-spacing: 0px;\n}\n.headline-small {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-regular);\n  line-height: 2rem;\n  letter-spacing: 0px;\n}\n.title-large {\n  font-family: var(--font-display);\n  font-size: var(--text-2xl);\n  font-weight: var(--font-regular);\n  line-height: 1.75rem;\n  letter-spacing: 0px;\n}\n.title-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-lg);\n  font-weight: var(--font-medium);\n  line-height: 1.5rem;\n  letter-spacing: .1px;\n}\n.title-small {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.label-large,\n._skc-chip__label,\n.skc-assist-chip__label {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.label-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.label-small {\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.body-large {\n  font-family: var(--font-body);\n  font-size: var(--text-lg);\n  font-weight: var(--font-regular);\n  line-height: 1.5rem;\n  letter-spacing: .5px;\n}\n.body-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n}\n.body-small {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-regular);\n  line-height: 1rem;\n  letter-spacing: .4px;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n._skc-chip,\n.skc-assist-chip {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .5rem;\n  padding: .375rem 1rem;\n  color: var(--on-surface);\n  border: 1px solid var(--outline);\n  border-radius: .5rem;\n}\n._skc-chip::before,\n.skc-assist-chip::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  background-color: var(--on-surface-variant);\n}\n._skc-chip:hover::before,\n.skc-assist-chip:hover::before {\n  opacity: .08;\n}\n._skc-chip:focus::before,\n.skc-assist-chip:focus::before,\n._skc-chip:active::before,\n.skc-assist-chip:active::before {\n  opacity: .12;\n}\n._skc-chip:has(._skc-chip__icon:first-child, .skc-assist-chip__icon:first-child),\n.skc-assist-chip:has(._skc-chip__icon:first-child, .skc-assist-chip__icon:first-child) {\n  padding-left: .5rem;\n}\n._skc-chip:has(._skc-chip__icon:last-child, .skc-assist-chip__icon:last-child),\n.skc-assist-chip:has(._skc-chip__icon:last-child, .skc-assist-chip__icon:last-child) {\n  padding-right: .5rem;\n}\n._skc-chip[aria-disabled=true],\n[aria-disabled=true].skc-assist-chip {\n  cursor: default;\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n._skc-chip[aria-disabled=true]::before,\n[aria-disabled=true].skc-assist-chip::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n._skc-chip[aria-disabled=true] ._skc-chip__ripple,\n._skc-chip[aria-disabled=true] .skc-assist-chip__ripple,\n[aria-disabled=true].skc-assist-chip ._skc-chip__ripple,\n[aria-disabled=true].skc-assist-chip .skc-assist-chip__ripple {\n  background-color: rgba(0, 0, 0, 0);\n}\n._skc-chip[aria-disabled=true] ._skc-chip__icon .skc-icon,\n._skc-chip[aria-disabled=true] .skc-assist-chip__icon .skc-icon,\n[aria-disabled=true].skc-assist-chip ._skc-chip__icon .skc-icon,\n[aria-disabled=true].skc-assist-chip .skc-assist-chip__icon .skc-icon {\n  color: var(--on-surface);\n}\n._skc-chip--elevated,\n.skc-assist-chip.skc-assist-chip--elevated {\n  border: none;\n  background-color: var(--surface-1);\n  box-shadow: var(--shadow-1);\n}\n._skc-chip--elevated[aria-disabled=true],\n[aria-disabled=true].skc-assist-chip.skc-assist-chip--elevated {\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n  box-shadow: none;\n}\n._skc-chip--elevated[aria-disabled=true]::before,\n[aria-disabled=true].skc-assist-chip.skc-assist-chip--elevated::before {\n  border: none;\n  background-color: var(--on-surface);\n}\n._skc-chip--dangerous ._skc-chip__icon .skc-icon,\n._skc-chip--dangerous .skc-assist-chip__icon .skc-icon,\n.skc-assist-chip:not([aria-disabled=true]).skc-assist-chip--dangerous ._skc-chip__icon .skc-icon,\n.skc-assist-chip:not([aria-disabled=true]).skc-assist-chip--dangerous .skc-assist-chip__icon .skc-icon {\n  color: var(--error);\n}\n._skc-chip__label,\n.skc-assist-chip__label {\n  font-family: var(--font-display);\n}\n._skc-chip__icon,\n.skc-assist-chip__icon {\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--primary);\n}\n._skc-chip__icon .skc-icon,\n.skc-assist-chip__icon .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n  font-size: 1.125rem;\n}\n._skc-chip__ripple,\n.skc-assist-chip__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n  background-color: var(--on-surface-variant);\n}\n.skc-assist-chip:has(.skc-assist-chip__icon:first-child) {\n  padding-left: .5rem;\n}\n');

// src/components/AssistChip/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AssistChip({
  children,
  icon,
  tooltip,
  elevated,
  dangerous,
  loading,
  disabled,
  onClick,
  href,
  element,
  style,
  className
}) {
  const buttonRef = React4.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);
  const props = {
    ref: buttonRef,
    "aria-disabled": disabled,
    title: tooltip,
    onClick: () => {
      if (!(disabled || loading) && onClick && !href)
        onClick();
    },
    style,
    className: cn([
      "skc-assist-chip",
      elevated && "skc-assist-chip--elevated",
      dangerous && "skc-assist-chip--dangerous",
      className
    ]),
    ...rippleListeners
  };
  const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "skc-assist-chip__icon",
        children: icon
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "skc-assist-chip__label",
        children
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion4.motion.span, {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-assist-chip__ripple",
        style: rippleStyle
      })
    ]
  });
  return href && element ? element({ ...props, children: content, href }) : href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
    ...props,
    href,
    children: content
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    ...props,
    type: "button",
    children: content
  });
}
AssistChip.displayName = "AssistChip";

// src/components/FAB/index.tsx
var import_framer_motion5 = require("framer-motion");
var React5 = __toESM(require("react"));

// ../skcom-css/dist/css/components/fab.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.display-large {\n  font-family: var(--font-display);\n  font-size: var(--text-8xl);\n  font-weight: var(--font-regular);\n  line-height: 4rem;\n  letter-spacing: -0.25px;\n}\n.display-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-7xl);\n  font-weight: var(--font-regular);\n  line-height: 3.25rem;\n  letter-spacing: 0px;\n}\n.display-small {\n  font-family: var(--font-display);\n  font-size: var(--text-6xl);\n  font-weight: var(--font-regular);\n  line-height: 2.75rem;\n  letter-spacing: 0px;\n}\n.headline-large {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-regular);\n  line-height: 2.5rem;\n  letter-spacing: 0px;\n}\n.headline-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-regular);\n  line-height: 2.25rem;\n  letter-spacing: 0px;\n}\n.headline-small {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-regular);\n  line-height: 2rem;\n  letter-spacing: 0px;\n}\n.title-large {\n  font-family: var(--font-display);\n  font-size: var(--text-2xl);\n  font-weight: var(--font-regular);\n  line-height: 1.75rem;\n  letter-spacing: 0px;\n}\n.title-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-lg);\n  font-weight: var(--font-medium);\n  line-height: 1.5rem;\n  letter-spacing: .1px;\n}\n.title-small {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.label-large,\n.skc-fab__label {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.label-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.label-small {\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.body-large {\n  font-family: var(--font-body);\n  font-size: var(--text-lg);\n  font-weight: var(--font-regular);\n  line-height: 1.5rem;\n  letter-spacing: .5px;\n}\n.body-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n}\n.body-small {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-regular);\n  line-height: 1rem;\n  letter-spacing: .4px;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-fab {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .75rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: var(--shadow-3);\n}\n.skc-fab::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-fab:has(.skc-fab__label) {\n  padding: 1rem 1.5rem;\n}\n.skc-fab:has(.skc-fab__label):has(.skc-fab__icon:first-child) {\n  padding-left: 1rem;\n}\n.skc-fab__wrapper:hover .skc-fab::before,\n.skc-fab:hover::before {\n  opacity: .08;\n}\n.skc-fab__wrapper:focus .skc-fab::before,\n.skc-fab__wrapper:active .skc-fab::before,\n.skc-fab:focus::before,\n.skc-fab:active::before {\n  opacity: .12;\n}\n.skc-fab__wrapper {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-fab__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-fab__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n}\n.skc-fab__wrapper:hover .skc-fab__icon .skc-icon,\n.skc-fab:hover .skc-fab__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-fab__wrapper:active .skc-fab__icon .skc-icon,\n.skc-fab:active .skc-fab__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-fab__label {\n  font-family: var(--font-display);\n}\n.skc-fab.skc-fab--small {\n  padding: .5rem;\n  border-radius: var(--rounded-lg);\n}\n.skc-fab.skc-fab--standard {\n  padding: 1rem;\n  border-radius: var(--rounded-xl);\n}\n.skc-fab.skc-fab--large {\n  padding: 1.875rem;\n  border-radius: var(--rounded-2xl);\n}\n.skc-fab.skc-fab--large .skc-fab__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.25rem;\n}\n.skc-fab__wrapper:hover .skc-fab.skc-fab--large .skc-fab__icon .skc-icon,\n.skc-fab:hover .skc-fab.skc-fab--large .skc-fab__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.25rem;\n}\n.skc-fab__wrapper:active .skc-fab.skc-fab--large .skc-fab__icon .skc-icon,\n.skc-fab:active .skc-fab.skc-fab--large .skc-fab__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.25rem;\n}\n.skc-fab.skc-fab--surface {\n  color: var(--primary);\n  background-color: var(--surface-3);\n}\n.skc-fab.skc-fab--surface::before,\n.skc-fab.skc-fab--surface .skc-fab__ripple {\n  background-color: var(--primary);\n}\n.skc-fab.skc-fab--primary {\n  color: var(--on-primary-container);\n  background-color: var(--primary-container);\n}\n.skc-fab.skc-fab--primary::before,\n.skc-fab.skc-fab--primary .skc-fab__ripple {\n  background-color: var(--on-primary-container);\n}\n.skc-fab.skc-fab--secondary {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-fab.skc-fab--secondary::before,\n.skc-fab.skc-fab--secondary .skc-fab__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-fab.skc-fab--tertiary {\n  color: var(--on-tertiary-container);\n  background-color: var(--tertiary-container);\n}\n.skc-fab.skc-fab--tertiary::before,\n.skc-fab.skc-fab--tertiary .skc-fab__ripple {\n  background-color: var(--on-tertiary-container);\n}\n');

// src/components/FAB/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function FAB({
  children,
  color,
  size,
  icon,
  alt,
  tooltip,
  stateOnScroll,
  onClick,
  href,
  element,
  style,
  className
}) {
  const fabRef = React5.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(fabRef);
  const [scrollDir, setScrollDir] = React5.useState("up");
  let prevScrollY = 0;
  React5.useEffect(() => {
    window.onscroll = () => {
      const { scrollY } = window;
      const direction = prevScrollY < scrollY ? "down" : "up";
      prevScrollY = scrollY;
      setScrollDir(direction);
    };
    return () => {
      window.onscroll = null;
    };
  }, []);
  const props = {
    "aria-label": alt,
    title: tooltip,
    className: "skc-fab__wrapper",
    ...rippleListeners
  };
  const content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion5.AnimatePresence, {
    children: !(stateOnScroll === "disappear" && !(scrollDir === "up")) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_framer_motion5.motion.div, {
      ref: fabRef,
      style,
      className: cn([
        "skc-fab",
        color === "surface" ? "skc-fab--surface" : color === "primary" ? "skc-fab--primary" : color === "secondary" ? "skc-fab--secondary" : color === "tertiary" ? "skc-fab--tertiary" : void 0,
        size === "small" ? "skc-fab--small" : size === "large" ? "skc-fab--large" : "skc-fab--standard",
        className
      ]),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "skc-fab__icon",
          children: icon
        }),
        !(stateOnScroll === "minimize" && !(scrollDir === "up")) && children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "skc-fab__label",
          children
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion5.motion.span, {
          initial: { scale: 0, opacity: 0.36 },
          animate: rippleControls,
          className: "skc-fab__ripple",
          style: rippleStyle
        })
      ]
    })
  });
  return href && element ? element({
    children: content,
    href,
    ...props
  }) : href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
    href,
    ...props,
    children: content
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    type: "button",
    ...props,
    children: content
  });
}
FAB.displayName = "FAB";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Actions,
  AssistChip,
  Button,
  FAB,
  MaterialIcon,
  SegmentedButton,
  ToggleButton,
  useAnimationConfig
});
