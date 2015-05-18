Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('homepage', {path: '/'});
    this.route('newSuggestion', {path: '/NewSuggestion'});
    this.route('mySuggestions', {path: '/MySuggestions'});

    this.route('suggestion', {
        path: '/suggestion/:_id',
        data: function() { return Suggestions.findOne(this.params._id); }
    });

    this.route('profile', {
        path: '/profile/:username',
        data: function() { return Meteor.users.findOne(this.params._id); }
    });

    this.route('adminTemplate', {
        path: '/AdminPanel',
        onBeforeAction: function(pause) {
            var user = Meteor.user();
            if(!Roles.userIsInRole(user, ['admin'])) {
                this.redirect('/');
                this.stop();
            } else {
                this.next();
            }

        }
    });


    this.route('moderatorTemplate', {path: '/ModeratorPanel',
        onBeforeAction : function () {
            user = Meteor.user();
            if (!Roles.userIsInRole(user, ['moderator'])) {
                this.redirect('/');
                this.stop();
            } else{
                this.next();
            }
        }
    })
});