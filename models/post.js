var mongoose = require( 'mongoose' );
var moment = require('moment');

var postSchema = mongoose.Schema({
    content    : String,
    updated_date : String,
    updated_at : String,
    approved	 : Boolean,
    tags: [{ type: String, ref: 'Tag' }] ,
    channels: [{ type: String, ref: 'Channel' }] ,
    client: { type: String, ref: 'Client' } ,
    project: { type: String, ref: 'Project' } ,
});

postSchema.pre('save', function (next) {
  this.updated_at = moment().format("M.D.YYYY");
  this.updated_date = moment().format();
  next();
});

module.exports = mongoose.model('Post', postSchema);
