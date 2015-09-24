import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import LookupController from './components/lookup/lookup.controller';
import ResultsController from './components/results/results.controller';
import VehicleInfoController from './components/vehicleInfo/vehicleInfo.controller';
import ResultController from './components/result/result.controller';
import ImagesController from './components/images/images.controller';
import ContentController from './components/content/content.controller';
import CheckoutController from './components/checkout/checkout.controller';

import LookupDirective from './components/lookup/lookup.directive';
import ResultsDirective from './components/results/results.directive';
import VehicleInfoDirective from './components/vehicleInfo/vehicleInfo.directive';
import ResultDirective from './components/result/result.directive';
import ImagesDirective from './components/images/images.directive';
import ContentDirective from './components/content/content.directive';
import CheckoutDirective from './components/checkout/checkout.directive';

import LookupService from './components/lookup/lookup.service';

import Constants from './constants/constants';


angular.module('productWidget', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial'])

  .config(config)

  .config(routerConfig)

  .run(runBlock)

  .controller('MainController', MainController)
  .controller('LookupController', LookupController)
  .controller('ResultsController', ResultsController)
  .controller('VehicleInfoController', VehicleInfoController)
  .controller('ResultController', ResultController)
  .controller('ImagesController', ImagesController)
  .controller('ContentController', ContentController)
  .controller('CheckoutController', CheckoutController)

  .directive('lookup', LookupDirective)
  .directive('results', ResultsDirective)
  .directive('vehicle', VehicleInfoDirective)
  .directive('result', ResultDirective)
  .directive('images', ImagesDirective)
  .directive('contentDirective', ContentDirective)
  .directive('checkout', CheckoutDirective)

  .service('LookupService', LookupService)
  .service('Constants', Constants);


