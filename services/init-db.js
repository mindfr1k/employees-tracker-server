const { MongoClient } = require('mongodb')

module.exports = {
  async connectToDb(uri) {
    try {
      return await MongoClient.connect(uri, {
        useNewUrlParser: true
      })
    }
    catch (error) {
      console.error(error)
    }
  }
}