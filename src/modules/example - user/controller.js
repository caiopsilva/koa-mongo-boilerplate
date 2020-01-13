const User = require('./model')

module.exports = {
  async list(ctx) {
    const { skip, limit } = ctx.query
    const users = await User.list({ skip, limit })

    ctx.body = users
  },

  async register(ctx) {
    const { body } = ctx.request

    let user = await userSchema.validate(body, {
      abortEarly: false,
      context: { validatePassword: true }
    })

    user = await new User(user).save()

    ctx.status = 201
    ctx.set('Location', `${ctx.URL}/${user.id}`)

    ctx.body = { user }
  },
}
