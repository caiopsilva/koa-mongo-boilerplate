process.env.NODE_ENV = process.env.NODE_ENV || 'development'

require('dotenv-flow').config({ path: '.env' })

const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const config = require('./config')
const errors = require('./middleware/errors')
const db = require('./middleware/database')

const routes = require('./routes')

app.use(errors.errorHandler)
app.use(db(app))
app.use(cors(config.CORS))
app.use(bodyParser())
app.use(routes.routes())
app.use(routes.allowedMethods())

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} in ${config.NODE_ENV} mode`)
})

module.exports = app
