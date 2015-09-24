class ResultController {
  constructor ($scope, $rootScope, ResultService) {
    'ngInject';
    console.log('I am a result controller');
    ResultService.part().then((resp) =>{
    	$scope.part = resp.data;
    	console.log($scope.part);
    }, (err) =>{
    	$rootScope.error = err;
    });
    
  }
}

export default ResultController;
