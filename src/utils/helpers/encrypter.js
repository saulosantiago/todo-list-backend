const bcrypt = require('bcrypt')
const MissingParamError = require('../errors/missing-param-error')

module.exports = class Encrypter {
  constructor (salt) {
    this.salt = salt
  }

  async hash (value) {
    if (!value) {
      throw new MissingParamError('value')
    }
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
