// src/components/button/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  const btnClicked = () => {
    console.log("btn clicked");
  };
  return /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx("button", { className: "button", onClick: btnClicked, children: "Click me" }) });
};
export {
  Button
};
//# sourceMappingURL=index.js.map
