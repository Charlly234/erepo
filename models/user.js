var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date
});

userSchema.pre('save', async function(next) {
  var user = this;

  // set dates
  var currentDate = new Date();
  if (!this.createdAt) this.createdAt = currentDate;
  this.updatedAt = currentDate;

  // hash password
  if (user.isModified('password')) {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }

  next();
});

var User = mongoose.model('User', userSchema);
module.exports = User;