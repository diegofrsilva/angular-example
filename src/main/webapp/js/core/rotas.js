angular.module('AlunosApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/consultarAluno', {
          templateUrl: 'partials/cadastro/consultarAluno.html',
        })
        .when('/consultarProfessor', {
            templateUrl: 'partials/cadastro/consultarProfessor.html',
          })
  		.when('/cadastrarAluno', {
          templateUrl: 'partials/cadastro/cadastrarAluno.html',
        })
        .when('/cadastrarProfessor', {
            templateUrl: 'partials/cadastro/cadastrarProfessor.html',
          })
        .otherwise({
        	redirectTo: '/'
        });
	  $locationProvider.html5Mode(false); // Disabilitando rotas ao estilo HTML 5, utilizando hash (#).
	  $locationProvider.hashPrefix('');
}]);