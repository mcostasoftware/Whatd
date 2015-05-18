Meteor.methods({
    addSuggestion: function (title, description, tags, response) {
        // Verificar se utilizador est� logged in
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        // Verificar se a ReCaptcha est� correcta
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, response);
        if( verifyCaptchaResponse.data.success === false ){
            return verifyCaptchaResponse.data;
        }
        // Inserir nova sugestao
        Suggestions.insert({
            name: title,
            score: 0,
            description: description,
            tags : tags,
            createdBy: Meteor.userId(),
            createdAt: new Date(),
            username: Meteor.user().username
        });
    },
    deleteSuggestion: function (suggestionId) {
        Suggestions.remove(suggestionId);
    },
    voteSuggestion: function (suggestionId, vote)
    {
        // Limitar votos a utilizadores registados
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        //Limitar um voto para cada sugest�o por cada utilizador
        var x = Votes.findOne({suggestionId : suggestionId , userId: Meteor.userId()});
        if (x == undefined) {
        Votes.insert({suggestionId : suggestionId, userId: Meteor.userId()});
            // Calcular a nova pontua��o para a sugest�o
            var newScore;
            var suggestion = Suggestions.findOne({_id : suggestionId});
            newScore = suggestion.score + vote;
            if (vote === 1) {
                Suggestions.update(suggestionId, { $set: { score: newScore} });
            }
            else if (vote === -1) {
                Suggestions.update(suggestionId, { $set: { score: newScore} });
            }
            else{
                throw new Meteor.Error("Invalid Vote");
            }
        }


    },
    newComment: function(suggestionId, body, username) {
        Comments.insert(
            {
                suggestionId: suggestionId,
                userId: Meteor.userId(),
                username: username,
                body: body,
                date: new Date(),
                score : 0
            });
    },
    voteComment : function (commentId, vote)
    {
        // Limitar votos a utilizadores registados
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        //Limitar um voto para cada sugest�o por cada utilizador
        var x = CommentVotes.findOne({commentId : commentId , userId: Meteor.userId()});
        if (x == undefined) {
            CommentVotes.insert(
                {
                    commentId : commentId,
                    userId: Meteor.userId()
                }
            );
            // Calcular a nova pontua��o para o comentario
            var newScore;
            var comment = Comments.findOne(
                {
                    _id : commentId
                });
            newScore = comment.score + vote;
            if (vote === 1) {
                Comments.update(commentId, { $set: { score: newScore} });
            }
            else if (vote === -1) {
                Comments.update(commentId, { $set: { score: newScore} });
            }
            else{
                throw new Meteor.Error("Invalid Vote");
            }
        }


    },
    updateSuggestion : function(suggestionId, title, body, tags){
        if (! Meteor.userId() && ! Roles.userIsInRole(Meteor.userId(), ['admin'])) {
            throw new Meteor.Error("not-authorized");
        }
        Suggestions.update(
            { _id: suggestionId },
            {
                name: title,
                description: body,
                tags: tags
            }
        )
    }
});