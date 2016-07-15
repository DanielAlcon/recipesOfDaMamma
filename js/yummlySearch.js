$("#searchById").on("click", function(e){
    e.preventDefault();
    textBox = $("#textBox").val();
    search();
    $("#textBox").val("");
});

function searchOnEnter(e){
   e = e || window.event;
   if (e.keyCode == 13)
   {
       textBox = $("#textBox").val();
       search();
       return false;
   }
   return true;
};

function ajaxRequest(url, func1, func2){
  $.ajax({
            url: url, 
            dataType:"json",
            headers: {
            	"X-Yummly-App-ID": "4f8d5f5a",
            	"X-Yummly-App-Key": "15ca836c85d71216be87d521578d34d8"
            },
            beforeSend:func1,
        }).done(func2)
          .fail(failFunction);
}


function search(){
  var searchPokemonUrl = "http://pokeapi.co/api/v2/pokemon/" + textBox;
  var searchPokemonLog = function(){console.log("searching pokemon")};

  ajaxRequest(searchPokemonUrl, searchPokemonLog, successFunctionSearchPokemon);
}; 
