Meteor.subscribe('theSuggestions');

Template.homepage.helpers({
    suggestion : function () {
        return Suggestions.find();
    }
});