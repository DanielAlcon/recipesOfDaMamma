var app = angular.module('recipesApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

app.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/search_page.html',
    controller: 'HomeViewController'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginViewController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterViewController'
  })
  .when('/recipe', {
    templateUrl: 'views/recipe.html',
    controller: 'RegisterViewController'
  })/*
  .when('/expenses/edit/:id' , {
    templateUrl: 'views/expensesForm.html',
    controller: 'NewEditExpenseViewController'
  })
  .otherwise({
    redirectTo: '/'
  });*/
}]);

app.controller('HomeViewController', ['$scope', function($scope){
}]);

//Active menu
app.controller("menuController",["$scope","$location",function($scope,$location){
    $scope.isActive = function (viewLocation) { 
       return viewLocation === $location.path();
   };
}]);

app.controller('LoginViewController', ['$scope',function($scope){
}]);

app.controller('RegisterViewController', ['$scope',function($scope){
}]);

app.controller('AccordionCtrl', function($scope) {
	$scope.oneAtATime = true;
});

// load google login
app.directive('wtsGoogleLogin', function(){
	var injectScript = function(element) {
        var scriptTag = angular.element(document.createElement('script'));
        scriptTag.attr('charset', 'utf-8');
        scriptTag.attr('src', 'https://apis.google.com/js/platform.js', 'async', 'defer');
        element.append(scriptTag);
    };

    return {
        link: function(scope, element) {
            injectScript(element);
        }
    };
});

// NO FUNCIONA!!!
// load search js
/*app.directive('wtsSearchFilters', function(){
	var injectScript = function(element) {
        var scriptTag = angular.element(document.createElement('script'));
        scriptTag.attr('src', './js/yummlySearch.js');
        element.append(scriptTag);
    };

    return {
        link: function(scope, element) {
            injectScript(element);
        }
    };
});*/

// 1- include the custom javascript files in the main page (from the server)
// 2- create another html file just for the canvas, and put the #container and #json there
// 3- in the subpage, include the canvas html  <div ng-include src="'/public/canvas/canvas.html'" onload="canvasReady()"></div>
// 4- call the starting function of custom javascript inside $scope.canvasReady() function