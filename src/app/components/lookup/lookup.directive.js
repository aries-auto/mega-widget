class LookupDirective {
  constructor (LookupController) {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: LookupController,
      controllerAs: 'lc'
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {
     

    }

  }
}

export default LookupDirective;
