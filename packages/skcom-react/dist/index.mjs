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
import { jsx } from "react/jsx-runtime";
function Actions({ children, align, style, className }) {
  return /* @__PURE__ */ jsx("div", {
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
import { motion as motion2 } from "framer-motion";
import * as React2 from "react";

// ../skcom-css/dist/css/components/icon.css
styleInject('.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 1,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n');

// src/components/MaterialIcon/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function MaterialIcon({
  icon,
  fill,
  weight,
  grade,
  size,
  style,
  className
}) {
  return /* @__PURE__ */ jsx2("i", {
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
styleInject(':root {\n  --motion-short-1: 50ms;\n  --motion-short-2: 100ms;\n  --motion-short-3: 150ms;\n  --motion-short-4: 200ms;\n  --motion-medium-1: 250ms;\n  --motion-medium-2: 300ms;\n  --motion-medium-3: 350ms;\n  --motion-medium-4: 400ms;\n  --motion-long-1: 450ms;\n  --motion-long-2: 500ms;\n  --motion-long-3: 550ms;\n  --motion-long-4: 600ms;\n  --motion-extra-long-1: 700ms;\n  --motion-extra-long-2: 800ms;\n  --motion-extra-long-3: 900ms;\n  --motion-extra-long-4: 1000ms;\n  --easing-standard: cubic-bezier(0.2, 0, 0, 1);\n  --easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);\n  --easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);\n  --easing-emphasized: var(--easing-standard);\n  --easing-emphasized-accelerate: cubic-bezier(0.05, 0.7, 0.1, 1);\n  --easing-emphasized-decelerate: cubic-bezier(0.3, 0, 0.8, 0.15);\n}\n:root {\n  --white: #ffffff;\n  --black: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n:root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 1,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-button {\n  all: unset;\n  font-family: var(--font-display);\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .5rem;\n  padding: .625rem 1.5rem;\n  cursor: pointer;\n  border-radius: var(--rounded-full);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-button[aria-disabled=true] {\n  cursor: default;\n}\n.skc-button[aria-disabled=true]:hover,\n.skc-button[aria-disabled=true]:focus,\n.skc-button[aria-disabled=true]:active {\n  box-shadow: none !important;\n}\n.skc-button[aria-disabled=true]:hover::before,\n.skc-button[aria-disabled=true]:focus::before,\n.skc-button[aria-disabled=true]:active::before {\n  opacity: 0;\n}\n.skc-button[aria-disabled=true]:hover > .skc-button__ripple,\n.skc-button[aria-disabled=true]:focus > .skc-button__ripple,\n.skc-button[aria-disabled=true]:active > .skc-button__ripple {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button:has(.skc-button__icon:first-child) {\n  padding-left: 1rem;\n}\n.skc-button__ripple {\n  position: absolute;\n  z-index: 90;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-button__icon .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.skc-button__label {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n}\n.skc-button.skc-button--filled {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-button.skc-button--filled::before,\n.skc-button.skc-button--filled .skc-button__ripple {\n  background-color: var(--on-primary);\n}\n.skc-button.skc-button--filled:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--filled:focus::before,\n.skc-button.skc-button--filled:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--filled:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--filled:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--filled.skc-button--dangerous {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-button.skc-button--filled.skc-button--dangerous::before,\n.skc-button.skc-button--filled.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-button.skc-button--filled[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--filled[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--tonal {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--tonal::before,\n.skc-button.skc-button--tonal .skc-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--tonal:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--tonal:focus::before,\n.skc-button.skc-button--tonal:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--tonal:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--tonal:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--tonal.skc-button--dangerous {\n  color: var(--on-error-container);\n  background-color: var(--error-container);\n}\n.skc-button.skc-button--tonal.skc-button--dangerous::before,\n.skc-button.skc-button--tonal.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--on-error-container);\n}\n.skc-button.skc-button--tonal[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--tonal[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--outlined {\n  transition: border-color var(--motion-short-4) var(--easing-standard);\n  color: var(--primary);\n  border: 1px solid var(--outline);\n}\n.skc-button.skc-button--outlined::before,\n.skc-button.skc-button--outlined .skc-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--outlined:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--outlined:focus::before,\n.skc-button.skc-button--outlined:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--outlined:focus {\n  z-index: 10;\n  border-color: var(--primary);\n}\n.skc-button.skc-button--outlined.skc-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected::before,\n.skc-button.skc-button--outlined.skc-button--selected .skc-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected:focus {\n  border-color: var(--secondary);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous::before,\n.skc-button.skc-button--outlined.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--outlined[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--outlined[aria-disabled=true]::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text {\n  padding: .625rem .75rem;\n  color: var(--primary);\n}\n.skc-button.skc-button--text::before,\n.skc-button.skc-button--text .skc-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--text:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--text:focus::before,\n.skc-button.skc-button--text:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--text:focus {\n  border-color: var(--primary);\n}\n.skc-button.skc-button--text.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous::before,\n.skc-button.skc-button--text.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--text[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n}\n.skc-button.skc-button--text[aria-disabled=true]::before {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text:has(.skc-button__icon:first-child) {\n  padding-left: .75rem;\n}\n');

// src/utils/animation.ts
import {
  useAnimationControls
} from "framer-motion";
import React from "react";
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
  const rippleControls = useAnimationControls();
  const [diameter, setDiameter] = React.useState(0);
  React.useEffect(() => {
    const button = parentRef.current;
    setDiameter(
      Math.min(Math.max(button.clientWidth, button.clientHeight), 160)
    );
  }, []);
  const [position, setPosition] = React.useState({ top: "0", left: "0" });
  function calculatePosition(x, y) {
    const button = parentRef.current;
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
      onTouchStart: (event) => {
        if (event.touches.length !== 1)
          return;
        const touch = event.touches[0];
        setPosition(calculatePosition(touch.pageX, touch.pageY));
        animateRipple();
      },
      onKeyDown: (event) => {
        if (!["Enter", " "].includes(event.key))
          return;
        const button = parentRef.current;
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
import { Fragment, jsx as jsx3, jsxs } from "react/jsx-runtime";
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
  const content = /* @__PURE__ */ jsxs(Fragment, {
    children: [
      (selected || icon) && /* @__PURE__ */ jsx3("div", {
        className: "skc-button__icon",
        children: selected ? /* @__PURE__ */ jsx3(MaterialIcon, {
          icon: "done"
        }) : icon
      }),
      children && /* @__PURE__ */ jsx3("span", {
        className: "skc-button__label",
        children
      })
    ]
  });
  return href && element ? element({ ...props, children: content, href }) : href ? /* @__PURE__ */ jsx3("a", {
    ...props,
    href,
    children: content
  }) : /* @__PURE__ */ jsxs("button", {
    ...props,
    type: "button",
    children: [
      content,
      /* @__PURE__ */ jsx3(motion2.span, {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-button__ripple",
        style: rippleStyle
      })
    ]
  });
}
Button.displayName = "Button";

// ../skcom-css/dist/css/components/segmented-button.css
styleInject(":root {\n  --white: #ffffff;\n  --black: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.skc-segmented-button {\n  display: flex;\n  flex-direction: row;\n}\n.skc-segmented-button > .skc-button {\n  border-radius: 0;\n}\n.skc-segmented-button > .skc-button:first-child {\n  border-radius: var(--rounded-full) 0 0 var(--rounded-full);\n}\n.skc-segmented-button > .skc-button:last-child {\n  border-radius: 0 var(--rounded-full) var(--rounded-full) 0;\n}\n.skc-segmented-button > .skc-button:not(:first-child) {\n  border-left-width: 0;\n}\n.skc-segmented-button.skc-segmented-button--density-0 > .skc-button {\n  padding-block: .625rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-1\\] > .skc-button {\n  padding-block: .5rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-2\\] > .skc-button {\n  padding-block: .375rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-3\\] > .skc-button {\n  padding-block: .25rem;\n}\n.skc-segmented-button.skc-segmented-button--full > .skc-button {\n  width: 100%;\n}\n");

// src/components/SegmentedButton/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function SegmentedButton({
  children,
  alt,
  density,
  full,
  style,
  className
}) {
  return /* @__PURE__ */ jsx4("div", {
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
import { motion as motion3 } from "framer-motion";
import * as React3 from "react";

// ../skcom-css/dist/css/components/toggle-button.css
styleInject(':root {\n  --white: #ffffff;\n  --black: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n:root {\n  --motion-short-1: 50ms;\n  --motion-short-2: 100ms;\n  --motion-short-3: 150ms;\n  --motion-short-4: 200ms;\n  --motion-medium-1: 250ms;\n  --motion-medium-2: 300ms;\n  --motion-medium-3: 350ms;\n  --motion-medium-4: 400ms;\n  --motion-long-1: 450ms;\n  --motion-long-2: 500ms;\n  --motion-long-3: 550ms;\n  --motion-long-4: 600ms;\n  --motion-extra-long-1: 700ms;\n  --motion-extra-long-2: 800ms;\n  --motion-extra-long-3: 900ms;\n  --motion-extra-long-4: 1000ms;\n  --easing-standard: cubic-bezier(0.2, 0, 0, 1);\n  --easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);\n  --easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);\n  --easing-emphasized: var(--easing-standard);\n  --easing-emphasized-accelerate: cubic-bezier(0.05, 0.7, 0.1, 1);\n  --easing-emphasized-decelerate: cubic-bezier(0.3, 0, 0.8, 0.15);\n}\n:root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 1,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-button {\n  all: unset;\n  font-family: var(--font-display);\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .5rem;\n  padding: .625rem 1.5rem;\n  cursor: pointer;\n  border-radius: var(--rounded-full);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-button[aria-disabled=true] {\n  cursor: default;\n}\n.skc-button[aria-disabled=true]:hover,\n.skc-button[aria-disabled=true]:focus,\n.skc-button[aria-disabled=true]:active {\n  box-shadow: none !important;\n}\n.skc-button[aria-disabled=true]:hover::before,\n.skc-button[aria-disabled=true]:focus::before,\n.skc-button[aria-disabled=true]:active::before {\n  opacity: 0;\n}\n.skc-button[aria-disabled=true]:hover > .skc-button__ripple,\n.skc-button[aria-disabled=true]:hover > .skc-toggle-button__ripple,\n.skc-button[aria-disabled=true]:focus > .skc-button__ripple,\n.skc-button[aria-disabled=true]:focus > .skc-toggle-button__ripple,\n.skc-button[aria-disabled=true]:active > .skc-button__ripple,\n.skc-button[aria-disabled=true]:active > .skc-toggle-button__ripple {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button:has(.skc-button__icon:first-child) {\n  padding-left: 1rem;\n}\n.skc-button__ripple,\n.skc-toggle-button__ripple {\n  position: absolute;\n  z-index: 90;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-button__icon .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.skc-button__label {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n}\n.skc-button.skc-button--filled {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-button.skc-button--filled::before,\n.skc-button.skc-button--filled .skc-button__ripple,\n.skc-button.skc-button--filled .skc-toggle-button__ripple {\n  background-color: var(--on-primary);\n}\n.skc-button.skc-button--filled:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--filled:focus::before,\n.skc-button.skc-button--filled:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--filled:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--filled:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--filled.skc-button--dangerous {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-button.skc-button--filled.skc-button--dangerous::before,\n.skc-button.skc-button--filled.skc-button--dangerous .skc-button__ripple,\n.skc-button.skc-button--filled.skc-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-button.skc-button--filled[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--filled[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--tonal {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--tonal::before,\n.skc-button.skc-button--tonal .skc-button__ripple,\n.skc-button.skc-button--tonal .skc-toggle-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--tonal:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--tonal:focus::before,\n.skc-button.skc-button--tonal:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--tonal:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--tonal:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--tonal.skc-button--dangerous {\n  color: var(--on-error-container);\n  background-color: var(--error-container);\n}\n.skc-button.skc-button--tonal.skc-button--dangerous::before,\n.skc-button.skc-button--tonal.skc-button--dangerous .skc-button__ripple,\n.skc-button.skc-button--tonal.skc-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--on-error-container);\n}\n.skc-button.skc-button--tonal[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--tonal[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--outlined {\n  transition: border-color var(--motion-short-4) var(--easing-standard);\n  color: var(--primary);\n  border: 1px solid var(--outline);\n}\n.skc-button.skc-button--outlined::before,\n.skc-button.skc-button--outlined .skc-button__ripple,\n.skc-button.skc-button--outlined .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--outlined:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--outlined:focus::before,\n.skc-button.skc-button--outlined:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--outlined:focus {\n  z-index: 10;\n  border-color: var(--primary);\n}\n.skc-button.skc-button--outlined.skc-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected::before,\n.skc-button.skc-button--outlined.skc-button--selected .skc-button__ripple,\n.skc-button.skc-button--outlined.skc-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected:focus {\n  border-color: var(--secondary);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous::before,\n.skc-button.skc-button--outlined.skc-button--dangerous .skc-button__ripple,\n.skc-button.skc-button--outlined.skc-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--outlined[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--outlined[aria-disabled=true]::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text {\n  padding: .625rem .75rem;\n  color: var(--primary);\n}\n.skc-button.skc-button--text::before,\n.skc-button.skc-button--text .skc-button__ripple,\n.skc-button.skc-button--text .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--text:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--text:focus::before,\n.skc-button.skc-button--text:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--text:focus {\n  border-color: var(--primary);\n}\n.skc-button.skc-button--text.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous::before,\n.skc-button.skc-button--text.skc-button--dangerous .skc-button__ripple,\n.skc-button.skc-button--text.skc-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--text[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n}\n.skc-button.skc-button--text[aria-disabled=true]::before {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text:has(.skc-button__icon:first-child) {\n  padding-left: .75rem;\n}\n.skc-toggle-button {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  place-content: center;\n  padding: .5rem;\n  transition: background-color, color var(--motion-short-4) var(--easing-standard);\n  border-radius: var(--rounded-full);\n}\n.skc-toggle-button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-toggle-button:hover::before {\n  opacity: .08;\n}\n.skc-toggle-button:focus::before,\n.skc-toggle-button:active::before {\n  opacity: .12;\n}\n.skc-toggle-button .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n}\n.skc-toggle-button:hover .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button:active .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected:hover .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected:active .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--filled {\n  color: var(--primary);\n  background-color: var(--surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--filled::before,\n.skc-toggle-button.skc-toggle-button--filled .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected {\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous {\n  color: var(--error);\n  background-color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-toggle-button.skc-toggle-button--tonal {\n  color: var(--on-surface-variant);\n  background-color: var(--surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--tonal::before,\n.skc-toggle-button.skc-toggle-button--tonal .skc-toggle-button__ripple {\n  background-color: var(--on-surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous {\n  color: var(--error);\n  background-color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-toggle-button.skc-toggle-button--outlined {\n  color: var(--on-surface);\n  border: 1px solid var(--outline);\n}\n.skc-toggle-button.skc-toggle-button--outlined::before,\n.skc-toggle-button.skc-toggle-button--outlined .skc-toggle-button__ripple {\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected {\n  color: var(--inverse-on-surface);\n  border-color: var(--inverse-surface);\n  background-color: var(--inverse-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--inverse-on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous {\n  color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--standard {\n  color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard::before,\n.skc-toggle-button.skc-toggle-button--standard .skc-toggle-button__ripple {\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected {\n  color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n');

// src/components/ToggleButton/index.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2("button", {
    ref: buttonRef,
    "aria-disabled": disabled,
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
    onClick: () => onChange && onChange(!value),
    ...rippleListeners,
    children: [
      icon,
      /* @__PURE__ */ jsx5(motion3.span, {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-toggle-button__ripple",
        style: rippleStyle
      })
    ]
  });
}
ToggleButton.displayName = "Toggle Button";
export {
  Actions,
  Button,
  MaterialIcon,
  SegmentedButton,
  ToggleButton,
  useAnimationConfig
};
