Template.homepage.helpers({
    suggestion : function () {
        return Suggestions.findOne({_id: this.params._id});
    }
});