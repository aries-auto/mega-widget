class ResultsDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          parts: '=',
          vehicle: '='
      },
      templateUrl: '/app/components/results/results.html',
      link: linkFunc,
      controller: 'ResultsController',
      controllerAs: 'rc'
    };

    return directive;

    function linkFunc(scope, el, attr, rc) {
     

    }

  }
}

export default ResultsDirective;
