
var tagsL = new ReactiveArray();

Template.sidebar.events({
    'keydown form' : function(event, template) {


        // verifica se � spacebar
        if (event.keyCode == '32')
        {
            // � verificado se a tag j� est� na lista
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

                // Remove os espa�os e limpa o input
                tagsL.push(tag.split(" ")[0]);
                    //adicionar filtro � pesquisata
                    var instance = EasySearch.getComponentInstance(
                        { index : 'suggestions' }
                    );


                    EasySearch.changeProperty('suggestions', 'tagsToSearch', tagsL.array());
                    instance.triggerSearch();
                    $('#inputForTags')[0].reset();
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


