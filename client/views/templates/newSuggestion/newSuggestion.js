

Template.newSuggestion.events({
    'submit form' : function(event, template) {
        event.preventDefault();
        var title = template.find('#suggestionTitle').value;
        var description = template.find('#description').value;
        var tags = template.find('#taglist').value.split(" ");
        var response = $('#g-recaptcha-response').val();

        Meteor.call("addSuggestion", title, description, tags, response, function(error, result){
            console.log("Result: " , error, result);
        } );
    }
});