class VehicleInfoDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          vehicle: '='
      },
      templateUrl: '/app/components/vehicleInfo/vehicleInfo.html',
      link: linkFunc,
      controller: 'VehicleInfoController',
      controllerAs: 'lc'
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {

    }

  }
}

export default VehicleInfoDirective;
