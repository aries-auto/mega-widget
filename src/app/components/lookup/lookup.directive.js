class LookupDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          val: '='
      },
      templateUrl: 'app/components/lookup/lookup.html',
      link: linkFunc,
      controller: 'LookupController',
      controllerAs: 'lc'
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {


    }

  }
}

export default LookupDirective;
