var app = angular.module('recipesApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/expenses.html',
    controller: 'HomeViewController'
  })
  .when('/expenses', {
    templateUrl: 'views/expenses.html',
    controller: 'ExpensesViewController'
  })
  .when('/expenses/new' , {
    templateUrl: 'views/expensesForm.html',
    controller: 'NewEditExpenseViewController'
  })
  .when('/expenses/edit/:id' , {
    templateUrl: 'views/expensesForm.html',
    controller: 'NewEditExpenseViewController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

app.controller('HomeViewController', ['$scope', function($scope){
  $scope.appTitle = 'Simple Expenses Tracker. OU Yeah!!!';
}]);