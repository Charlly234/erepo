var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {type: String, required: true},
  displayImageUrl: String,
  content: {type: String, required: true},
  author: Schema.Types.ObjectId,
  createdAt: Date,
  updatedAt: Date
});

postSchema.pre('save', (next) => {
  // set dates
  var currentDate = new Date();
  if (!this.createdAt) this.createdAt = currentDate;
  this.updatedAt = currentDate;

  next();
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;