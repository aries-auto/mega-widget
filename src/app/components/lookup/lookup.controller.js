class LookupController {
  constructor ($scope, $rootScope, LookupService) {
    'ngInject';
    console.log('I am a lookup controller');
    LookupService.vehicle().then((resp) =>{
    	$scope.years = resp.data.available_years;
    	// console.log($scope.years);
    }, (err) =>{
    	$rootScope.error = err;
    });
    
  }
}

export default LookupController;
