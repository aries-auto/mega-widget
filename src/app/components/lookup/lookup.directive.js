class LookupDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: false,
      templateUrl: 'app/components/lookup/lookup.html',
      link: linkFunc,
      controller: 'LookupController',
      controllerAs: 'lc'
    };

    return directive;

    function linkFunc() {


    }

  }
}

export default LookupDirective;
