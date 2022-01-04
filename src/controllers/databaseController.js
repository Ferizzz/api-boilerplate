const mongoose = require('mongoose')
const database = mongoose.connection

const connectServer = (mongoURL) => {
   mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
}

// logs
database.once('open', () => {
   global.logger.successLog('Database connected successfully')
})
database.on('error', (error) => {
   global.logger.errorLog('Database connection error: ' + error)
})
module.exports = {
   connectServer,
}
