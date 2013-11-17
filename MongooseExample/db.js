var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Comment = new Schema({
    username : String,
    content  : String,
    created  : Date
});
 
mongoose.model( 'Comment', Comment );
 
mongoose.connect( 'mongodb://localhost/express-comment' );