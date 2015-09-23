class VehicleInfoDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      template: '&nbsp;',
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
