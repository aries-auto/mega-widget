import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import LookupDirective from './components/lookup/lookup.directive';


angular.module('productWidget', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial'])

  .config(config)

  .config(routerConfig)

  .run(runBlock)

  .controller('MainController', MainController)
  .directive('lookupDirective', LookupDirective);

