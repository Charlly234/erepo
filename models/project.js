var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: {type: String, required: true},
  keywords: { type: [String], default: []},
  displayImageUrl: String,
  type: String,
  abstract: String,
  content: {type: String, required: true},
  createdAt: Date,
  updatedAt: Date
});

projectSchema.pre('save', (next) => {
  // set dates
  var currentDate = new Date();
  if (!this.createdAt) this.createdAt = currentDate;
  this.updatedAt = currentDate;

  next();
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;