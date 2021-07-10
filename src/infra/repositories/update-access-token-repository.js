const MongoHelper = require('../helpers/mongo-helper')

module.exports = class UpdateAccessTokenRepository {
  async update (userId, accessToken) {
    const userModel = await MongoHelper.getCollection('users')
    await userModel.updateOne({
      _id: userId
    }, {
      $set: {
        accessToken
      }
    })
  }
}
