
Template.homepage.helpers({
    suggestions : function () {
        return Suggestions.find();
    }
});

Template.homepage.events({
   'click .glyphicon-thumbs-down' : function(event, template) {
       Meteor.call("voteSuggestion", this._id, -1);
   },
    'click .glyphicon-thumbs-up' : function(event, template) {
        Meteor.call("voteSuggestion", this._id, 1);
    }
});
