if (process.env.NODE_ENV === 'production') {
  module.exports = require('./large-number.min.js');
} else {
  module.exports = require('./large-number.js');
}
