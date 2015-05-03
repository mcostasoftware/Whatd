Template.profile.helpers({
    User : function () {
        return  Template.instance().data;
    },

    userSuggestion: function() {
        var user = Meteor.users.find({username : Template.instance().data});

        return Suggestions.find(
            {
                createdBy : user._id
            }
        );
    }
});