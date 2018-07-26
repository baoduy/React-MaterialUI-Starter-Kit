if (process.env.NODE_ENV === "production") {
  module.exports = require("./prd");
} else {
  module.exports = require("./dev");
}
