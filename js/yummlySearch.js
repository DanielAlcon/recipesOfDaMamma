var searchQuery;

$("#searchButton").on("click", function(e){
	e.preventDefault();
	searchText = encodeURI($("#searchRecipe").val());
	console.log("search button ok");
	console.log(searchText);
/*	search();
$("#searchRecipe").val("");*/
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
}

function ajaxRequest(url, func1, func2){
	$.ajax({
		url: url, 
		dataType:"json",
		headers: {
			"X-Yummly-App-ID": "4f8d5f5a",
			"X-Yummly-App-Key": "15ca836c85d71216be87d521578d34d8",
			"Accept-Encoding": "gzip"
		},
		beforeSend:func1,
	}).done(func2)
	.fail(failFunction);
}

function search(){
	var searchEndpoint = "http://api.yummly.com/v1/api/recipes?&q=" + searchText;
	var searchLog = function(){
		console.log("searching recipe");
	};
	withPictures();
	includeIngredients();
	excludeIngredients();
	allergies();
	diets();
	includedCuisines();
	excludedCuisines();

	ajaxRequest(searchQuery, searchLog, successFunction);
}

function failFunction(request, textStatus, errorThrown) {
	alert("An error occurred during your request: " + request.status + " " + textStatus + " " + errorThrown);
}

function successFunction(){
	console.log('success!!');
}

function withPictures(){
	if ($('#pictures').is(':checked')) {
		searchQuery = searchEndpoint + '&requirePictures=true';
	}
}

function includeIngredients(){
	if ($('#included-ingredients').val() != ""){
  	// split by spaces  $("#searchquery").text().split(/ +/);
  	var ingredientsToInclude = $('#included-ingredients').val();
  	ingredientsToInclude = ingredientsToInclude.text().split(/ +/);
  	for (var i = 0; i<ingredientsToInclude.length; i++){
  		var addedIngredient = encodeURI(ingredientsToInclude[i]);
  		searchQuery = searchQuery + "&allowedIngredient[]=" + addedIngredient;
  	}
  }
}

function excludeIngredients(){
	if ($('#excluded-ingredients').val() != ""){
  	// split by spaces  $("#searchquery").text().split(/ +/);
  	var ingredientsToExclude = $('#excluded-ingredients').val();
  	ingredientsToExclude = ingredientsToExclude.text().split(/ +/);
  	for (var i = 0; i<ingredientsToExclude.length; i++){
  		var excludedIngredient = encodeURI(ingredientsToExclude[i]);
  		searchQuery = searchQuery + "&excludedIngredient[]=" + excludedIngredient;
  	}
  }
}

function allergies() {
	var allergies = [];
	$('.allergies:checkbox:checked').each(function() {
		allergies.push($(this).val());
	});
	if (allergies != []) {
		for (var i = 0; i<allergies.length; i++){
			var allergy = encodeURI(allergies[i]);
			searchQuery = searchQuery + "&allowedAllergy[]=" + allergy;
		}
	}	
}

/*function cookingTime(){

}*/

function diets(){
	var diets =[];
	$('.diets:checkbox:checked').each(function() {
		diets.push($(this).val());
	});
	if (diets != []) {
		for (var i = 0; i<diets.length; i++){
			var diet = encodeURI(diets[i]);
			searchQuery = searchQuery + "&allowedAllergy[]=" + diet;
		}
	}	
}

function includedCuisines(){
	var includedCuisines =[];
	$('.included-cuisines:checkbox:checked').each(function() {
		includedCuisines.push($(this).val());
	});
	if (includedCuisines != []) {
		for (var i = 0; i<includedCuisines.length; i++){
			var includedCuisine = encodeURI(includedCuisines[i]);
			searchQuery = searchQuery + "&allowedCuisine[]=" + includedCuisine;
		}
	}	
}

function excludedCuisines(){
	var excludedCuisines =[];
	$('.excluded-cuisines:checkbox:checked').each(function() {
		excludedCuisines.push($(this).val());
	});
	if (excludedCuisines != []) {
		for (var i = 0; i<excludedCuisines.length; i++){
			var excludedCuisine = encodeURI(excludedCuisines[i]);
			searchQuery = searchQuery + "&excludedCuisine[]=" + excludedCuisine;
		}
	}	
}