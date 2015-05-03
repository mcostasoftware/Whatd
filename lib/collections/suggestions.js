Suggestions = new Meteor.Collection('suggestions');
Votes = new Meteor.Collection('votes');
Comments = new Meteor.Collection('comments');
CommentVotes = new Meteor.Collection('commentVotes');

Suggestions.initEasySearch('name');

EasySearch.createSearchIndex('name', {
    'field' : ['name'],
    'collection' : Suggestions,
    'props' : {
        'tags' : []
    },
    'query' : function (searchString) {
        // Default query that will be used for searching
        var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

        // filter for categories if set
        if (this.props.tags.length > 0) {
            query.tags = { $in : this.props.tags };
        }

        return query;
    }
});