
/*
 * GET home page.
 */
 
var mongoose = require( 'mongoose' );
var Comment = mongoose.model( 'Comment' );

exports.index = function ( req, res ){
  Comment.find( function ( err, comments, count ){
    res.render( 'index', {
        title : 'Comment System with Mongoose and Node',
        comments : comments
    });
  });
}; 

exports.create = function ( req, res ){
  new Comment({
    username : req.body.username,
    content : req.body.comment,
    created : Date.now()
  }).save( function( err, comment, count ){
    res.redirect( '/' );
  });
};