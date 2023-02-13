// src/Button/index.tsx
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx("button", {
    className: "button",
    children: props.children
  });
}
Button.displayName = "Button";

// src/Chip/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Chip(props) {
  return /* @__PURE__ */ jsx2("button", {
    children: props.children
  });
}
Chip.displayName = "Chip";
export {
  Button,
  Chip
};
