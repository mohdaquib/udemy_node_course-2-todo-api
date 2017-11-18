var {mongoose} = require('./db/mongoose')

// save new something
// create a Todo model
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// // create a new Todo model
// var newTodo = new Todo({
//   text: '   Edit this video   '
// });

// create model for a user
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'mohd.aquib09@gmail.com'
});


// save a new user record in database
newUser.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log("Unable to save todo", e);
})
