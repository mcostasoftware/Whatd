
var tagsL = new ReactiveArray();

Template.sidebar.events({
    'keydown form' : function(event, template) {


        // verifica se � spacebar
        if (event.keyCode == '32') {

            event.preventDefault();
            var tag = template.find('#TagsInput').value;

            // Remove os espa�os e limpa o input
            tagsL.push(tag.split(" "));
            $('#inputForTags')[0].reset();
        }
        // impede utilizadores de escreverem mais do que 25 letras
        else if (template.find('#TagsInput').value.length > 25 && event.keyCode != 8) {

                event.preventDefault();
            }



    }
});

Template.sidebar.helpers({
    tagsList : function () {
        return tagsL.list();
    }
});