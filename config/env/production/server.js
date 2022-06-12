// module.exports = ({ env }) => ({
//   proxy: true,
//   url: env('MY_HEROKU_URL'),
//   app: {
//     keys: env.array('APP_KEYS')
//   },
// })

module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
});
