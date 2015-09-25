class ResultDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: false,
      templateUrl: 'app/components/result/result.html',
      link: linkFunc,
      controller: 'ResultController',
      controllerAs: 'lc',
      transclude: true
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {
    }

  }
}

export default ResultDirective;
