const SignOutRouter = require('../../../presentation/routers/user/sign-out-router')
const SignOutUseCase = require('../../../domain/usecases/user/sign-out-usecase')
const UpdateAccessTokenRepository = require('../../../infra/repositories/update-access-token-repository')
const env = require('../../config/env')

module.exports = class SignOutRouterComposer {
  static compose () {
    const updateAccessTokenRepository = new UpdateAccessTokenRepository()
    const signOutUseCase = new SignOutUseCase({
      updateAccessTokenRepository,
    })
    return new SignOutRouter({
      signOutUseCase    
    })
  }
}
