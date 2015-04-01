// Code goes here
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

myApp.controller('MyController', function MyController($scope) {
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.users = [];
  $scope.totalPages = 0;
  $scope.page_list = [];

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
      id: i,
      name: name + ' ' + last_name,
      amount: (Math.random() + 100) * (Math.random() * (Math.random() * 1000)),
      job: jobs[Math.floor(Math.random() * jobs.length)]
    });
  }

  $scope.pages = function() {
    $scope.totalPages = Math.ceil($scope.users.length / $scope.pageSize);

    $scope.selectCurrentPage();
  };

  $scope.prevPage = function() {
    $scope.currentPage -= 1;
    $scope.selectCurrentPage();
  };

  $scope.selectPage = function(n) {
    $scope.currentPage = n;
    $scope.selectCurrentPage();
  };

  $scope.nextPage = function() {
    $scope.currentPage += 1;
    $scope.selectCurrentPage();
  };

  $scope.selectCurrentPage = function() {
    var pages = $scope.totalPages;
    var page = $scope.currentPage;
    $scope.page_list = [];

    if (pages > 6) {


      if (page == pages) {
        page -= 4;

        $scope.page_list.push(1);
        $scope.page_list.push('...');
      }
      else if (page < (pages - 3) && page > 1)
        page -= 1;
      else if (page > (pages - 3)) {
        page = pages - 4;

        $scope.page_list.push(1);
        $scope.page_list.push('...');
      }

      for (var i = 0; i < 4; i++) {
        $scope.page_list.push(page + i);
      }

      if (page < pages && page < (pages - 4))
        $scope.page_list.push('...');

      $scope.page_list.push($scope.totalPages);
    }
    else
      for (var i = 1; i <= $scope.totalPages; i++) {
        $scope.page_list.push(i);
      }

  };

  $scope.pageChangeHandler = function(num) {
      console.log('users page changed to ' + num);
  };

  $scope.pages();
});


/************************************************/
// function OtherController($scope) {
//   $scope.pageChangeHandler = function(num) {
//     console.log('going to page ' + num);
//   };
// }

// myApp.controller('OtherController', OtherController);