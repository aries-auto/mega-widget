class MainDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
        parts: '=',
        vehicle: '='
      },
      template:'',
      link: linkFunc,
      controller: 'MainController',
      controllerAs: 'mc'
    };

    return directive;

    function linkFunc() {

    }

  }
}

export default MainDirective;
