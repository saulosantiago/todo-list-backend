const SignUpRouter = require('../../presentation/routers/signup-router')
const SignUpUseCase = require('../../domain/usecases/signup-usecase')
const EmailValidator = require('../../utils/helpers/email-validator')
const CreateUserRepository = require('../../infra/repositories/create-user-repository')
const UpdateAccessTokenRepository = require('../../infra/repositories/update-access-token-repository')
const Encrypter = require('../../utils/helpers/encrypter')
const TokenGenerator = require('../../utils/helpers/token-generator')
const env = require('../config/env')

module.exports = class SignUpRouterComposer {
  static compose () {
    const tokenGenerator = new TokenGenerator(env.tokenSecret)
    const encrypter = new Encrypter(env.encryption_salt_rounds)
    const createUserRepository = new CreateUserRepository()
    const updateAccessTokenRepository = new UpdateAccessTokenRepository()
    const emailValidator = new EmailValidator()
    const signUpUseCase = new SignUpUseCase({
      createUserRepository,
      updateAccessTokenRepository,
      encrypter,
      tokenGenerator
    })
    return new SignUpRouter({
      signUpUseCase,
      emailValidator
    })
  }
}
