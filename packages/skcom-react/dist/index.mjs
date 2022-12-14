// src/Button/index.tsx
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx("button", {
    children: props.children
  });
}
Button.displayName = "Button";
export {
  Button
};
