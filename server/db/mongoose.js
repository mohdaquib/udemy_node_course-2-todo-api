var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://aquib:Mayajaal23@ds121896.mlab.com:21896/todo_app');

module.exports = {mongoose};
