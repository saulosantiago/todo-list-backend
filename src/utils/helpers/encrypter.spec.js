jest.mock('bcrypt', () => ({
  isValid: true,

  async hash (value, salt) {
    this.value = value
    this.salt = salt
    return this.hashedValue
  }
}))

const bcrypt = require('bcrypt')
const MissingParamError = require('../errors/missing-param-error')
const Encrypter = require('./encrypter')

const makeSut = () => {
  const salt = 'any_salt'
  const encrypter = new Encrypter(salt)
  bcrypt.hashedValue = 'hashed_value'
  return encrypter
}

describe('Encrypter', () => {
  test('Should return hash if bcrypt returns hash', async () => {
    const sut = makeSut()
    const hash = await sut.hash('any_value')
    expect(hash).toBe('hashed_value')
  })

  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut()
    await sut.hash('any_value')
    expect(bcrypt.value).toBe('any_value')
  })

  test('Should throw if no params are provided', async () => {
    const sut = makeSut()
    expect(sut.hash()).rejects.toThrow(new MissingParamError('value'))
  })
})
