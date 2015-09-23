class ResultDirective {
  constructor (ResultController) {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: ResultController,
      controllerAs: 'lc'
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {
     

    }

  }
}

export default ResultDirective;
