// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware("/api/v1", {
//       // target: "http://115.85.181.9",
//       target: "http://127.0.0.1:8000",
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/sms/v2/services", {
//       target: "https://sens.apigw.ntruss.com",

//       changeOrigin: true,
//     })
//   );
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: "https://backend.curb.site",
      // target: "https://127.0.0.1:8000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/sms/v2/services", {
      target: "https://sens.apigw.ntruss.com/",

      changeOrigin: true,
    })
  );
};
