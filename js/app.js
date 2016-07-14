var app = angular.module('recipesApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'HomeViewController'
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

app.directive('googleLogin', function(){
	var injectScript = function(element) {
        var scriptTag = angular.element(document.createElement('script'));
        scriptTag.attr('charset', 'utf-8');
        scriptTag.attr('src', 'https://apis.google.com/js/platform.js', 'async', 'defer');
        element.append(scriptTag);
    };

    // var injectScript2 = function(element) {
    //     var scriptTag = angular.element(document.createElement('script'));
    //     scriptTag.attr('charset', 'utf-8');
    //     scriptTag.attr('src', 'https://apis.google.com/js/platform.js', 'async', 'defer');
    //     element.append(scriptTag);
    // };

    return {
        link: function(scope, element) {
            injectScript(element);
        }
    };
});