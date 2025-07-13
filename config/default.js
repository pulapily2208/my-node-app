module.exports = {
  serverPort: 8080,
  router: `${__dirname}/../src/routers/web.js`, //yêu cầu đường dẫn tuyệt đối
  viewsFolder: `${__dirname}/../src/apps/views/`,
  viewEngine: "ejs",
  staticFolder: `${__dirname}/../src/public`,
};