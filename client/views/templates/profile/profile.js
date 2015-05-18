Template.profile.helpers({
    User : function () {
        return  Template.instance().data;
    },
    userSuggestion: function() {

        var user = Template.instance().data;

        return Suggestions.find(
            {
                createdBy : user._id
            }
        );
    }
});

Meteor.subscribe("users");