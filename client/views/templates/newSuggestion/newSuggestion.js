Template.newSuggestion.events({
    'submit form' : function(event, template) {
        event.preventDefault();
        var title = template.find('#suggestionTitle');
        var description = template.find('#description');
        var tags = template.find('#taglist');
        console.log("working!");
    }
});