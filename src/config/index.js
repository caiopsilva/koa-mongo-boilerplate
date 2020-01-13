const path = require('path')

const ROOT = path.resolve(__dirname, '../../')
const SRC_DIR = path.resolve(__dirname, '../')

const {
  NODE_ENV = 'development',
  PORT = 3000,
  MONGODB_URI = 'mongodb://127.0.0.1:27017/cart-abandonment',
} = process.env

module.exports = {
  ROOT,
  SRC_DIR,
  NODE_ENV,

  IS_PROD: NODE_ENV === 'production',
  IS_DEV: NODE_ENV === 'development',
  IS_TEST: NODE_ENV === 'test',

  PORT,

  DB: {
    uri: MONGODB_URI,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      reconnectTries: 30
    }
  },

  CORS: {
    origin: '*',
    exposeHeaders: ['Authorization'],
    credentials: true,
    allowHeaders: ['Authorization', 'Content-Type'],
    keepHeadersOnError: true
  },
}
