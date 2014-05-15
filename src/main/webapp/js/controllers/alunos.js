
angular.module('AlunosApp').controller('ConsultaAlunosController', ['$scope', function($scope) {
		$scope.filtro = {};
		
		$scope.consultar = function() {
			alert('Nome: ' + $scope.filtro.nome + ", Data Nascimento: " + $scope.filtro.dataNacimento);
		}
}]);