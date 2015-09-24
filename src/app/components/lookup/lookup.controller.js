class LookupController {
  constructor ($scope, $rootScope, LookupService) {
    'ngInject';

    $scope.vehicle = {};

    LookupService.categories().then((resp) => {
		$scope.categories = resp.data;
    }, (err) => {
		$rootScope.error = err;
    });

    $scope.updateCategory = (cat) =>{
		$scope.category = cat;
		getVehicle($scope.category);
    };

    $scope.updateYear = (year) =>{
		$scope.vehicle.year = year;
		getVehicle($scope.category, $scope.vehicle);
    };

    $scope.updateMake = (make) =>{
		$scope.vehicle.make = make;
		getVehicle($scope.category, $scope.vehicle);
    };

	$scope.updateModel = (model) =>{
		$scope.vehicle.model = model;
		getVehicle($scope.category, $scope.vehicle);
    };

    $scope.updateStyle = (style) =>{
		$scope.vehicle.style = style;
		$rootScope.vehicle = $scope.vehicle;
		getVehicle($scope.category, $scope.vehicle);
    };

    var getVehicle = (cat, vehicle) => {
		LookupService.vehicle(cat, vehicle).then((resp) => {
			$scope.years = resp.data.available_years;
			$scope.makes = resp.data.available_makes;
			$scope.models = resp.data.available_models;
			$scope.styles = resp.data.available_styles;
			$rootScope.parts = resp.data.parts;
			// console.log(resp.data.parts);//TODO remove
		}, (err) => {
			$rootScope.error = err;
		});
    };

	//TODO remove
    //make development easier
    // getVehicle('3 in round side bars',{year:'2015',make:'ford', model:'f-150', style:'super cab'});
    
  }
}

export default LookupController;
