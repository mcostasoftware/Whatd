Meteor.methods({
    addSuggestion: function (title, description, tags, response) {
        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, response);
        if( verifyCaptchaResponse.data.success === false ){
            return verifyCaptchaResponse.data;
        }
        Suggestions.insert({
            name: title,
            score: 0,
            description: description,
            tags : tags,
            createdBy: Meteor.userId(),
            createdAt: new Date()
        });
    },
    deleteSuggestion: function (suggestionId) {
        Suggestions.remove(suggestionId);
    },
    voteSuggestion: function (suggestionId, vote)
    {
        if (vote === 1) {
            Suggestions.update(taskId, { $set: { checked: setChecked} });
        }
        else if (vote === -1) {
            Suggestions.update(taskId, { $set: { checked: setChecked} });
        }
        else{
            throw new Meteor.Error("Invalid Vote");
        }

    }
});