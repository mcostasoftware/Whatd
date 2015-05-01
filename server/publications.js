


Meteor.publish('theSuggestions',function(){
   return Suggestions.find();
});
