Template.moderatorTemplate.helpers({
    users : function () {
        return Meteor.users.find().fetch();
    }
});