'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./telegram-login-button.cjs.production.js')
} else {
  module.exports = require('./telegram-login-button.cjs.development.js')
}
