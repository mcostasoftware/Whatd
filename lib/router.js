Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('homepage', {path: '/'});
    this.route('newSuggestion', {path: '/NewSuggestion'});
    this.route('mySuggestions', {path: '/MySuggestions'});
});