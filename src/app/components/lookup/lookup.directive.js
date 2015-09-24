class LookupDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      templateUrl: 'app/components/lookup/lookup.html',
      link: linkFunc,
      controller: 'LookupController',
      controllerAs: 'lc'
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {
      console.log('I am a directive');

    }

  }
}

export default LookupDirective;
