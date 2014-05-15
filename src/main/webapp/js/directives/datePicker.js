angular.module('AlunosApp').directive("datepicker", function () {
  return {
	// Define que a directiva so pode ser utilizada como atributo.
    restrict: "A",
    
    // Define que a diretiva ngModel deve existir no campo
    require: "ngModel",
    link: function (scope, elem, attrs, ngModelCtrl) {
    	var updateModel = function (dateText) {
    		scope.$apply(function () {
    			ngModelCtrl.$setViewValue(dateText);
			});
		};

		// Transforma o elemento em um datepicker do jquery-ui. Atribui a function updateModel no evento onSelect.
		// Ou seja, sempre que algo for selecionado a function updateModel ira atualizar o valor no modelo.
		var options = {
			dateFormat: "dd/mm/yy",
			onSelect: function (dateText) {
				updateModel(dateText);
			}
		};
		elem.datepicker(options);
    }
  }
});