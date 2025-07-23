module.exports = {
  serverPort: 8080,
  router: `${__dirname}/../src/routers/web.js`, //yêu cầu đường dẫn tuyệt đối
  viewsFolder: `${__dirname}/../src/apps/views/`,
  viewEngine: "ejs",
  staticFolder: `${__dirname}/../src/public`,
  pagination: {
    limit: 10,
    delta: 2
  },
  session: {
    secret: 'vietpro_key', // đặt tên tuỳ ý cho key
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  },
  trustProxy: 1
};

