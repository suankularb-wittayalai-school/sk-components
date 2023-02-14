"use strict";Object.defineProperty(exports, "__esModule", {value: true});// #style-inject:#style-inject
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
styleInject(".button {\n  all: unset;\n  font-family: var(--font-display);\n  background-color: #00658f;\n  color: #fff;\n}\n");

// src/Button/index.tsx
var _jsxruntime = require('react/jsx-runtime');
function Button(props) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", {
    className: "button",
    children: props.children
  });
}
Button.displayName = "Button";

// src/Chip/index.tsx

function Chip(props) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", {
    children: props.children
  });
}
Chip.displayName = "Chip";



exports.Button = Button; exports.Chip = Chip;
