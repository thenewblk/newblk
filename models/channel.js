var mongoose = require( 'mongoose' );

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

var channelSchema = mongoose.Schema({
		name    				: String,
		slug    				: String,
    description    	: String,
});

channelSchema.pre('save', function (next) {
  this.slug = slugify(this.name);
  next();
});
 
module.exports = mongoose.model('Channel', channelSchema);