Meteor.subscribe('theSuggestions');

Template.homepage.helpers({
    suggestion : function () {
        return Suggestions.find();
    },
    tags : function(){
        var tagArray = _.pluck(Suggestions.find().fetch(), 'tags' );
        return tagArray;
    }
});