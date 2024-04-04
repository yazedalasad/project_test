const path = require('path');

module.exports = {
    entry: './book_manager.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};