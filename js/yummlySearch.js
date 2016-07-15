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
            beforeSend:func1,
        }).done(func2)
          .fail(failFunction);
}

headers: {
		X-Yummly-App-ID:app-id
        "My-First-Header":"first value",
        X-Yummly-App-Key:app-key
        "My-Second-Header":"second value"
    }


function search(){
  var searchPokemonUrl = "http://pokeapi.co/api/v2/pokemon/" + textBox;
  var searchPokemonLog = function(){console.log("searching pokemon")};

  ajaxRequest(searchPokemonUrl, searchPokemonLog, successFunctionSearchPokemon);
}; 
