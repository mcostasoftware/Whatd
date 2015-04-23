Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('homepage', {path: '/'});
    this.route('newSuggestion', {path: '/NewSuggestion'});
    this.route('mySuggestions', {path: '/MySuggestions'});

    this.route('adminTemplate', {path: '/AdminPanel',
    onBeforeAction : function () {
        user = Meteor.user();
        if (!Roles.userIsInRole(user, ['admin'])) {
            this.redirect('/');
            this.stop();
        }
        return true;
    }
    })

    this.route('moderatorTemplate', {path: '/ModeratorPanel',
        onBeforeAction : function () {
            user = Meteor.user();
            if (!Roles.userIsInRole(user, ['moderator'])) {
                this.redirect('/');
                this.stop();
            }
            return true;
        }
    })
});