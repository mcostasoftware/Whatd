
Template.suggestion.helpers({
    //
    suggestionIndividual : function () {
        return  Template.instance().data;
    }

});
Template.commentSection.helpers({
    suggestionComments: function() {
        return Comments.find({suggestionId: this._id});
    }
});

Template.suggestion.events({
    'submit form .btn-warning' : function(event, template) {
        event.preventDefault();
        console.log(event.target);
    }

});

Template.commentSection.events({
    'submit form' : function(event, template) {
        event.preventDefault();
        //inserir novo comentário
        var body = template.find('#CommentBody').value;
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Meteor.call("newComment",this._id, body, Meteor.user().username);

    },
    'click .glyphicon-thumbs-down' : function(event, template) {
        Meteor.call("voteComment", this._id, -1);
    },
    'click .glyphicon-thumbs-up' : function(event, template) {
        Meteor.call("voteComment", this._id, 1);
    }

});


Template.modalEdit.events({
    'submit form' : function(event, template) {
        event.preventDefault();
        var title = template.find('#Title').value;
        var description = template.find('#Body').value;
        var tags = template.find('#List').value.split(" ");

        Meteor.call("updateSuggestion", this._id, title, description, tags, function(error, result){
            console.log(error , result);
        } );

    }
});

