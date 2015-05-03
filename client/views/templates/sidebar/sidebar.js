
var tagsL = new ReactiveArray();

Template.sidebar.events({
    'keydown form' : function(event, template) {


        // verifica se é spacebar
        if (event.keyCode == '32')
        {
            // É verificado se a tag já está na lista
            var duplicate = false;
            var tagAdded = template.find('#TagsInput').value.split(" ")[0]
            tagsL.forEach(function (item) {
                if (tagAdded == item) {
                    duplicate = true;
                }
            });
            if (duplicate == false) {
                if(tagAdded.length >= 2){
                event.preventDefault();
                var tag = template.find('#TagsInput').value;

                // Remove os espaços e limpa o input
                tagsL.push(tag.split(" ")[0]);
                    //adicionar filtro à pesquisa
                    var instance = EasySearch.getComponentInstance(
                        { index : 'suggestions' }
                    );
                    EasySearch.changeProperty('suggestions', 'Tags', tagsL);
                }
                else{
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

Template.sidebar.helpers({
    tagsList : function () {
        return tagsL.list();
    }
});