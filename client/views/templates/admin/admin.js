
Template.adminTemplate.helpers({
    users : function () {
        return Meteor.users.find().fetch();
    }
});

Template.adminTemplate.events({
    'submit' : function(event, template) {
        event.preventDefault();
        var ID = template.find('#UserID').value;
        Roles.addUsersToRoles(ID, 'moderator');
    }
});