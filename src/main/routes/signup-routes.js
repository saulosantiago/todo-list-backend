const { adapt } = require('../adapters/express-router-adapter')
const SignUpRouterComposer = require('../composers/signup-router-composer')

module.exports = router => {
  router.post('/signup', adapt(SignUpRouterComposer.compose()))
}
