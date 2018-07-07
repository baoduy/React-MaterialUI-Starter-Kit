/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

const express = require("express");
const app = express();
const portNumber = 3000;
const sourceDir = "dist";

app.get("/*", function (request, response, next) {
  if (/^(.+)$/.test(request.url) && !request.url.endsWith("js")) {
    request.url = "/index.html";
  }

  next();
});

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});