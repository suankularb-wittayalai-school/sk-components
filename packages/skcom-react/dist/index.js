"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Chip: () => Chip
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

// ../skcom-css/dist/css/components/button.css
styleInject(".button {\n  all: unset;\n  font-family: var(--font-display);\n  background-color: #00658f;\n  color: #ffffff;\n}\n");

// src/Button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    className: "button",
    children: props.children
  });
}
Button.displayName = "Button";

// src/Chip/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Chip(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    children: props.children
  });
}
Chip.displayName = "Chip";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Chip
});
