const PROXY_CONFIG = [
  {
    context : ['/api'],
    target: "http://127.0.0.1:5000/",
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: {
      '^/api': 'http://127.0.0.1:5000/api'
    }
  }
];

module.exports = PROXY_CONFIG
