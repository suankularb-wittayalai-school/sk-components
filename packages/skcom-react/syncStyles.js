const fs = require("fs");
let css = fs.readFileSync(
  "../skcom-css/dist/css/suankularb-components.min.css",
  "utf8"
);
fs.writeFileSync("./src/css/suankularb-components.min.css", css, "utf8");
