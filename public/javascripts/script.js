// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.meals = [];

  var dishes = [
    'noodles',
    'sausage',
    'beans on toast',
    'cheeseburger',
    'battered mars bar',
    'crisp butty',
    'yorkshire pudding',
    'wiener schnitzel',
    'sauerkraut mit ei',
    'salad',
    'onion soup',
    'bak choi',
    'avacado maki',
    'noodles algarabia maki',
    'sausage algarabia maki',
    'beans on toast algarabia maki',
    'cheeseburger algarabia maki',
    'battered mars bar algarabia maki',
    'crisp butty algarabia maki',
    'yorkshire pudding algarabia maki',
    'wiener schnitzel algarabia maki',
    'sauerkraut mit ei algarabia maki',
    'salad algarabia maki',
    'onion soup algarabia maki',
    'bak choi algarabia maki',
    'avacado algarabia maki'
  ];
  var sides = [
    'with chips',
    'a la king',
    'drizzled with cheese sauce',
    'with a side salad',
    'on toast',
    'with ketchup',
    'on a bed of cabbage',
    'wrapped in streaky bacon',
    'on a stick with cheese',
    'in pitta bread',
    'with chips algarabia maki',
    'a la king algarabia maki',
    'drizzled with cheese sauce algarabia maki',
    'with a side salad algarabia maki',
    'on toast algarabia maki',
    'with ketchup algarabia maki',
    'on a bed of cabbage algarabia maki',
    'wrapped in streaky bacon algarabia maki',
    'on a stick with cheese algarabia maki',
    'in pitta bread algarabia maki'
  ];

  for (var i = 1; i <= 100; i++) {
    var dish = dishes[Math.floor(Math.random() * dishes.length)];
    var side = sides[Math.floor(Math.random() * sides.length)];
    $scope.meals.push('meal ' + i + ': ' + dish + ' ' + side);
  }

  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);