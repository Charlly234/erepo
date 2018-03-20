var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clusterSchema = new Schema({
  name: {type: String, required: true},
  description: String,
  members: {type: [Schema.Types.ObjectId], default: []}
});

clusterSchema.pre('save', (next) => {
  // set dates
  var currentDate = new Date();
  if (!this.createdAt) this.createdAt = currentDate;
  this.updatedAt = currentDate;

  next();
});

var Cluster = mongoose.model('Cluster', clusterSchema);
module.exports = Cluster;