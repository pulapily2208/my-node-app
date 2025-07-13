const app = require("../apps/app");
const config = require("config");
const server = app.listen(port = config.get("serverPort"), () => {
  console.log(`Server is running on port ${port}`);
});