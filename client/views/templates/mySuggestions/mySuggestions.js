Template.mySuggestions.helpers({
    suggestionCurrent : function () {
        var currentUserId = Meteor.userId();
        return Suggestions.find({createdBy: currentUserId});
    }
});