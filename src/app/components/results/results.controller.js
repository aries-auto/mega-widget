class ResultsController {
  constructor ($scope) {
    'ngInject';

    for (let i = 0; i < $scope.parts.length; i++){
	    for (let j = 0; j < $scope.parts[i].attributes.length; j++){
	    	if($scope.parts[i].attributes[j].key.toLowerCase() === 'upc'){
	    		$scope.parts[i].upc = $scope.parts[i].attributes[j].value;
	    		break;
	    	}
	    }
    }
    
  }
}

export default ResultsController;
