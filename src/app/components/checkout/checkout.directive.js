class CheckoutDirective {
  constructor (CheckoutController) {
    'ngInject';

    let directive = {
      restrict: 'E',
      scope: {
          extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: CheckoutController,
      controllerAs: 'lc'
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {
     

    }

  }
}

export default CheckoutDirective;
