class ResultController {
  constructor ($scope, $rootScope, $sce, ResultService) {
    'ngInject';
    console.log('I am a result controller');
    ResultService.part().then((resp) =>{
    	$scope.part = resp.data;
    	console.log($scope.part);
    }, (err) =>{
    	$rootScope.error = err;
    });

   	$scope.getInstallSheet = function(){
		if($scope.part === undefined || $scope.part.install_sheet === undefined){
			return '';
		}
		if($scope.part === null || $scope.part.install_sheet === null){
			return '';
		}
		return $sce.trustAsResourceUrl($scope.part.install_sheet.Scheme +'://'+$scope.part.install_sheet.Host+$scope.part.install_sheet.Path);
	};
    
  }
}

export default ResultController;
