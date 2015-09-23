class LookupDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      template: '<p>TEST</p>',
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
