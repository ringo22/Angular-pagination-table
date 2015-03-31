// Code goes here
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope) {
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.users = [];

  $scope.hello = 'Rodrigo Raya';

  var names = [
    'Pedro',
    'Juan',
    'Roberto',
    'Adrian',
    'Polo',
    'Andrea',
    'Julieta',
    'Saul',
    'Jose Luis',
    'Rodrigo',
    'Arturo',
    'Jhonatan',
    'Alex',
    'David',
    'Max',
    'Alan',
    'Antonio',
    'Luis',
    'Gerardo',
    'Fernando',
    'Gustavo',
    'Daniel',
    'Raymundo',
    'Moises',
    'Angel'
  ];

  var surnames = [
    'Lopez',
    'Gomez',
    'Motta',
    'Beck',
    'Watson',
    'Velbet',
    'Pool',
    'Bacon',
    'Barriga',
    'Dresden',
    'Claverol',
    'Mcloner',
    'Perez',
    'Lopez',
    'Casillas',
    'Marquez',
    'Blanco',
    'Raya',
    'Suarez',
    'Gutierrez'
  ];

  var jobs = [
    'Abogado',
    'Ingeniero',
    'Contador',
    'Vendedor',
    'Vendedor Sr',
    'Programador',
    'Seguridad',
    'Director',
    'Gerente',
    'Supervisor',
    'Cheff',
    'Comprador',
    'Comprador Sr',
    'RH'
  ];

  for (var i = 1; i <= 100; i++) {
    var name = names[Math.floor(Math.random() * names.length)];
    var last_name = surnames[Math.floor(Math.random() * surnames.length)];

    $scope.users.push({
      id: '00' + i,
      name: name + ' ' + last_name,
      amount: (Math.random() + 100) * (Math.random() * (Math.random() * 1000)),
      job: jobs[Math.floor(Math.random() * jobs.length)]
    });
  }

  $scope.pageChangeHandler = function(num) {
      console.log('users page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);