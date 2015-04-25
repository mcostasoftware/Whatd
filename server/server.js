/*
Meteor.startup(function(){
    if(Meteor.users.find().count() < 1) {
    var users = [
        {name: 'Admin', email: 'admin@admin.com', roles:['admin']}
    ];
    _.each(users, function(userData){
        var userid = Accounts.createUser({
            email:userData.email,
            password:'test1',
            username: userData.email,
            profile:{name:userData.name}
        });
        Meteor.users.update({_id:userid}, {$set:{'emails.0.verified':true}});
        Roles.addUsersToRoles(userid, userData.roles);
    });
    }
});
*/
