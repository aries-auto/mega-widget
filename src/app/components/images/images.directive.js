class ImagesDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      template: 'app/components/images/image.html',
      link: linkFunc,
      controller: 'ImagesController',
      controllerAs: 'img'
    };

    return directive;

    function linkFunc(scope, el, attr, lc) {
      
    }

  }
}

export default ImagesDirective;
