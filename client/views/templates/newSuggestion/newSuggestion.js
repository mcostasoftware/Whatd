Meteor.subscribe('theSuggestions');

Template.newSuggestion.events({
    'submit form' : function(event, template) {
        event.preventDefault();
        var title = template.find('#suggestionTitle').value;
        var description = template.find('#description').value;
        var tags = template.find('#taglist').value.split(" ");
        var currentUserId = Meteor.userId();
        Suggestions.insert({
            name: title,
            score: 0,
            description: description,
            tags : tags,
            createdBy: currentUserId,
            createdAt: new Date()
        });
    }
});