

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

Meteor.publish('users', function(){
   return Meteor.users.find({}, {fields: {username: 1, createdAt: 1, _id: 1}});
});