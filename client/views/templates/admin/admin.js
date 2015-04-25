Template.adminTemplate.helpers({
    users : function () {
        return Meteor.users.find().fetch();
    }
});