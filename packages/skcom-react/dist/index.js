"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
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
  Card: () => Card,
  CardContent: () => CardContent,
  CardHeader: () => CardHeader,
  Columns: () => Columns,
  ContentLayout: () => ContentLayout,
  Dialog: () => Dialog,
  DialogContent: () => DialogContent,
  DialogHeader: () => DialogHeader,
  Divider: () => Divider,
  FAB: () => FAB,
  FullscreenDialog: () => FullscreenDialog,
  Header: () => Header,
  List: () => List,
  ListItem: () => ListItem,
  ListItemContent: () => ListItemContent,
  MaterialIcon: () => MaterialIcon,
  NavBar: () => NavBar,
  NavBarItem: () => NavBarItem,
  NavDrawer: () => NavDrawer,
  NavDrawerItem: () => NavDrawerItem,
  NavDrawerSection: () => NavDrawerSection,
  PageHeader: () => PageHeader,
  RootLayout: () => RootLayout,
  Section: () => Section,
  SegmentedButton: () => SegmentedButton,
  ThemeProvider: () => ThemeProvider,
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style,
      className: cn([
        "skc-actions",
        align === "left" ? "skc-actions--left" : align === "center" ? "skc-actions--center" : align === "right" ? "skc-actions--right" : align === "full" ? "skc-actions--full" : void 0,
        className
      ]),
      children
    }
  );
}
Actions.displayName = "Actions";

// src/components/Button/index.tsx
var import_framer_motion2 = require("framer-motion");
var React2 = __toESM(require("react"));

// ../skcom-css/dist/css/components/icon.css
styleInject('.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n');

// src/components/MaterialIcon/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function MaterialIcon({
  icon,
  fill,
  weight,
  grade,
  size,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "i",
    {
      "aria-hidden": "true",
      style: __spreadProps(__spreadValues({}, style), {
        fontSize: size ? `${size / 16}rem` : void 0,
        fontVariationSettings: fill || weight || grade || size ? `"FILL" ${fill ? 1 : 0}, "wght" ${weight || 400}, "GRAD" ${grade || 0}, "opsz" ${size || 24}` : void 0
      }),
      className: cn(["skc-icon", className]),
      translate: "no",
      children: icon
    }
  );
}
MaterialIcon.displayName = "MaterialIcon";

// ../skcom-css/dist/css/components/button.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-button {\n  all: unset;\n  font-family: var(--font-display);\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .5rem;\n  padding: .625rem 1.5rem;\n  cursor: pointer;\n  border-radius: var(--rounded-full);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-button::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-button[aria-disabled=true] {\n  cursor: default;\n}\n.skc-button[aria-disabled=true]:not(:has(.skc-button__label)):hover > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:not(:has(.skc-button__label)):focus > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:not(:has(.skc-button__label)):active > .skc-button__icon > .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-button[aria-disabled=true]:hover,\n.skc-button[aria-disabled=true]:focus,\n.skc-button[aria-disabled=true]:active {\n  box-shadow: none !important;\n}\n.skc-button[aria-disabled=true]:hover::before,\n.skc-button[aria-disabled=true]:focus::before,\n.skc-button[aria-disabled=true]:active::before {\n  opacity: 0;\n}\n.skc-button[aria-disabled=true]:hover > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:focus > .skc-button__icon > .skc-icon,\n.skc-button[aria-disabled=true]:active > .skc-button__icon > .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n  transition: none;\n}\n.skc-button[aria-disabled=true]:hover > .skc-button__ripple,\n.skc-button[aria-disabled=true]:focus > .skc-button__ripple,\n.skc-button[aria-disabled=true]:active > .skc-button__ripple {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button:has(.skc-button__icon:first-child):has(.skc-button__label) {\n  padding-left: 1rem;\n}\n.skc-button:not(:has(.skc-button__label)) {\n  padding: .5rem;\n}\n.skc-button__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-button__icon .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.skc-button:not(:has(.skc-button__label)) .skc-button__icon .skc-icon {\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-button:not(:has(.skc-button__label)):hover .skc-button__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-button:not(:has(.skc-button__label)):active .skc-button__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-button__label {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n  font-family: var(--font-display);\n}\n.skc-button:not(:has(.skc-button__icon)) .skc-button__label {\n  text-align: center;\n}\n.skc-button.skc-button--filled {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-button.skc-button--filled::before,\n.skc-button.skc-button--filled .skc-button__ripple {\n  background-color: var(--on-primary);\n}\n.skc-button.skc-button--filled:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--filled:focus::before,\n.skc-button.skc-button--filled:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--filled:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--filled:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--filled.skc-button--dangerous {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-button.skc-button--filled.skc-button--dangerous::before,\n.skc-button.skc-button--filled.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-button.skc-button--filled[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--filled[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--tonal {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--tonal::before,\n.skc-button.skc-button--tonal .skc-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--tonal:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--tonal:focus::before,\n.skc-button.skc-button--tonal:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--tonal:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-button.skc-button--tonal:active {\n  box-shadow: none;\n}\n.skc-button.skc-button--tonal.skc-button--dangerous {\n  color: var(--on-error-container);\n  background-color: var(--error-container);\n}\n.skc-button.skc-button--tonal.skc-button--dangerous::before,\n.skc-button.skc-button--tonal.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--on-error-container);\n}\n.skc-button.skc-button--tonal[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--tonal[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-button.skc-button--outlined {\n  transition: border-color var(--motion-short-4) var(--easing-standard);\n  color: var(--primary);\n  border: 1px solid var(--outline);\n}\n.skc-button.skc-button--outlined::before,\n.skc-button.skc-button--outlined .skc-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--outlined:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--outlined:focus::before,\n.skc-button.skc-button--outlined:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--outlined:focus {\n  z-index: 10;\n  border-color: var(--primary);\n}\n.skc-button.skc-button--outlined.skc-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected::before,\n.skc-button.skc-button--outlined.skc-button--selected .skc-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-button.skc-button--outlined.skc-button--selected:focus {\n  border-color: var(--secondary);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous::before,\n.skc-button.skc-button--outlined.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--outlined.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--outlined[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--outlined[aria-disabled=true]::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text {\n  color: var(--primary);\n}\n.skc-button.skc-button--text::before,\n.skc-button.skc-button--text .skc-button__ripple {\n  background-color: var(--primary);\n}\n.skc-button.skc-button--text:hover::before {\n  opacity: .08;\n}\n.skc-button.skc-button--text:focus::before,\n.skc-button.skc-button--text:active::before {\n  opacity: .12;\n}\n.skc-button.skc-button--text:focus {\n  border-color: var(--primary);\n}\n.skc-button.skc-button--text.skc-button--dangerous {\n  color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous::before,\n.skc-button.skc-button--text.skc-button--dangerous .skc-button__ripple {\n  background-color: var(--error);\n}\n.skc-button.skc-button--text.skc-button--dangerous:focus {\n  border-color: var(--error);\n}\n.skc-button.skc-button--text[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n}\n.skc-button.skc-button--text[aria-disabled=true]::before {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-button.skc-button--text:has(.skc-button__label) {\n  padding: .625rem .75rem;\n}\n.skc-button.skc-button--text:has(.skc-button__label):has(.skc-button__icon:first-child) {\n  padding-left: .75rem;\n}\n');

// src/utils/animation.ts
var import_framer_motion = require("framer-motion");
var import_react = __toESM(require("react"));
function useAnimationConfig() {
  return {
    /**
     * Duration: how long the transition takes.
     */
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
    /**
     * Easing: the easing definition.
     */
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
function useRipple(parentRef, options) {
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
          // Use either the width or height of parent element, whichever is
          // bigger
          Math.max(button.clientWidth, button.clientHeight),
          // Minimum diameter of 80px; square element causes the ripple to be
          // less impactful
          80
        ),
        // Maximum diameter of 160px; big element causes the ripple to scale
        // too fast
        160
      )
    );
  }, []);
  const [position, setPosition] = import_react.default.useState({ top: "0", left: "0" });
  function calculatePosition(x, y) {
    var _a, _b;
    const button = parentRef.current;
    if (!button)
      return { top: "0", left: "0" };
    const posCorrection = {
      x: ((_a = options == null ? void 0 : options.posCorrection) == null ? void 0 : _a.x) || 0,
      y: ((_b = options == null ? void 0 : options.posCorrection) == null ? void 0 : _b.y) || 0
    };
    return {
      top: `${y - (button.offsetTop + diameter / 2) + posCorrection.y}px`,
      left: `${x - (button.offsetLeft + diameter / 2) + posCorrection.x}px`
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
    /**
     * Event listeners on the parent element.
     */
    rippleListeners: {
      // Use the mouse position to calculate the ripple position and animate it
      onMouseDown: (event) => {
        setPosition(
          calculatePosition(
            (options == null ? void 0 : options.useClientPos) ? event.clientX : event.pageX,
            (options == null ? void 0 : options.useClientPos) ? event.clientY : event.pageY
          )
        );
        animateRipple();
      },
      // On key down, put the ripple in the middle of the Button and animate it
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
    /**
     * Framer Motion animation controls to put on the ripple.
     */
    rippleControls,
    /**
     * Styles to put on the ripple.
     */
    rippleStyle: __spreadProps(__spreadValues({}, position), {
      width: `${diameter}px`,
      height: `${diameter}px`
    })
  };
}

// src/components/Button/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  element: Element,
  style,
  className
}) {
  const buttonRef = React2.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);
  const props = __spreadValues({
    ref: buttonRef,
    // We’re using `aria-disabled` instead of `disabled` because it does not
    // disable tabbing in, which is better for accessibility.
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
    }
  }, rippleListeners);
  const content = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    (selected || icon) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "skc-button__icon", children: selected ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MaterialIcon, { icon: "done" }) : icon }),
    children && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "skc-button__label", children }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_framer_motion2.motion.span,
      {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-button__ripple",
        style: rippleStyle
      }
    )
  ] });
  return (
    // Render with `element` if defined
    href && Element ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Element, __spreadProps(__spreadValues({}, props), { href, children: content })) : (
      // Render an `<a>` if link passed in
      href ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", __spreadProps(__spreadValues({}, props), { href, children: content })) : (
        // Otherwise, render a `<button>`
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", __spreadProps(__spreadValues({}, props), { type: "button", children: content }))
      )
    )
  );
}
Button.displayName = "Button";

// ../skcom-css/dist/css/components/segmented-button.css
styleInject(".skc-segmented-button {\n  display: flex;\n  flex-direction: row;\n}\n.skc-segmented-button > .skc-button {\n  border-radius: 0;\n}\n.skc-segmented-button > .skc-button:first-child {\n  border-radius: var(--rounded-full) 0 0 var(--rounded-full);\n}\n.skc-segmented-button > .skc-button:last-child {\n  border-radius: 0 var(--rounded-full) var(--rounded-full) 0;\n}\n.skc-segmented-button > .skc-button:not(:first-child) {\n  border-left-width: 0;\n}\n.skc-segmented-button.skc-segmented-button--density-0 > .skc-button {\n  padding-block: .625rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-1\\] > .skc-button {\n  padding-block: .5rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-2\\] > .skc-button {\n  padding-block: .375rem;\n}\n.skc-segmented-button.skc-segmented-button--density-\\[-3\\] > .skc-button {\n  padding-block: .25rem;\n}\n.skc-segmented-button.skc-segmented-button--full > .skc-button {\n  width: 100%;\n}\n");

// src/components/SegmentedButton/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function SegmentedButton({
  children,
  alt,
  density,
  full,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
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
    }
  );
}
SegmentedButton.displayName = "SegmentedButton";

// src/components/ToggleButton/index.tsx
var import_framer_motion3 = require("framer-motion");
var React3 = __toESM(require("react"));

// ../skcom-css/dist/css/components/toggle-button.css
styleInject('.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-toggle-button {\n  transition: background-color var(--motion-short-4) var(--easing-standard), color var(--motion-short-4) var(--easing-standard);\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  place-content: center;\n  padding: .5rem;\n  border-radius: var(--rounded-full);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-toggle-button:hover::before {\n  opacity: .08;\n}\n.skc-toggle-button:focus::before,\n.skc-toggle-button:active::before {\n  opacity: .12;\n}\n.skc-toggle-button[aria-disabled=true] {\n  cursor: default;\n}\n.skc-toggle-button[aria-disabled=true]:hover::before,\n.skc-toggle-button[aria-disabled=true]:focus::before,\n.skc-toggle-button[aria-disabled=true]:active::before {\n  opacity: 0;\n}\n.skc-toggle-button[aria-disabled=true]:hover > .skc-button__ripple,\n.skc-toggle-button[aria-disabled=true]:focus > .skc-button__ripple,\n.skc-toggle-button[aria-disabled=true]:active > .skc-button__ripple {\n  background-color: rgba(0, 0, 0, 0) !important;\n}\n.skc-toggle-button .skc-icon {\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button:not([aria-disabled=true]):hover .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button:not([aria-disabled=true]):active .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected:not([aria-disabled=true]):hover .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button.skc-toggle-button--selected:not([aria-disabled=true]):active .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-toggle-button__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-toggle-button.skc-toggle-button--filled {\n  color: var(--primary);\n  background-color: var(--surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--filled::before,\n.skc-toggle-button.skc-toggle-button--filled .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected {\n  color: var(--on-primary);\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-primary);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous {\n  color: var(--error);\n  background-color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--filled.skc-toggle-button--dangerous.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-toggle-button.skc-toggle-button--filled[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--filled[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--tonal {\n  color: var(--on-surface-variant);\n  background-color: var(--surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--tonal::before,\n.skc-toggle-button.skc-toggle-button--tonal .skc-toggle-button__ripple {\n  background-color: var(--on-surface-variant);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous {\n  color: var(--error);\n  background-color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--on-error);\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--tonal.skc-toggle-button--dangerous.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--on-error);\n}\n.skc-toggle-button.skc-toggle-button--tonal[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--tonal[aria-disabled=true]::before {\n  opacity: .3157894737;\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined {\n  color: var(--on-surface);\n  border: 1px solid var(--outline);\n}\n.skc-toggle-button.skc-toggle-button--outlined::before,\n.skc-toggle-button.skc-toggle-button--outlined .skc-toggle-button__ripple {\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected {\n  color: var(--inverse-on-surface);\n  border-color: var(--inverse-surface);\n  background-color: var(--inverse-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--inverse-on-surface);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous {\n  color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous::before,\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous .skc-toggle-button__ripple {\n  background-color: var(--error);\n}\n.skc-toggle-button.skc-toggle-button--outlined.skc-toggle-button--dangerous.skc-toggle-button--selected {\n  color: var(--error-container);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true]::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true].skc-toggle-button--selected {\n  background-color: rgba(0, 0, 0, 0);\n}\n.skc-toggle-button.skc-toggle-button--outlined[aria-disabled=true].skc-toggle-button--selected::before {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard {\n  color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard::before,\n.skc-toggle-button.skc-toggle-button--standard .skc-toggle-button__ripple {\n  background-color: var(--on-surface);\n}\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected {\n  color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected::before,\n.skc-toggle-button.skc-toggle-button--standard.skc-toggle-button--selected .skc-toggle-button__ripple {\n  background-color: var(--primary);\n}\n.skc-toggle-button.skc-toggle-button--standard[aria-disabled=true] {\n  opacity: .38;\n  color: var(--on-surface);\n}\n');

// src/components/ToggleButton/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "button",
    __spreadProps(__spreadValues({
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
      onClick: () => onChange && !disabled && onChange(!value)
    }, rippleListeners), {
      children: [
        icon,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_framer_motion3.motion.span,
          {
            initial: { scale: 0, opacity: 0.36 },
            animate: rippleControls,
            className: "skc-toggle-button__ripple",
            style: rippleStyle
          }
        )
      ]
    })
  );
}
ToggleButton.displayName = "ToggleButton";

// src/components/Card/index.tsx
var React4 = __toESM(require("react"));

// ../skcom-css/dist/css/components/card.css
styleInject('.skc-card {\n  display: flex;\n  color: var(--on-surface);\n  border-radius: var(--rounded-lg);\n}\n.skc-card.skc-card--outlined {\n  border: 1px solid var(--outline-variant);\n  background-color: var(--surface);\n}\n.skc-card.skc-card--elevated {\n  background-color: var(--surface-1);\n  box-shadow: var(--shadow-2);\n}\n.skc-card.skc-card--filled {\n  background-color: var(--surface-variant);\n}\n.skc-card.skc-card--filled.skc-card--row {\n  border: 1px solid var(--outline-variant);\n}\n.skc-card,\n.skc-card.skc-card--column {\n  flex-direction: column;\n}\n.skc-card.skc-card--row {\n  flex-direction: row;\n}\n.skc-card.skc-card--state-layer {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.skc-card.skc-card--state-layer::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-card.skc-card--state-layer:hover::before {\n  opacity: .08;\n}\n.skc-card.skc-card--state-layer:focus::before,\n.skc-card.skc-card--state-layer:active::before {\n  opacity: .12;\n}\n.skc-card.skc-card--state-layer.skc-card--outlined {\n  transition: border-color var(--motion-short-4) var(--easing-standard);\n}\n.skc-card.skc-card--state-layer.skc-card--outlined:focus {\n  border-color: var(--primary);\n}\n.skc-card.skc-card--state-layer .skc-card__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-card.skc-card--state-layer::before,\n.skc-card.skc-card--state-layer .skc-card__ripple {\n  background-color: var(--primary);\n}\n.skc-card.skc-card--shadow {\n  transition: box-shadow var(--motion-short-4) var(--easing-standard);\n}\n.skc-card.skc-card--shadow.skc-card--outlined {\n  transition: border-color var(--motion-short-4) var(--easing-standard), box-shadow var(--motion-short-4) var(--easing-standard);\n}\n.skc-card.skc-card--shadow:hover {\n  box-shadow: var(--shadow-1);\n}\n.skc-card.skc-card--shadow:active {\n  box-shadow: none;\n}\n.skc-card.skc-card--shadow.skc-card--elevated.skc-card--shadow:hover {\n  box-shadow: var(--shadow-3);\n}\n.skc-card.skc-card--shadow.skc-card--elevated.skc-card--shadow:active {\n  box-shadow: var(--shadow-2);\n}\n');

// src/components/Card/index.tsx
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Card({
  children,
  style,
  appearance,
  direction,
  stateLayerEffect,
  shadowEffect,
  layoutID,
  onClick,
  href,
  element: Element,
  className
}) {
  const cardRef = React4.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(cardRef);
  const props = __spreadValues({
    ref: cardRef,
    style,
    className: cn([
      "skc-card",
      appearance === "outlined" ? "skc-card--outlined" : appearance === "elevated" ? "skc-card--elevated" : appearance === "filled" ? "skc-card--filled" : void 0,
      direction === "row" ? "skc-card--row" : "skc-card--column",
      stateLayerEffect && "skc-card--state-layer",
      shadowEffect && "skc-card--shadow",
      className
    ])
  }, rippleListeners);
  const content = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    children,
    stateLayerEffect && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_framer_motion4.motion.span,
      {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-card__ripple",
        style: rippleStyle
      }
    )
  ] });
  return (
    // Render with `element` if defined
    href && Element ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Element, __spreadProps(__spreadValues({}, props), { href, children: content })) : (
      // Render an `<a>` if link passed in
      href ? layoutID ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_framer_motion4.motion.a, __spreadProps(__spreadValues({}, props), { layoutId: layoutID, children: content })) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", __spreadProps(__spreadValues({}, props), { href, children: content })) : (
        // Render a `<button>` if `onClick` passed in
        onClick ? layoutID ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_framer_motion4.motion.button,
          __spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, props), { onClick })), {
            layoutId: layoutID,
            type: "button",
            children: content
          })
        ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", __spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, props), { onClick })), { type: "button", children: content })) : (
          // Otherwise, render a `<div>`
          layoutID ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_framer_motion4.motion.div, __spreadProps(__spreadValues({}, props), { layoutId: layoutID, children: content })) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", __spreadProps(__spreadValues({}, props), { children: content }))
        )
      )
    )
  );
}
Card.displayName = "Card";

// src/components/CardHeader/index.tsx
var React5 = __toESM(require("react"));

// ../skcom-css/dist/css/components/card-header.css
styleInject(":root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-card-header {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 1rem;\n  padding: .75rem .25rem .75rem 1rem;\n}\n.skc-card-header__content {\n  flex-grow: 1;\n}\n.skc-card-header__icon .skc-icon {\n  color: var(--on-surface-variant);\n}\n.skc-card-header__title {\n  font-family: var(--font-display);\n  font-size: var(--text-lg);\n  font-weight: var(--font-medium);\n  line-height: 1.5rem;\n  letter-spacing: .1px;\n}\n.skc-card-header__subtitle {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n  font-family: var(--font-display);\n}\n.skc-card-header__overflow {\n  padding: .25rem;\n}\n.skc-card-header__overflow .skc-button {\n  color: var(--outline);\n}\n.skc-card-header__overflow .skc-button::before,\n.skc-card-header__overflow .skc-button .skc-button__ripple {\n  background-color: var(--on-surface-variant);\n}\n");

// src/components/CardHeader/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function CardHeader({
  avatar,
  icon,
  title,
  subtitle,
  overflow,
  style,
  className
}) {
  const [showOverflow, setShowOverflow] = React5.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style, className: cn(["skc-card-header", className]), children: [
    avatar && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "skc-card-header__avatar", children: avatar }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "skc-card-header__icon", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "skc-card-header__content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "skc-card-header__title", children: title }),
      subtitle && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "skc-card-header__subtitle", children: subtitle })
    ] }),
    overflow && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "skc-card-header__overflow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Button,
        {
          appearance: "text",
          icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MaterialIcon, { icon: "more_vert" }),
          onClick: () => setShowOverflow(!showOverflow)
        }
      ),
      overflow
    ] })
  ] });
}
CardHeader.displayName = "CardHeader";

// ../skcom-css/dist/css/components/card-content.css
styleInject(".skc-card-content {\n  display: flex;\n  flex-direction: column;\n  gap: .75rem;\n  padding: 1rem;\n}\n.skc-card-content > .skc-actions {\n  margin-top: 1.25rem;\n}\n");

// src/components/CardContent/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function CardContent({ children, style, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style, className: cn(["skc-card-content", className]), children });
}
CardContent.displayName = "CardContent";

// ../skcom-css/dist/css/components/columns.css
styleInject(".skc-columns {\n  display: grid;\n  gap: .5rem 1.5rem;\n}\n.skc-columns--2 {\n  grid-template-columns: repeat(1, 1fr);\n}\n@media only screen and (min-width: 600px) {\n  .skc-columns--2 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (min-width: 905px) {\n  .skc-columns--2 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .skc-columns--2 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.skc-columns--3 {\n  grid-template-columns: repeat(1, 1fr);\n}\n@media only screen and (min-width: 600px) {\n  .skc-columns--3 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (min-width: 905px) {\n  .skc-columns--3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .skc-columns--3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.skc-columns--4 {\n  grid-template-columns: repeat(1, 1fr);\n}\n@media only screen and (min-width: 600px) {\n  .skc-columns--4 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (min-width: 905px) {\n  .skc-columns--4 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .skc-columns--4 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.skc-columns--6 {\n  grid-template-columns: repeat(2, 1fr);\n}\n@media only screen and (min-width: 600px) {\n  .skc-columns--6 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media only screen and (min-width: 905px) {\n  .skc-columns--6 {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .skc-columns--6 {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n.skc-columns--12 {\n  grid-template-columns: repeat(4, 1fr);\n}\n@media only screen and (min-width: 600px) {\n  .skc-columns--12 {\n    grid-template-columns: repeat(8, 1fr);\n  }\n}\n@media only screen and (min-width: 905px) {\n  .skc-columns--12 {\n    grid-template-columns: repeat(12, 1fr);\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .skc-columns--12 {\n    grid-template-columns: repeat(12, 1fr);\n  }\n}\n");

// src/components/Columns/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Columns({ children, columns, style, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      style,
      className: cn([
        "skc-columns",
        columns === 2 ? "skc-columns--2" : columns === 3 ? "skc-columns--3" : columns === 4 ? "skc-columns--4" : columns === 6 ? "skc-columns--6" : columns === 12 ? "skc-columns--12" : void 0,
        className
      ]),
      children
    }
  );
}
Columns.displayName = "Columns";

// src/components/AssistChip/index.tsx
var import_framer_motion5 = require("framer-motion");
var React6 = __toESM(require("react"));

// ../skcom-css/dist/css/components/chip.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n._skc-chip,\n.skc-assist-chip {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .5rem;\n  padding: .375rem 1rem;\n  color: var(--on-surface);\n  border: 1px solid var(--outline);\n  border-radius: .5rem;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n._skc-chip::before,\n.skc-assist-chip::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  background-color: var(--on-surface-variant);\n}\n._skc-chip:hover::before,\n.skc-assist-chip:hover::before {\n  opacity: .08;\n}\n._skc-chip:focus::before,\n.skc-assist-chip:focus::before,\n._skc-chip:active::before,\n.skc-assist-chip:active::before {\n  opacity: .12;\n}\n._skc-chip:has(._skc-chip__icon:first-child, .skc-assist-chip__icon:first-child),\n.skc-assist-chip:has(._skc-chip__icon:first-child, .skc-assist-chip__icon:first-child) {\n  padding-left: .5rem;\n}\n._skc-chip:has(._skc-chip__icon:last-child, .skc-assist-chip__icon:last-child),\n.skc-assist-chip:has(._skc-chip__icon:last-child, .skc-assist-chip__icon:last-child) {\n  padding-right: .5rem;\n}\n._skc-chip[aria-disabled=true],\n[aria-disabled=true].skc-assist-chip {\n  cursor: default;\n  opacity: .38;\n  color: var(--on-surface);\n  border-color: rgba(0, 0, 0, 0);\n}\n._skc-chip[aria-disabled=true]::before,\n[aria-disabled=true].skc-assist-chip::before {\n  opacity: .3157894737;\n  border: 1px solid var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n}\n._skc-chip[aria-disabled=true] ._skc-chip__ripple,\n._skc-chip[aria-disabled=true] .skc-assist-chip__ripple,\n[aria-disabled=true].skc-assist-chip ._skc-chip__ripple,\n[aria-disabled=true].skc-assist-chip .skc-assist-chip__ripple {\n  background-color: rgba(0, 0, 0, 0);\n}\n._skc-chip[aria-disabled=true] ._skc-chip__icon .skc-icon,\n._skc-chip[aria-disabled=true] .skc-assist-chip__icon .skc-icon,\n[aria-disabled=true].skc-assist-chip ._skc-chip__icon .skc-icon,\n[aria-disabled=true].skc-assist-chip .skc-assist-chip__icon .skc-icon {\n  color: var(--on-surface);\n}\n._skc-chip--elevated,\n.skc-assist-chip.skc-assist-chip--elevated {\n  border: none;\n  background-color: var(--surface-1);\n  box-shadow: var(--shadow-1);\n}\n._skc-chip--elevated[aria-disabled=true],\n[aria-disabled=true].skc-assist-chip.skc-assist-chip--elevated {\n  color: var(--on-surface);\n  background-color: rgba(0, 0, 0, 0);\n  box-shadow: none;\n}\n._skc-chip--elevated[aria-disabled=true]::before,\n[aria-disabled=true].skc-assist-chip.skc-assist-chip--elevated::before {\n  border: none;\n  background-color: var(--on-surface);\n}\n._skc-chip--dangerous ._skc-chip__icon .skc-icon,\n._skc-chip--dangerous .skc-assist-chip__icon .skc-icon,\n.skc-assist-chip:not([aria-disabled=true]).skc-assist-chip--dangerous ._skc-chip__icon .skc-icon,\n.skc-assist-chip:not([aria-disabled=true]).skc-assist-chip--dangerous .skc-assist-chip__icon .skc-icon {\n  color: var(--error);\n}\n._skc-chip__label,\n.skc-assist-chip__label {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n  font-family: var(--font-display);\n}\n._skc-chip__icon,\n.skc-assist-chip__icon {\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--primary);\n}\n._skc-chip__icon .skc-icon,\n.skc-assist-chip__icon .skc-icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 20;\n  font-size: 1.125rem;\n}\n._skc-chip__ripple,\n.skc-assist-chip__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n  background-color: var(--on-surface-variant);\n}\n.skc-assist-chip:has(.skc-assist-chip__icon:first-child) {\n  padding-left: .5rem;\n}\n');

// src/components/AssistChip/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  element: Element,
  style,
  className
}) {
  const buttonRef = React6.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(buttonRef);
  const props = __spreadValues({
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
    ])
  }, rippleListeners);
  const content = /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "skc-assist-chip__icon", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "skc-assist-chip__label", children }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_framer_motion5.motion.span,
      {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-assist-chip__ripple",
        style: rippleStyle
      }
    )
  ] });
  return (
    // Render with `element` if defined
    href && Element ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Element, __spreadProps(__spreadValues({}, props), { href, children: content })) : (
      // Render an `<a>` if link passed in
      href ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", __spreadProps(__spreadValues({}, props), { href, children: content })) : (
        // Otherwise, render a `<button>`
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", __spreadProps(__spreadValues({}, props), { type: "button", children: content }))
      )
    )
  );
}
AssistChip.displayName = "AssistChip";

// src/components/Dialog/index.tsx
var import_framer_motion6 = require("framer-motion");
var React7 = __toESM(require("react"));

// ../skcom-css/dist/css/components/dialog.css
styleInject(".skc-dialog {\n  position: fixed;\n  z-index: 90;\n  inset: 50% auto auto 50%;\n  width: 22.5rem;\n  max-width: calc(100vw - 3rem);\n  margin: 0 !important;\n  transform: translate(-50%, -50%);\n  border-radius: var(--rounded-2xl);\n  background-color: var(--surface-3);\n}\n.skc-dialog > .skc-actions {\n  padding: 1.5rem 1.5rem 1.5rem 1rem;\n}\n.skc-dialog ~ .skc-scrim {\n  margin: 0 !important;\n}\n");

// src/utils/format.ts
function kebabify(string) {
  return string.toLowerCase().split(" ").join("-");
}

// src/components/Dialog/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Dialog({
  children,
  open,
  width,
  onClose,
  style,
  className
}) {
  const { duration, easing } = useAnimationConfig();
  React7.useEffect(() => {
    if (open) {
      const actions = document.querySelector(
        ".skc-dialog .skc-actions"
      );
      const buttons = actions == null ? void 0 : actions.querySelectorAll(".skc-button");
      if (buttons == null ? void 0 : buttons.length)
        buttons[buttons.length - 1].focus();
    }
  }, [open]);
  React7.useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Escape")
        onClose();
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  let dialogID;
  React7.Children.forEach(children, (child) => {
    if (child.type.displayName === "DialogHeader") {
      const { title, desc, alt } = child.props;
      dialogID = `dialog-${kebabify(
        // Use `title` if defined
        title ? (
          // Use `title` if is not JSX Element
          typeof title === "string" ? title : (
            // Otherwise, use `alt`
            alt
          )
        ) : (
          // If `title` is not defined, use `desc`
          typeof desc === "string" ? desc : (
            // Otherwise, use `alt`
            alt
          )
        )
      )}`;
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_framer_motion6.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_framer_motion6.motion.div,
      {
        role: "alertdialog",
        "aria-modal": "true",
        "aria-labelledby": `${dialogID}-title`,
        "aria-describedby": `${dialogID}-desc`,
        initial: { opacity: 0, scaleY: 0, x: "-50%", y: "-150%" },
        animate: { opacity: 1, scaleY: 1, y: "-50%" },
        exit: {
          opacity: 0,
          scaleY: 0.5,
          y: "-90%",
          transition: transition(
            duration.short2,
            easing.standardAccelerate
          )
        },
        transition: transition(duration.medium2, easing.standardDecelerate),
        style: __spreadProps(__spreadValues({}, style), { width }),
        className: cn(["skc-dialog", className]),
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_framer_motion6.motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 0.5 },
        exit: {
          opacity: 0,
          transition: transition(duration.short4, easing.standard)
        },
        transition: transition(duration.medium4, easing.standard),
        className: "skc-scrim",
        onClick: onClose
      }
    )
  ] }) });
}
Dialog.displayName = "Dialog";

// ../skcom-css/dist/css/components/dialog-header.css
styleInject(":root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-dialog-header {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.5rem 1.5rem 0;\n}\n.skc-dialog-header h2 {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-regular);\n  line-height: 2rem;\n  letter-spacing: 0px;\n  color: var(--on-surface);\n}\n.skc-dialog-header p {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n  color: var(--on-surface-variant);\n}\n");

// src/components/DialogHeader/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function DialogHeader({
  icon,
  title,
  desc,
  alt,
  style,
  className
}) {
  const dialogID = `dialog-${kebabify(
    // Use `title` if defined
    title ? (
      // Use `title` if is not JSX Element
      typeof title === "string" ? title : (
        // Otherwise, use `alt`
        alt
      )
    ) : (
      // If `title` is not defined, use `desc`
      typeof desc === "string" ? desc : (
        // Otherwise, use `alt`
        alt
      )
    )
  )}`;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style, className: cn(["skc-dialog-header", className]), children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "skc-dialog-header__icon", children: icon }),
    title && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { "aria-label": alt, id: `${dialogID}-title`, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "p",
      {
        "aria-label": !title ? alt : void 0,
        id: `${dialogID}-desc`,
        children: desc
      }
    )
  ] });
}
DialogHeader.displayName = "DialogHeader";

// ../skcom-css/dist/css/components/dialog-content.css
styleInject(".skc-dialog-content > .skc-list > .skc-list-item {\n  padding-inline: 1.5rem 2rem;\n}\n.skc-dialog-content ~ .skc-dialog-header {\n  padding-bottom: 1.5rem;\n}\n.skc-dialog-header:has(~.skc-dialog-content) {\n  padding-bottom: 1.5rem;\n}\n.skc-dialog-content.skc-dialog-content--scrollable {\n  overflow-y: auto;\n  border-top: 1px solid var(--outline);\n  border-bottom: 1px solid var(--outline);\n}\n");

// src/components/DialogContent/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function DialogContent({
  children,
  height,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      style: __spreadProps(__spreadValues({}, style), { height }),
      className: cn([
        "skc-dialog-content",
        height !== void 0 && "skc-dialog-content--scrollable",
        className
      ]),
      children
    }
  );
}
DialogContent.displayName = "DialogContent";

// src/components/FullscreenDialog/index.tsx
var import_framer_motion7 = require("framer-motion");

// ../skcom-css/dist/css/components/fullscreen-dialog.css
styleInject(".skc-fullscreen-dialog {\n  position: fixed;\n  z-index: 90;\n  inset: 0;\n  margin: 0 !important;\n  background-color: var(--surface);\n}\n");

// src/components/FullscreenDialog/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function FullscreenDialog({
  children,
  open,
  title,
  action,
  width,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_framer_motion7.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      role: "alertdialog",
      "aria-modal": "true",
      style: __spreadProps(__spreadValues({}, style), { width }),
      className: cn(["skc-fullscreen-dialog", className]),
      children
    }
  ) });
}
FullscreenDialog.displayName = "FullscreenDialog";

// ../skcom-css/dist/css/components/divider.css
styleInject(".skc-divider {\n  border: none;\n  border-top: 1px solid var(--outline-variant);\n}\n");

// src/components/Divider/index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function Divider({ style, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("hr", { style, className: cn(["skc-divider", className]) });
}
Divider.displayName = "Divider";

// ../skcom-css/dist/css/components/header.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-header {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: .75rem;\n}\nh2.skc-header,\nh2.skc-header__text {\n  font-family: var(--font-display);\n  font-size: var(--text-6xl);\n  font-weight: var(--font-regular);\n  line-height: 2.75rem;\n  letter-spacing: 0px;\n}\nh2 .skc-header__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.5rem;\n}\nh3.skc-header,\nh3.skc-header__text {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-regular);\n  line-height: 2.5rem;\n  letter-spacing: 0px;\n}\nh3 .skc-header__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.375rem;\n}\nh4.skc-header,\nh4.skc-header__text {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-regular);\n  line-height: 2.25rem;\n  letter-spacing: 0px;\n}\nh4 .skc-header__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.25rem;\n}\nh5.skc-header,\nh5.skc-header__text {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-regular);\n  line-height: 2rem;\n  letter-spacing: 0px;\n}\nh5 .skc-header__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2rem;\n}\nh6.skc-header,\nh6.skc-header__text {\n  font-family: var(--font-display);\n  font-size: var(--text-2xl);\n  font-weight: var(--font-regular);\n  line-height: 1.75rem;\n  letter-spacing: 0px;\n}\nh6 .skc-header__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 1.75rem;\n}\n.skc-header__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  color: var(--on-surface-variant);\n}\n');

// src/components/Header/index.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Header({
  children,
  level,
  icon,
  hAttr,
  style,
  className
}) {
  const props = __spreadValues({
    style,
    className: cn(["skc-header", className])
  }, hAttr);
  const content = /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "skc-header__icon", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "skc-header__text", children })
  ] });
  return level === 6 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h6", __spreadProps(__spreadValues({}, props), { children: content })) : level === 5 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h5", __spreadProps(__spreadValues({}, props), { children: content })) : level === 4 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h4", __spreadProps(__spreadValues({}, props), { children: content })) : level === 3 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", __spreadProps(__spreadValues({}, props), { children: content })) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", __spreadProps(__spreadValues({}, props), { children: content }));
}
Header.displayName = "Header";

// ../skcom-css/dist/css/components/list.css
styleInject(".skc-list {\n  display: flex;\n  flex-direction: column;\n}\n.skc-list--divided > :not(:last-child) {\n  border-bottom: 1px solid var(--outline-variant);\n}\n.skc-section:has(.skc-list) {\n  margin-inline: 0;\n}\n.skc-section:has(.skc-list) > *:not(.skc-list) {\n  margin-inline: 1rem;\n}\n@media only screen and (min-width: 600px) {\n  .skc-section > * {\n    margin-inline: 0 !important;\n  }\n}\n");

// src/components/List/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function List({
  children,
  columns,
  divided,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "ul",
    {
      style,
      className: cn(["skc-list", divided && "skc-list--divided", className]),
      children: columns ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Columns, { columns, children }) : children
    }
  );
}
List.displayName = "List";

// src/components/ListItem/index.tsx
var import_framer_motion8 = require("framer-motion");
var React8 = __toESM(require("react"));

// ../skcom-css/dist/css/components/list-item.css
styleInject('.skc-list-item {\n  display: flex;\n  overflow: hidden;\n  flex-direction: row;\n  gap: 1rem;\n  width: 100%;\n  padding: .5rem 2rem .5rem 1rem;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-list-item.skc-list-item--top {\n  align-items: flex-start;\n}\n.skc-list-item.skc-list-item--center {\n  align-items: center;\n}\n.skc-list-item.skc-list-item--bottom {\n  align-items: flex-end;\n}\n.skc-list-item.skc-list-item--3-lines {\n  padding-block: .75rem;\n}\n.skc-list-item.skc-list-item--state-layer {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.skc-list-item.skc-list-item--state-layer::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  background-color: var(--primary);\n}\n.skc-list-item.skc-list-item--state-layer:hover::before {\n  opacity: .08;\n}\n.skc-list-item.skc-list-item--state-layer:focus::before,\n.skc-list-item.skc-list-item--state-layer:active::before {\n  opacity: .12;\n}\n.skc-list-item__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n  background-color: var(--primary);\n}\n.skc-list-item > img {\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: var(--surface-variant);\n}\n@media only screen and (min-width: 600px) {\n  .skc-columns .skc-list-item.skc-list-item--state-layer {\n    border-radius: var(--rounded-lg);\n  }\n}\n');

// src/components/ListItem/index.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function ListItem({
  children,
  align,
  lines,
  stateLayerEffect,
  onClick,
  href,
  element: Element,
  style,
  className
}) {
  const itemRef = React8.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(itemRef);
  let itemID;
  React8.Children.forEach(children, (child) => {
    if (child.type.displayName === "ListItemContent") {
      const { title, alt } = child.props;
      itemID = `list-item-${kebabify(
        typeof title === "string" ? title : alt
      )}`;
    }
  });
  const props = __spreadValues({
    ref: itemRef,
    "aria-labelledby": itemID,
    style,
    className: cn([
      "skc-list-item",
      align === "top" ? "skc-list-item--top" : align === "center" ? "skc-list-item--center" : align === "bottom" ? "skc-list-item--bottom" : void 0,
      lines === 1 ? "skc-list-item--1-line" : lines === 2 ? "skc-list-item--2-lines" : lines === 3 ? "skc-list-item--3-lines" : void 0,
      stateLayerEffect && "skc-list-item--state-layer",
      className
    ])
  }, rippleListeners);
  const content = /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    children,
    stateLayerEffect && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_framer_motion8.motion.span,
      {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-list-item__ripple",
        style: rippleStyle
      }
    )
  ] });
  return (
    // Render with `element`, `<a>`, or `<button>` if functionality passed in
    href || onClick || stateLayerEffect ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", {
      "aria-labelledby": itemID,
      // Render with `element` if defined
      children: href && Element ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Element, __spreadProps(__spreadValues({}, props), { href, children: content })) : (
        // Render an `<a>` if link passed in
        href ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", __spreadProps(__spreadValues({}, props), { href, children: content })) : (
          // Otherwise, render a `<button>`
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", __spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, props), { onClick })), { type: "button", children: content }))
        )
      )
    }) : (
      // If this Item has no functionality, just render a `<li>`
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", __spreadProps(__spreadValues({}, props), { children: content }))
    )
  );
}
ListItem.displayName = "ListItem";

// ../skcom-css/dist/css/components/list-item-content.css
styleInject(":root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-list-item-content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  text-align: left;\n}\n.skc-list-item-content__overline {\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n  font-family: var(--font-display);\n  color: var(--on-surface-variant);\n}\n.skc-list-item-content__title {\n  font-family: var(--font-body);\n  font-size: var(--text-lg);\n  font-weight: var(--font-regular);\n  line-height: 1.5rem;\n  letter-spacing: .5px;\n  color: var(--on-surface);\n}\n.skc-list-item-content__desc {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n  color: var(--on-surface-variant);\n}\n");

// src/components/ListItemContent/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function ListItemContent({
  overline,
  title,
  desc,
  alt,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { style, className: cn(["skc-list-item-content", className]), children: [
    overline && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "skc-list-item-content__overline", children: overline }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "span",
      {
        id: `list-item-${kebabify(typeof title === "string" ? title : alt)}`,
        "aria-label": alt,
        className: "skc-list-item-content__title",
        children: title
      }
    ),
    desc && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "skc-list-item-content__desc", children: desc })
  ] });
}
ListItemContent.displayName = "ListItemContent";

// ../skcom-css/dist/css/components/nav-bar.css
styleInject('.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-nav-bar {\n  overflow-x: auto;\n  width: 100vw;\n  background-color: var(--surface-2);\n}\n.skc-nav-bar__toggle-and-fab {\n  height: 0;\n}\n.skc-nav-bar__toggle-and-fab .skc-button,\n.skc-nav-bar__brand,\n.skc-nav-bar__end {\n  display: none;\n}\n.skc-nav-bar__destinations {\n  display: flex;\n  flex-direction: row;\n  gap: .5rem;\n  width: 100%;\n  max-width: 32rem;\n  margin: 0 auto;\n  padding: 0 .5rem;\n}\n.skc-nav-bar__destinations .skc-nav-bar-item {\n  width: 100%;\n}\n@media only screen and (min-width: 600px) {\n  .skc-nav-bar {\n    display: flex;\n    overflow: hidden auto;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 2.5rem;\n    width: 5rem;\n    height: 100vh;\n    padding: 2.75rem 0 3.5rem;\n    background-color: var(--surface);\n  }\n  @supports (height: 100dvh) {\n    .skc-nav-bar {\n      height: 100dvh;\n    }\n  }\n  .skc-nav-bar__main {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 2.5rem;\n  }\n  .skc-nav-bar__toggle-and-fab {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: .25rem;\n    height: fit-content;\n  }\n  .skc-nav-bar__toggle-and-fab .skc-button {\n    display: flex;\n    color: var(--on-surface);\n  }\n  .skc-nav-bar__toggle-and-fab .skc-button::before,\n  .skc-nav-bar__toggle-and-fab .skc-button .skc-button__ripple {\n    background-color: var(--on-surface);\n  }\n  .skc-nav-bar__toggle-and-fab .skc-nav-bar__brand {\n    display: block;\n  }\n  .skc-nav-bar__toggle-and-fab .skc-nav-bar__brand:not(:last-child) {\n    margin-bottom: .75rem;\n  }\n  .skc-nav-bar__toggle-and-fab .skc-fab {\n    box-shadow: none;\n  }\n  .skc-nav-bar__toggle-and-fab .skc-fab.skc-fab--small,\n  .skc-nav-bar__toggle-and-fab .skc-fab.skc-fab--large {\n    padding: 1rem;\n    border-radius: var(--rounded-xl);\n  }\n  .skc-nav-bar__toggle-and-fab .skc-fab__wrapper .skc-fab__icon .skc-icon,\n  .skc-nav-bar__toggle-and-fab .skc-fab.skc-fab--large .skc-fab__icon .skc-icon {\n    transition: font-size var(--motion-short-4) var(--easing-standard), font-variation-settings var(--motion-short-4) var(--easing-standard);\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" 0,\n      "opsz" 24;\n  }\n  .skc-nav-bar__destinations,\n  .skc-nav-bar__end {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: .25rem;\n    margin: 0;\n    padding: .3125rem;\n  }\n}\n');

// src/components/NavBar/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function NavBar({
  children,
  brand,
  fab,
  end,
  onNavToggle,
  locale,
  style,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("nav", { style, className: cn(["skc-nav-bar", className]), children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "skc-nav-bar__main", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { className: "skc-nav-bar__toggle-and-fab", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          Button,
          {
            appearance: "text",
            icon: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MaterialIcon, { icon: "menu" }),
            alt: locale === "th" ? "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39" : "Toggle Navigation Drawer",
            onClick: onNavToggle
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "skc-nav-bar__brand", children: brand }),
        fab
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("section", { className: "skc-nav-bar__destinations", children })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("section", { className: "skc-nav-bar__end", children: end })
  ] });
}
NavBar.displayName = "NavBar";

// src/components/NavBarItem/index.tsx
var import_framer_motion9 = require("framer-motion");
var React9 = __toESM(require("react"));

// ../skcom-css/dist/css/components/nav-bar-item.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-nav-bar-item {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: .25rem;\n  padding: .75rem 0 1rem;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-nav-bar-item.skc-nav-bar-item--selected .skc-nav-bar-item__icon {\n  color: var(--on-primary-container);\n  background-color: var(--primary-container);\n}\n.skc-nav-bar-item.skc-nav-bar-item--selected::before,\n.skc-nav-bar-item.skc-nav-bar-item--selected .skc-nav-bar-item__ripple {\n  background-color: var(--on-primary-container);\n}\n.skc-nav-bar-item.skc-nav-bar-item--rail-only {\n  display: none;\n}\n.skc-nav-bar-item__icon {\n  transition: background-color var(--motion-short-4) var(--easing-standard);\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  padding: .25rem 1.25rem;\n  border-radius: var(--rounded-full);\n}\n.skc-nav-bar-item__icon::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  background-color: var(--on-surface);\n}\n.skc-nav-bar-item:hover .skc-nav-bar-item__icon::before {\n  opacity: .08;\n}\n.skc-nav-bar-item:focus .skc-nav-bar-item__icon::before,\n.skc-nav-bar-item:active .skc-nav-bar-item__icon::before {\n  opacity: .12;\n}\n.skc-nav-bar-item__icon .skc-icon {\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-bar-item:hover .skc-nav-bar-item__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-bar-item:active .skc-nav-bar-item__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-bar-item.skc-nav-bar-item--selected .skc-nav-bar-item__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-bar-item.skc-nav-bar-item--selected:hover .skc-nav-bar-item__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-bar-item.skc-nav-bar-item--selected:active .skc-nav-bar-item__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-bar-item__label {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n  transition: font-weight var(--motion-short-4) var(--easing-standard), letter-spacing var(--motion-short-4) var(--easing-standard);\n  font-family: var(--font-display);\n  text-align: center;\n}\n.skc-nav-bar-item:hover .skc-nav-bar-item__label {\n  font-weight: var(--font-bold);\n  letter-spacing: .75px;\n}\n.skc-nav-bar-item:active .skc-nav-bar-item__label {\n  font-weight: var(--font-regular);\n  letter-spacing: .375px;\n}\n.skc-nav-bar-item.skc-nav-bar-item--selected .skc-nav-bar-item__label {\n  font-weight: var(--font-bold);\n  color: var(--on-primary-container);\n}\n.skc-nav-bar-item__badge {\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n  position: absolute;\n  top: .125rem;\n  right: 1rem;\n  min-width: 1rem;\n  min-height: 1rem;\n  padding: 0 .25rem;\n  color: var(--on-error);\n  border-radius: var(--rounded-full);\n  background-color: var(--error);\n}\n.skc-nav-bar-item__badge:empty {\n  top: .375rem;\n  right: 1.25rem;\n  width: .375rem;\n  min-width: initial;\n  height: .375rem;\n  min-height: initial;\n}\n.skc-nav-bar-item__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n  background-color: var(--on-surface);\n}\n@media only screen and (min-width: 600px) {\n  .skc-nav-bar-item {\n    padding: 0 0 .25rem;\n  }\n  .skc-nav-bar-item.skc-nav-bar-item--rail-only {\n    display: flex;\n  }\n  .skc-nav-bar-item__icon {\n    padding: .25rem 1rem;\n  }\n  .skc-nav-bar-item__badge {\n    right: .75rem;\n  }\n  .skc-nav-bar-item__badge:empty {\n    right: 1rem;\n  }\n  .skc-nav-bar-item:hover .skc-nav-bar-item__label,\n  .skc-nav-bar-item:active .skc-nav-bar-item__label {\n    font-weight: var(--font-medium);\n    letter-spacing: .5px;\n  }\n}\n');

// src/components/NavBarItem/index.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function NavBarItem({
  icon,
  label,
  alt,
  tooltip,
  badge,
  selected,
  railOnly,
  href,
  element: Element,
  style,
  className
}) {
  const { duration, easing } = useAnimationConfig();
  const iconRef = React9.useRef(null);
  const [clientHeight, setClientHeight] = React9.useState(1080);
  React9.useEffect(() => {
    if (window.innerWidth <= 600)
      setClientHeight(window.innerHeight);
    else
      setClientHeight(80);
  }, []);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(iconRef, {
    useClientPos: true,
    posCorrection: { x: 0, y: 80 - clientHeight }
  });
  const navID = `nav-section-${kebabify(
    typeof label === "string" ? label : alt
  )}`;
  const props = __spreadValues({
    "aria-current": selected,
    "aria-labelledby": label ? navID : void 0,
    href,
    title: tooltip,
    style,
    className: cn([
      "skc-nav-bar-item",
      selected && "skc-nav-bar-item--selected",
      railOnly && "skc-nav-bar-item--rail-only",
      className
    ])
  }, rippleListeners);
  const content = /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { ref: iconRef, className: "skc-nav-bar-item__icon", children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_framer_motion9.LayoutGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_framer_motion9.AnimatePresence, { children: badge !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_framer_motion9.motion.div,
        {
          initial: { scale: 0 },
          animate: { scale: 1 },
          exit: { scale: 0 },
          layoutId: [navID, "badge"].join("-"),
          transition: transition(duration.short4, easing.standard),
          className: "skc-nav-bar-item__badge",
          children: badge !== null ? badge > 99 ? "99+" : badge : null
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_framer_motion9.motion.span,
        {
          initial: { scale: 0, opacity: 0.36 },
          animate: rippleControls,
          className: "skc-nav-bar-item__ripple",
          style: rippleStyle
        }
      )
    ] }),
    label && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { id: navID, className: "skc-nav-bar-item__label", children: label })
  ] });
  return (
    // Render with `element` if defined
    Element ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Element, __spreadProps(__spreadValues({}, props), { children: content })) : (
      // Otherwise, render an `<a>`
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", __spreadProps(__spreadValues({}, props), { children: content }))
    )
  );
}
NavBarItem.displayName = "NavBarItem";

// src/components/NavDrawer/index.tsx
var import_framer_motion10 = require("framer-motion");
var React10 = __toESM(require("react"));

// ../skcom-css/dist/css/components/nav-drawer.css
styleInject('.skc-nav-drawer {\n  display: flex;\n  overflow-y: auto;\n  flex-direction: column;\n  width: calc(100% - 4rem);\n  max-width: 22.5rem;\n  height: 100vh;\n  padding: .75rem;\n  border-radius: 0 var(--rounded-xl) var(--rounded-xl) 0;\n  background-color: var(--surface-1);\n}\n.skc-nav-drawer .skc-nav-drawer-section:not(:last-child)::after {\n  width: calc(100% - 2rem);\n  height: 1px;\n  margin-left: 1rem;\n  content: "";\n  background-color: var(--outline-variant);\n}\n@supports (height: 100dvh) {\n  .skc-nav-drawer {\n    height: 100dvh;\n  }\n}\n');

// src/components/NavDrawer/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function NavDrawer({
  children,
  open,
  onClose,
  style,
  className
}) {
  const { duration, easing } = useAnimationConfig();
  React10.useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Escape")
        onClose();
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  React10.useEffect(() => {
    if (open) {
      const navDrawerItem = document.querySelector(
        ".skc-nav-drawer-item"
      );
      navDrawerItem == null ? void 0 : navDrawerItem.focus();
    }
  }, [open]);
  const injectedChildren = (
    // For each Navigation Drawer Section
    React10.Children.map(
      children,
      (section) => React10.cloneElement(section, {
        children: (
          // For each Navigation Drawer Item
          React10.Children.map(
            section.props.children,
            // Inject `onClick`, where the Navigation Drawer will close when a
            // Navigation Drawer Item is clicked
            (item) => React10.cloneElement(item, { onClick: onClose })
          )
        )
      })
    )
  );
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_framer_motion10.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      import_framer_motion10.motion.aside,
      {
        initial: { scaleX: 0.2, x: "-100%" },
        animate: { scaleX: 1, x: "0%" },
        exit: {
          scaleX: 0.2,
          x: "-100%",
          transition: transition(
            duration.short4,
            easing.standardAccelerate
          )
        },
        transition: transition(duration.medium4, easing.standardDecelerate),
        "aria-modal": true,
        style,
        className: cn(["skc-nav-drawer", className]),
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("nav", { children: injectedChildren })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      import_framer_motion10.motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 0.5 },
        exit: {
          opacity: 0,
          transition: transition(duration.short4, easing.standard)
        },
        transition: transition(duration.medium4, easing.standard),
        onClick: onClose,
        className: "skc-scrim"
      }
    )
  ] }) });
}
NavDrawer.displayName = "NavDrawer";

// ../skcom-css/dist/css/components/nav-drawer-section.css
styleInject(":root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-nav-drawer-section {\n  display: flex;\n  flex-direction: column;\n}\n.skc-nav-drawer-section__header {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n  padding: 1.125rem 1rem;\n}\n");

// src/components/NavDrawerSection/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function NavDrawerSection({
  children,
  header,
  alt,
  style,
  className
}) {
  const sectionID = `nav-section-${kebabify(
    typeof header === "string" ? header : alt
  )}`;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "section",
    {
      "aria-labelledby": sectionID,
      style,
      className: cn(["skc-nav-drawer-section", className]),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "h2",
          {
            id: sectionID,
            "aria-label": alt,
            className: "skc-nav-drawer-section__header",
            children: header
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("ul", { children })
      ]
    }
  );
}
NavDrawerSection.displayName = "NavDrawerSection";

// src/components/NavDrawerItem/index.tsx
var React11 = __toESM(require("react"));

// ../skcom-css/dist/css/components/nav-drawer-item.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-nav-drawer-item {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  gap: .75rem;\n  padding: 1rem 1.5rem 1rem 1rem;\n  border-radius: var(--rounded-full);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-nav-drawer-item::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n  background-color: var(--on-surface);\n}\n.skc-nav-drawer-item:hover::before {\n  opacity: .08;\n}\n.skc-nav-drawer-item:focus-visible::before,\n.skc-nav-drawer-item:active::before {\n  opacity: .12;\n}\n.skc-nav-drawer-item.skc-nav-drawer-item--selected {\n  color: var(--on-primary-container);\n  background-color: var(--primary-container);\n}\n.skc-nav-drawer-item.skc-nav-drawer-item--selected::before,\n.skc-nav-drawer-item.skc-nav-drawer-item--selected .skc-nav-drawer-item__ripple {\n  background-color: var(--on-primary-container);\n}\n.skc-nav-drawer-item.skc-nav-drawer-item--selected .skc-nav-drawer-item__label {\n  font-weight: var(--font-bold);\n}\n.skc-nav-drawer-item__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-drawer-item.skc-nav-drawer-item--selected .skc-nav-drawer-item__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-nav-drawer-item__label {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n  flex-grow: 1;\n}\n.skc-nav-drawer-item__metadata {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.skc-nav-drawer-item__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n  background-color: var(--on-surface);\n}\n');

// src/components/NavDrawerItem/index.tsx
var import_framer_motion11 = require("framer-motion");
var import_jsx_runtime24 = require("react/jsx-runtime");
function NavDrawerItem({
  icon,
  label,
  metadata,
  tooltip,
  selected,
  onClick,
  href,
  element: Element,
  style,
  className
}) {
  const linkRef = React11.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(linkRef);
  const props = __spreadValues({
    ref: linkRef,
    "aria-current": selected,
    title: tooltip,
    style,
    className: cn([
      "skc-nav-drawer-item",
      selected && "skc-nav-drawer-item--selected",
      className
    ]),
    href,
    onClick
  }, rippleListeners);
  const content = /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "skc-nav-drawer-item__icon", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "skc-nav-drawer-item__label", children: label }),
    metadata && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "skc-nav-drawer-item__metadata", children: metadata }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_framer_motion11.motion.span,
      {
        initial: { scale: 0, opacity: 0.36 },
        animate: rippleControls,
        className: "skc-nav-drawer-item__ripple",
        style: rippleStyle
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: Element ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Element, __spreadProps(__spreadValues({}, props), { children: content })) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("a", __spreadProps(__spreadValues({}, props), { children: content })) });
}
NavDrawerItem.displayName = "NavDrawerItem";

// src/components/FAB/index.tsx
var import_framer_motion12 = require("framer-motion");
var React13 = __toESM(require("react"));

// ../skcom-css/dist/css/components/fab.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-fab {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  gap: .75rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: var(--shadow-3);\n}\n.skc-fab::before {\n  transition: opacity var(--motion-short-4) var(--easing-standard);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  pointer-events: none;\n  opacity: 0;\n  border-radius: inherit;\n}\n.skc-fab:has(.skc-fab__label) {\n  padding: 1rem 1.5rem;\n}\n.skc-fab:has(.skc-fab__label):has(.skc-fab__icon:first-child) {\n  padding-left: 1rem;\n}\n.skc-fab__wrapper:hover .skc-fab::before,\n.skc-fab:hover::before {\n  opacity: .08;\n}\n.skc-fab__wrapper:focus .skc-fab::before,\n.skc-fab__wrapper:active .skc-fab::before,\n.skc-fab:focus::before,\n.skc-fab:active::before {\n  opacity: .12;\n}\n.skc-fab__wrapper {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.skc-fab__ripple {\n  position: absolute;\n  content: "";\n  transform: scale(0);\n  filter: blur(16px);\n  pointer-events: none;\n  opacity: .36;\n  border-radius: 50%;\n}\n.skc-fab__icon .skc-icon {\n  transition: font-variation-settings var(--motion-short-4) var(--easing-standard);\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-fab__wrapper:hover .skc-fab__icon .skc-icon,\n.skc-fab:hover .skc-fab__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-fab__wrapper:active .skc-fab__icon .skc-icon,\n.skc-fab:active .skc-fab__icon .skc-icon {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-fab__label {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n  font-family: var(--font-display);\n}\n.skc-fab.skc-fab--small {\n  padding: .5rem;\n  border-radius: var(--rounded-lg);\n}\n.skc-fab.skc-fab--standard {\n  padding: 1rem;\n  border-radius: var(--rounded-xl);\n}\n.skc-fab.skc-fab--large {\n  padding: 1.875rem;\n  border-radius: var(--rounded-2xl);\n}\n.skc-fab.skc-fab--large .skc-fab__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.25rem;\n}\n.skc-fab__wrapper:hover .skc-fab.skc-fab--large .skc-fab__icon .skc-icon,\n.skc-fab:hover .skc-fab.skc-fab--large .skc-fab__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 600,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.25rem;\n}\n.skc-fab__wrapper:active .skc-fab.skc-fab--large .skc-fab__icon .skc-icon,\n.skc-fab:active .skc-fab.skc-fab--large .skc-fab__icon .skc-icon {\n  font-size: 40px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 40;\n  font-size: 2.25rem;\n}\n.skc-fab.skc-fab--surface {\n  color: var(--primary);\n  background-color: var(--surface-3);\n}\n.skc-fab.skc-fab--surface::before,\n.skc-fab.skc-fab--surface .skc-fab__ripple {\n  background-color: var(--primary);\n}\n.skc-fab.skc-fab--primary {\n  color: var(--on-primary-container);\n  background-color: var(--primary-container);\n}\n.skc-fab.skc-fab--primary::before,\n.skc-fab.skc-fab--primary .skc-fab__ripple {\n  background-color: var(--on-primary-container);\n}\n.skc-fab.skc-fab--secondary {\n  color: var(--on-secondary-container);\n  background-color: var(--secondary-container);\n}\n.skc-fab.skc-fab--secondary::before,\n.skc-fab.skc-fab--secondary .skc-fab__ripple {\n  background-color: var(--on-secondary-container);\n}\n.skc-fab.skc-fab--tertiary {\n  color: var(--on-tertiary-container);\n  background-color: var(--tertiary-container);\n}\n.skc-fab.skc-fab--tertiary::before,\n.skc-fab.skc-fab--tertiary .skc-fab__ripple {\n  background-color: var(--on-tertiary-container);\n}\n');

// src/utils/window.ts
var import_react2 = __toESM(require("react"));
function useScrollDirection() {
  const [direction, setDirection] = import_react2.default.useState("up");
  import_react2.default.useEffect(() => {
    let prevScrollY = 0;
    const handleScroll = () => {
      const { scrollY } = window;
      const direction2 = prevScrollY < scrollY ? "down" : "up";
      prevScrollY = scrollY;
      setDirection(direction2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return { scrollDir: direction };
}

// src/components/FAB/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
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
  element: Element,
  style,
  className
}) {
  const { duration, easing } = useAnimationConfig();
  const fabRef = React13.useRef(null);
  const { rippleListeners, rippleControls, rippleStyle } = useRipple(fabRef);
  const { scrollDir } = useScrollDirection();
  const [canHide, setCanHide] = React13.useState(false);
  React13.useEffect(() => {
    if (stateOnScroll) {
      if (/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        setCanHide(false);
        return;
      }
      const { innerWidth } = window;
      setCanHide(innerWidth <= 600);
      const handleResize = () => {
        const { innerWidth: innerWidth2 } = window;
        setCanHide(innerWidth2 <= 600);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const props = __spreadValues({
    "aria-label": alt,
    title: tooltip,
    className: "skc-fab__wrapper"
  }, rippleListeners);
  const content = /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_framer_motion12.AnimatePresence, {
    initial: false,
    // Hide the FAB on scroll if `stateOnScroll` set to `disappear`
    children: !(stateOnScroll === "disappear" && canHide && scrollDir === "down") && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      import_framer_motion12.motion.div,
      {
        ref: fabRef,
        initial: { scale: 0.4, x: 20, y: 20, opacity: 0 },
        animate: { scale: 1, x: 0, y: 0, opacity: 1 },
        exit: {
          scale: 0.4,
          x: 20,
          y: 20,
          opacity: 0,
          transition: transition(
            duration.short2,
            easing.standardAccelerate
          )
        },
        transition: transition(duration.medium1, easing.standardDecelerate),
        style,
        className: cn([
          "skc-fab",
          color === "surface" ? "skc-fab--surface" : color === "primary" ? "skc-fab--primary" : color === "secondary" ? "skc-fab--secondary" : color === "tertiary" ? "skc-fab--tertiary" : void 0,
          size === "small" ? "skc-fab--small" : size === "large" ? "skc-fab--large" : "skc-fab--standard",
          className
        ]),
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "skc-fab__icon", children: icon }),
          // Hide the label on scroll if `stateOnScroll` set to `minimize`
          !(stateOnScroll === "minimize" && !(scrollDir === "up")) && children && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "skc-fab__label", children }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_framer_motion12.motion.span,
            {
              initial: { scale: 0, opacity: 0.36 },
              animate: rippleControls,
              className: "skc-fab__ripple",
              style: rippleStyle
            }
          )
        ]
      }
    )
  });
  return (
    // Render with `element` if defined
    href && Element ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Element, __spreadProps(__spreadValues({}, props), { href, children: content })) : (
      // Render an `<a>` if link passed in
      href ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("a", __spreadProps(__spreadValues({ href }, props), { children: content })) : (
        // Otherwise, render a `<button>`
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("button", __spreadProps(__spreadValues({ type: "button", onClick }, props), { children: content }))
      )
    )
  );
}
FAB.displayName = "FAB";

// src/components/ContentLayout/index.tsx
var import_framer_motion13 = require("framer-motion");

// ../skcom-css/dist/css/components/content-layout.css
styleInject(":root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-content-layout {\n  padding: 2rem 0 1rem;\n}\n.skc-content-layout p {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n}\n.skc-content-layout__content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 70.5rem;\n  margin: 0 auto;\n}\n.skc-content-layout__content > * {\n  margin-inline: 1rem;\n}\n@media only screen and (min-width: 600px) {\n  .skc-content-layout {\n    padding: 2rem;\n  }\n  .skc-content-layout__content {\n    width: calc(100% - 10rem);\n  }\n  .skc-content-layout__content > * {\n    margin-inline: 0;\n  }\n}\n");

// src/components/ContentLayout/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function ContentLayout({
  children,
  style,
  className
}) {
  const { duration, easing } = useAnimationConfig();
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    import_framer_motion13.motion.main,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: transition(duration.short4, easing.standard),
      style,
      className: cn(["skc-content-layout", className]),
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "skc-content-layout__content", children })
    }
  );
}
ContentLayout.displayName = "ContentLayout";

// src/components/RootLayout/index.tsx
var import_framer_motion14 = require("framer-motion");
var React14 = __toESM(require("react"));

// ../skcom-css/dist/css/components/root-layout.css
styleInject(".skc-root-layout {\n  font-size: var(--text-base);\n  overflow-x: hidden;\n  padding-bottom: 5rem;\n}\n.skc-root-layout > .skc-nav-bar {\n  position: fixed;\n  z-index: 70;\n  bottom: 0;\n  left: 0;\n}\n.skc-root-layout > .skc-nav-bar .skc-fab {\n  position: fixed;\n  right: 1rem;\n  bottom: 6rem;\n}\n.skc-root-layout > .skc-nav-drawer {\n  position: fixed;\n  z-index: 85;\n  top: 0;\n  left: 0;\n}\n.skc-scrim {\n  position: fixed;\n  z-index: 80;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: .5;\n  background-color: var(--black);\n}\n@media only screen and (min-width: 600px) {\n  .skc-root-layout {\n    padding-bottom: 0;\n  }\n  .skc-root-layout > .skc-nav-bar {\n    top: 0;\n    bottom: initial;\n  }\n  .skc-root-layout > .skc-nav-bar .skc-fab {\n    position: relative;\n    right: 0;\n    bottom: 0;\n  }\n}\n");

// src/components/RootLayout/index.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function RootLayout({ children, className, style }) {
  let content;
  const persistentComponents = React14.Children.map(children, (child) => {
    if (child == null ? void 0 : child.type.displayName)
      return child;
    else
      content = child;
  });
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style, className: cn(["skc-root-layout", className]), children: [
    persistentComponents,
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      import_framer_motion14.AnimatePresence,
      {
        mode: "wait",
        initial: false,
        onExitComplete: () => window.scrollTo(0, 0),
        children: content
      }
    )
  ] });
}
RootLayout.displayName = "RootLayout";

// src/components/PageHeader/index.tsx
var import_framer_motion15 = require("framer-motion");
var React15 = __toESM(require("react"));

// ../skcom-css/dist/css/components/page-header.css
styleInject(':root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n.skc-icon {\n  font-family: "Material Symbols Outlined";\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  width: 1em;\n  min-width: 1em;\n  user-select: none;\n  direction: ltr;\n  white-space: nowrap;\n  letter-spacing: normal;\n  text-transform: none;\n  word-wrap: normal;\n}\n.skc-icon--outlined {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.skc-icon--filled {\n  font-size: 24px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n@media (prefers-color-scheme: dark) {\n  .skc-icon {\n    font-size: 24px;\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" -25,\n      "opsz" 24;\n  }\n}\n.skc-page-header {\n  position: relative;\n  z-index: 65;\n  overflow: hidden;\n  padding: 1rem 0 1.75rem;\n  background-color: var(--surface-5);\n}\n.skc-page-header.skc-page-header--minimized {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  padding: .75rem .5rem;\n}\n.skc-page-header.skc-page-header--minimized .skc-page-header__actions {\n  gap: .5rem;\n  width: calc(100% - 1rem);\n  margin: 0;\n}\n.skc-page-header.skc-page-header--minimized .skc-page-header__actions .skc-button {\n  left: 0;\n}\n.skc-page-header.skc-page-header--minimized .skc-page-header__icon,\n.skc-page-header.skc-page-header--minimized .skc-page-header__related {\n  display: none;\n}\n.skc-page-header__content {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: .75rem;\n  max-width: 70.5rem;\n  margin: 0 auto;\n}\n.skc-page-header__content > * {\n  margin-inline: 1rem;\n}\n.skc-page-header__content > h1 {\n  font-family: var(--font-display);\n  font-size: var(--text-7xl);\n  font-weight: var(--font-regular);\n  line-height: 3.25rem;\n  letter-spacing: 0px;\n  width: calc(100% - 2rem);\n}\n.skc-page-header__content > h1:not(:last-child) {\n  margin-bottom: .75rem;\n}\n.skc-page-header__content:has(.skc-page-header__related) {\n  position: static;\n}\n.skc-page-header__actions {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  width: calc(100% - 2rem);\n}\n.skc-page-header__actions > .skc-button {\n  position: relative;\n  left: -0.5rem;\n}\n.skc-page-header__actions > h1 {\n  font-family: var(--font-display);\n  font-size: var(--text-2xl);\n  font-weight: var(--font-regular);\n  line-height: 1.75rem;\n  letter-spacing: 0px;\n  flex-grow: 1;\n  width: fit-content;\n}\n.skc-page-header__trailing {\n  display: flex;\n  flex-direction: row;\n  gap: .5rem;\n}\n.skc-page-header__actions .skc-button,\n.skc-page-header__trailing .skc-button {\n  color: var(--on-surface);\n}\n.skc-page-header__actions .skc-button::before,\n.skc-page-header__actions .skc-button .skc-button__ripple,\n.skc-page-header__trailing .skc-button::before,\n.skc-page-header__trailing .skc-button .skc-button__ripple {\n  background-color: var(--on-surface);\n}\n.skc-page-header__related {\n  display: contents;\n}\n.skc-page-header__icon {\n  position: absolute;\n  top: 50%;\n  right: -1.375rem;\n  transform: translateY(-50%);\n  pointer-events: none;\n  opacity: .12;\n  color: var(--primary);\n}\n.skc-page-header__icon .skc-icon {\n  font-size: 48px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 48;\n  font-size: 14.375rem;\n}\n.skc-page-header__replacement-color {\n  position: absolute;\n  z-index: 60;\n  inset: 0 0 auto;\n  height: 9.25rem;\n  background-color: var(--surface-5);\n}\n@media only screen and (min-width: 600px) {\n  .skc-page-header {\n    padding: 2.75rem 1.5rem 2rem;\n  }\n  .skc-page-header__content {\n    width: calc(100% - 11rem);\n  }\n  .skc-page-header__content > * {\n    margin-inline: 0;\n  }\n  .skc-page-header__content > h1 {\n    font-family: var(--font-display);\n    font-size: var(--text-8xl);\n    line-height: 4rem;\n    letter-spacing: -0.25px;\n    width: fit-content;\n  }\n  .skc-page-header__actions {\n    justify-content: flex-start;\n  }\n  .skc-page-header__actions > h1 {\n    flex-grow: 0;\n  }\n  .skc-page-header__trailing {\n    display: none;\n  }\n  .skc-page-header__icon {\n    right: 0rem;\n  }\n  .skc-page-header__icon .skc-icon {\n    font-size: 21rem;\n  }\n  .skc-page-header__replacement-color {\n    height: 9.5rem;\n  }\n}\n');

// src/components/PageHeader/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function PageHeader({
  children,
  title,
  icon,
  brand,
  parentURL,
  homeURL,
  element,
  onBack,
  onNavToggle,
  backAttr,
  style,
  className
}) {
  var _a;
  const headerRef = React15.useRef(null);
  const [minimized, setMinimized] = React15.useState(false);
  React15.useEffect(() => {
    const header = headerRef.current;
    if (!header)
      return;
    const scrollMargin = header.clientHeight - 64;
    setMinimized(window.scrollY > scrollMargin);
    const handleScroll = () => setMinimized(window.scrollY > scrollMargin);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { duration, easing } = useAnimationConfig();
  const minimizeTransition = transition(duration.short4, easing.standard);
  const headerTextControls = (0, import_framer_motion15.useAnimationControls)();
  React15.useEffect(() => {
    headerTextControls.set({ opacity: 0, scale: 0.8, y: 10 });
    headerTextControls.start({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: transition(duration.medium2, easing.standard)
    });
  }, [title]);
  const headerTextProps = {
    layoutId: "page-header-text",
    animate: headerTextControls,
    transition: minimizeTransition
  };
  const iconControls = (0, import_framer_motion15.useAnimationControls)();
  React15.useEffect(() => {
    if (icon || !minimized) {
      iconControls.set({ opacity: 0, scale: 1.2, translateY: "-50%" });
      iconControls.start({
        opacity: 0.08,
        scale: 1,
        transition: transition(duration.long4, easing.standard)
      });
    }
  }, [icon, minimized]);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "skc-page-header__replacement-color" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        style: { height: minimized ? (_a = headerRef.current) == null ? void 0 : _a.clientHeight : 0 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_framer_motion15.LayoutGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      import_framer_motion15.motion.header,
      {
        ref: headerRef,
        layoutId: "page-header",
        transition: minimizeTransition,
        style,
        className: cn([
          "skc-page-header",
          minimized && "skc-page-header--minimized",
          className
        ]),
        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "skc-page-header__content", children: [
          icon && !children && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            import_framer_motion15.motion.div,
            {
              animate: iconControls,
              className: "skc-page-header__icon",
              children: icon
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
            import_framer_motion15.motion.div,
            {
              layoutId: "page-header-actions",
              transition: minimizeTransition,
              className: "skc-page-header__actions",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                  Button,
                  {
                    appearance: "text",
                    icon: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(MaterialIcon, { icon: "arrow_backward" }),
                    onClick: onBack,
                    href: parentURL,
                    element,
                    disabled: !(onBack || parentURL)
                  }
                ),
                minimized && // Header (when minimized)
                /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_framer_motion15.motion.h1, __spreadProps(__spreadValues({}, headerTextProps), { children: title })),
                /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "skc-page-header__trailing", children: [
                  homeURL && // Home Button
                  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                    Button,
                    __spreadValues({
                      appearance: "text",
                      icon: brand || /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(MaterialIcon, { icon: "home" }),
                      href: homeURL,
                      element
                    }, backAttr)
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                    Button,
                    {
                      appearance: "text",
                      icon: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(MaterialIcon, { icon: "menu" }),
                      onClick: onNavToggle
                    }
                  )
                ] })
              ]
            }
          ),
          !minimized && // Header (initial)
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_framer_motion15.motion.h1, __spreadProps(__spreadValues({}, headerTextProps), { children: title })),
          children && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            import_framer_motion15.motion.div,
            {
              animate: headerTextControls,
              className: "skc-page-header__related",
              children
            }
          )
        ] })
      }
    ) })
  ] });
}
PageHeader.displayName = "PageHeader";

// src/components/Section/index.tsx
var React16 = __toESM(require("react"));

// ../skcom-css/dist/css/components/section.css
styleInject(".skc-section {\n  display: flex;\n  flex-direction: column;\n  gap: .75rem;\n}\n.skc-section:has(.skc-section) {\n  gap: 1.25rem;\n}\n");

// src/components/Section/index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function Section({
  children,
  sectionAttr,
  style,
  className
}) {
  let headerID;
  const modifiedChildren = (
    // For each child in `children`
    React16.Children.map(children, (child) => {
      if (child.type.displayName === "Header") {
        headerID = `header-${kebabify(child.props.children)}`;
        return React16.cloneElement(child, {
          hAttr: { id: headerID }
        });
      } else
        return child;
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "section",
    __spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, sectionAttr), { style })), {
      "aria-labelledby": headerID,
      className: cn(["skc-section", className]),
      children: modifiedChildren
    })
  );
}
Section.displayName = "Section";

// ../skcom-css/dist/css/abstracts/abstracts.css
styleInject(":root {\n  --motion-short-1: 50ms;\n  --motion-short-2: 100ms;\n  --motion-short-3: 150ms;\n  --motion-short-4: 200ms;\n  --motion-medium-1: 250ms;\n  --motion-medium-2: 300ms;\n  --motion-medium-3: 350ms;\n  --motion-medium-4: 400ms;\n  --motion-long-1: 450ms;\n  --motion-long-2: 500ms;\n  --motion-long-3: 550ms;\n  --motion-long-4: 600ms;\n  --motion-extra-long-1: 700ms;\n  --motion-extra-long-2: 800ms;\n  --motion-extra-long-3: 900ms;\n  --motion-extra-long-4: 1000ms;\n  --easing-standard: cubic-bezier(0.2, 0, 0, 1);\n  --easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);\n  --easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);\n  --easing-emphasized: var(--easing-standard);\n  --easing-emphasized-accelerate: cubic-bezier(0.05, 0.7, 0.1, 1);\n  --easing-emphasized-decelerate: cubic-bezier(0.3, 0, 0.8, 0.15);\n}\n:root {\n  font-size: 16px;\n  --text-xs: 0.6875rem;\n  --text-sm: 0.75rem;\n  --text-base: 0.875rem;\n  --text-lg: 1rem;\n  --text-xl: 1.125rem;\n  --text-2xl: 1.375rem;\n  --text-3xl: 1.5rem;\n  --text-4xl: 1.75rem;\n  --text-5xl: 2rem;\n  --text-6xl: 2.25rem;\n  --text-7xl: 2.8125rem;\n  --text-8xl: 3.5625rem;\n  --text-9xl: 4rem;\n  --font-thin: 100;\n  --font-light: 300;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-bold: 700;\n}\n:root {\n  --white: #ffffff;\n  --black: #000000;\n  --primary-100: #ffffff;\n  --primary-99: #fafcff;\n  --primary-95: #e4f3ff;\n  --primary-90: #c5e7ff;\n  --primary-80: #80cfff;\n  --primary-70: #20b6f9;\n  --primary-60: #009ad8;\n  --primary-50: #007fb3;\n  --primary-40: #00658f;\n  --primary-30: #004c6d;\n  --primary-20: #00344c;\n  --primary-10: #001e2e;\n  --primary-0: #000000;\n  --secondary-100: #ffffff;\n  --secondary-99: #fcfcfc;\n  --secondary-95: #ffecf3;\n  --secondary-90: #ffd8e8;\n  --secondary-80: #ffafd5;\n  --secondary-70: #ff80c3;\n  --secondary-60: #ff3fb4;\n  --secondary-50: #e20098;\n  --secondary-40: #b50077;\n  --secondary-30: #8b005a;\n  --secondary-20: #62003e;\n  --secondary-10: #3d0025;\n  --secondary-0: #000000;\n  --tertiary-100: #ffffff;\n  --tertiary-99: #fffbf7;\n  --tertiary-95: #fff1b4;\n  --tertiary-90: #ffe24c;\n  --tertiary-80: #e4c521;\n  --tertiary-70: #c7aa00;\n  --tertiary-60: #a98f00;\n  --tertiary-50: #8c7600;\n  --tertiary-40: #6f5d00;\n  --tertiary-30: #544600;\n  --tertiary-20: #3a3000;\n  --tertiary-10: #221b00;\n  --tertiary-0: #000000;\n  --neutral-100: #ffffff;\n  --neutral-99: #fbfcff;\n  --neutral-95: #f0f1f4;\n  --neutral-90: #e1e2e5;\n  --neutral-80: #c5c6c9;\n  --neutral-70: #aaabad;\n  --neutral-60: #909194;\n  --neutral-50: #75777a;\n  --neutral-40: #5c5e61;\n  --neutral-30: #454749;\n  --neutral-20: #2e3133;\n  --neutral-10: #191c1e;\n  --neutral-0: #000000;\n  --neutral-variant-100: #ffffff;\n  --neutral-variant-99: #fafcff;\n  --neutral-variant-95: #ebf1f8;\n  --neutral-variant-90: #dde3ea;\n  --neutral-variant-80: #c1c7ce;\n  --neutral-variant-70: #a6acb2;\n  --neutral-variant-60: #8b9197;\n  --neutral-variant-50: #71787e;\n  --neutral-variant-40: #595f65;\n  --neutral-variant-30: #41484d;\n  --neutral-variant-20: #2b3136;\n  --neutral-variant-10: #161c21;\n  --neutral-variant-0: #000000;\n  --error-100: #ffffff;\n  --error-99: #fcfcfc;\n  --error-95: #ffede9;\n  --error-90: #ffdad4;\n  --error-80: #ffb4a9;\n  --error-70: #ff897a;\n  --error-60: #ff5449;\n  --error-50: #dd3730;\n  --error-40: #ba1b1b;\n  --error-30: #930006;\n  --error-20: #680003;\n  --error-10: #410001;\n  --error-0: #000000;\n  --shadow-text: 0 1px 2px #0000004d, 0 2px 6px #00000026;\n  --rounded-xs: 0.03125rem;\n  --rounded-sm: 0.25rem;\n  --rounded: 0.5rem;\n  --rounded-lg: 0.75rem;\n  --rounded-xl: 0.9375rem;\n  --rounded-2xl: 1.75rem;\n  --rounded-3xl: 2.90625rem;\n  --rounded-full: 100px;\n}\n@media (prefers-color-scheme: light) {\n  :root {\n    --primary: #00658f;\n    --on-primary: #ffffff;\n    --primary-container: #c5e7ff;\n    --on-primary-container: #001c38;\n    --inverse-primary: #80cfff;\n    --secondary: #b50077;\n    --on-secondary: #ffffff;\n    --secondary-container: #ffd8e8;\n    --on-secondary-container: #3d0025;\n    --tertiary: #6f5d00;\n    --on-tertiary: #ffffff;\n    --tertiary-container: #ffe24c;\n    --on-tertiary-container: #221b00;\n    --error: #ba1b1b;\n    --on-error: #ffffff;\n    --error-container: #ffdfd4;\n    --on-error-container: #410001;\n    --surface: #fbfcff;\n    --on-surface: #191c1e;\n    --surface-variant: #dde3ea;\n    --on-surface-variant: #41484d;\n    --inverse-on-surface: #f0f1f4;\n    --inverse-surface: #2e3133;\n    --surface-1: #eef4f9;\n    --surface-2: #e7f0f6;\n    --surface-3: #dfebf3;\n    --surface-4: #ddeaf2;\n    --surface-5: #d8e7ef;\n    --background: #fbfcff;\n    --on-background: #191c1e;\n    --outline: #73777f;\n    --outline-variant: #c1c7ce;\n    --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n    --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --primary: #80cfff;\n    --on-primary: #00344c;\n    --primary-container: #004c6d;\n    --on-primary-container: #c5e7ff;\n    --inverse-primary: #00658e;\n    --secondary: #ffafd5;\n    --on-secondary: #62003e;\n    --secondary-container: #8b005a;\n    --on-secondary-container: #ffd8e8;\n    --tertiary: #e4c521;\n    --on-tertiary: #3a3000;\n    --tertiary-container: #544600;\n    --on-tertiary-container: #ffe24c;\n    --error: #ffb4a9;\n    --on-error: #680003;\n    --error-container: #930006;\n    --on-error-container: #ffdad4;\n    --surface: #191c1e;\n    --on-surface: #e1e2e5;\n    --surface-variant: #41484d;\n    --on-surface-variant: #c1c7ce;\n    --inverse-on-surface: #191c1e;\n    --inverse-surface: #e1e2e5;\n    --surface-1: #1e2529;\n    --surface-2: #212a30;\n    --surface-3: #243037;\n    --surface-4: #253139;\n    --surface-5: #27353d;\n    --background: #191c1e;\n    --on-background: #e1e2e5;\n    --outline: #8b9197;\n    --outline-variant: #41484d;\n    --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n    --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n    --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n    --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n    --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n  }\n}\n.light {\n  --primary: #00658f;\n  --on-primary: #ffffff;\n  --primary-container: #c5e7ff;\n  --on-primary-container: #001c38;\n  --inverse-primary: #80cfff;\n  --secondary: #b50077;\n  --on-secondary: #ffffff;\n  --secondary-container: #ffd8e8;\n  --on-secondary-container: #3d0025;\n  --tertiary: #6f5d00;\n  --on-tertiary: #ffffff;\n  --tertiary-container: #ffe24c;\n  --on-tertiary-container: #221b00;\n  --error: #ba1b1b;\n  --on-error: #ffffff;\n  --error-container: #ffdfd4;\n  --on-error-container: #410001;\n  --surface: #fbfcff;\n  --on-surface: #191c1e;\n  --surface-variant: #dde3ea;\n  --on-surface-variant: #41484d;\n  --inverse-on-surface: #f0f1f4;\n  --inverse-surface: #2e3133;\n  --surface-1: #eef4f9;\n  --surface-2: #e7f0f6;\n  --surface-3: #dfebf3;\n  --surface-4: #ddeaf2;\n  --surface-5: #d8e7ef;\n  --background: #fbfcff;\n  --on-background: #191c1e;\n  --outline: #73777f;\n  --outline-variant: #c1c7ce;\n  --shadow-1: 0 1px 2px #0000004d, 0 1px 3px 1px #00000026;\n  --shadow-2: 0 1px 2px #0000004d, 0 2px 6px 2px #00000026;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.dark {\n  --primary: #80cfff;\n  --on-primary: #00344c;\n  --primary-container: #004c6d;\n  --on-primary-container: #c5e7ff;\n  --inverse-primary: #00658e;\n  --secondary: #ffafd5;\n  --on-secondary: #62003e;\n  --secondary-container: #8b005a;\n  --on-secondary-container: #ffd8e8;\n  --tertiary: #e4c521;\n  --on-tertiary: #3a3000;\n  --tertiary-container: #544600;\n  --on-tertiary-container: #ffe24c;\n  --error: #ffb4a9;\n  --on-error: #680003;\n  --error-container: #930006;\n  --on-error-container: #ffdad4;\n  --surface: #191c1e;\n  --on-surface: #e1e2e5;\n  --surface-variant: #41484d;\n  --on-surface-variant: #c1c7ce;\n  --inverse-on-surface: #191c1e;\n  --inverse-surface: #e1e2e5;\n  --surface-1: #1e2529;\n  --surface-2: #212a30;\n  --surface-3: #243037;\n  --surface-4: #253139;\n  --surface-5: #27353d;\n  --background: #191c1e;\n  --on-background: #e1e2e5;\n  --outline: #8b9197;\n  --outline-variant: #41484d;\n  --shadow-1: 0 1px 3px 1px #00000026, 0 1px 2px #0000004d;\n  --shadow-2: 0 2px 6px 2px #00000026, 0 1px 2px #0000004d;\n  --shadow-3: 0 4px 8px 3px #00000026, 0 1px 3px #0000004d;\n  --shadow-4: 0 6px 10px 4px #00000026, 0 2px 3px #0000004d;\n  --shadow-5: 0 8px 12px 6px #00000026, 0 4px 4px #0000004d;\n}\n.skc-display-large {\n  font-family: var(--font-display);\n  font-size: var(--text-8xl);\n  line-height: 4rem;\n  letter-spacing: -0.25px;\n}\n.skc-display-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-7xl);\n  font-weight: var(--font-regular);\n  line-height: 3.25rem;\n  letter-spacing: 0px;\n}\n.skc-display-small {\n  font-family: var(--font-display);\n  font-size: var(--text-6xl);\n  font-weight: var(--font-regular);\n  line-height: 2.75rem;\n  letter-spacing: 0px;\n}\n.skc-headline-large {\n  font-family: var(--font-display);\n  font-size: var(--text-5xl);\n  font-weight: var(--font-regular);\n  line-height: 2.5rem;\n  letter-spacing: 0px;\n}\n.skc-headline-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-4xl);\n  font-weight: var(--font-regular);\n  line-height: 2.25rem;\n  letter-spacing: 0px;\n}\n.skc-headline-small {\n  font-family: var(--font-display);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-regular);\n  line-height: 2rem;\n  letter-spacing: 0px;\n}\n.skc-title-large {\n  font-family: var(--font-display);\n  font-size: var(--text-2xl);\n  font-weight: var(--font-regular);\n  line-height: 1.75rem;\n  letter-spacing: 0px;\n}\n.skc-title-medium {\n  font-family: var(--font-display);\n  font-size: var(--text-lg);\n  font-weight: var(--font-medium);\n  line-height: 1.5rem;\n  letter-spacing: .1px;\n}\n.skc-title-small {\n  font-family: var(--font-display);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.skc-label-large {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-medium);\n  line-height: 1.25rem;\n  letter-spacing: .1px;\n}\n.skc-label-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.skc-label-small {\n  font-family: var(--font-body);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  line-height: 1rem;\n  letter-spacing: .5px;\n}\n.skc-body-large {\n  font-family: var(--font-body);\n  font-size: var(--text-lg);\n  font-weight: var(--font-regular);\n  line-height: 1.5rem;\n  letter-spacing: .5px;\n}\n.skc-body-medium {\n  font-family: var(--font-body);\n  font-size: var(--text-base);\n  font-weight: var(--font-regular);\n  line-height: 1.25rem;\n  letter-spacing: .25px;\n}\n.skc-body-small {\n  font-family: var(--font-body);\n  font-size: var(--text-sm);\n  font-weight: var(--font-regular);\n  line-height: 1rem;\n  letter-spacing: .4px;\n}\n");

// src/components/ThemeProvider/index.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
function ThemeProvider({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_jsx_runtime30.Fragment, { children });
}
ThemeProvider.displayName = "ThemeProvider";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Actions,
  AssistChip,
  Button,
  Card,
  CardContent,
  CardHeader,
  Columns,
  ContentLayout,
  Dialog,
  DialogContent,
  DialogHeader,
  Divider,
  FAB,
  FullscreenDialog,
  Header,
  List,
  ListItem,
  ListItemContent,
  MaterialIcon,
  NavBar,
  NavBarItem,
  NavDrawer,
  NavDrawerItem,
  NavDrawerSection,
  PageHeader,
  RootLayout,
  Section,
  SegmentedButton,
  ThemeProvider,
  ToggleButton,
  useAnimationConfig
});
