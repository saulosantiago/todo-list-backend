const { adapt } = require('../adapters/express-router-adapter')
const SignInRouterComposer = require('../composers/signin-router-composer')

module.exports = router => {
  router.post('/signin', adapt(SignInRouterComposer.compose()))
}
