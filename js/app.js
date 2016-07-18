var app = angular.module('recipesApp', ['ngRoute']);

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

app.directive('wtsSearchFilters', function(){
	var injectScript = function(element) {
        var scriptTag = angular.element(document.createElement('script'));
        scriptTag.attr('src', 'link/to/the/script');
        element.append(scriptTag);
    };

    return {
        link: function(scope, element) {
            injectScript(element);
        }
    };
});