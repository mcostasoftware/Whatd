var tagsL = new ReactiveArray();

Template.newSuggestion.events({

    'submit form': function (event, template) {
        event.preventDefault();
        var title = template.find('#suggestionTitle').value;
        var description = template.find('#description').value;
        var response = $('#g-recaptcha-response').val();

        Meteor.call("addSuggestion", title, description, tagsL.array(), response, function (error, result) {
            this.redirect('suggestion');
        });

    },

    'keydown form': function (event, template) {


        // verifica se ? spacebar
        if (event.keyCode == '32') {
            // ? verificado se a tag j? est? na lista
            var duplicate = false;
            var tagAdded = template.find('#TagsInput').value.split(" ")[0]
            tagsL.forEach(function (item) {
                if (tagAdded == item) {
                    duplicate = true;
                }
            });
            if (duplicate == false) {
                if (tagAdded.length >= 2) {
                    event.preventDefault();
                    var tag = template.find('#TagsInput').value;

                    // Remove os espa?os e limpa o input
                    tagsL.push(tag.split(" ")[0]);


                    $('#inputForTags')[0].reset();
                }
                else {
                    event.preventDefault();
                    $('#inputForTags')[0].reset();
                }

            }
            $('#inputForTags')[0].reset();
        }
        // impede utilizadores de escreverem mais do que 25 letras
        else if (template.find('#TagsInput').value.length > 25 && event.keyCode != 8) {

            event.preventDefault();
        }
    }
});

Template.newSuggestion.helpers({
    tagsList : function () {
        return tagsL.list();
    }
});
