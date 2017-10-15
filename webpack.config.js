const path = require('path');

const APP   = path.join(__dirname, 'src');
const DIST  = path.join(__dirname, 'dist');

module.exports = {
  entry: APP,
  output: {
    path: DIST,
    filename: 'app.js'
  }
};
