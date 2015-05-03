

Meteor.publish('votes',function(){
   return Votes.find();
});


Meteor.publish('theSuggestions',function(){
   return Suggestions.find();
});

Meteor.publish('comments',function(){
   return Comments.find();
});

Meteor.publish('commentVotes', function(){
   return CommentVotes.find();
});