/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__index_46_config__,
	    $__index_46_route__,
	    $__index_46_run__,
	    $__main_47_main_46_controller__,
	    $__components_47_lookup_47_lookup_46_controller__,
	    $__components_47_results_47_results_46_controller__,
	    $__components_47_vehicleInfo_47_vehicleInfo_46_controller__,
	    $__components_47_result_47_result_46_controller__,
	    $__components_47_images_47_images_46_controller__,
	    $__components_47_content_47_content_46_controller__,
	    $__components_47_checkout_47_checkout_46_controller__,
	    $__components_47_lookup_47_lookup_46_directive__,
	    $__components_47_results_47_results_46_directive__,
	    $__components_47_vehicleInfo_47_vehicleInfo_46_directive__,
	    $__components_47_result_47_result_46_directive__,
	    $__components_47_images_47_images_46_directive__,
	    $__components_47_content_47_content_46_directive__,
	    $__components_47_checkout_47_checkout_46_directive__,
	    $__components_47_lookup_47_lookup_46_service__,
	    $__components_47_result_47_result_46_service__,
	    $__constants_47_constants__;
	var config = ($__index_46_config__ = __webpack_require__(1), $__index_46_config__ && $__index_46_config__.__esModule && $__index_46_config__ || {default: $__index_46_config__}).default;
	var routerConfig = ($__index_46_route__ = __webpack_require__(2), $__index_46_route__ && $__index_46_route__.__esModule && $__index_46_route__ || {default: $__index_46_route__}).default;
	var runBlock = ($__index_46_run__ = __webpack_require__(3), $__index_46_run__ && $__index_46_run__.__esModule && $__index_46_run__ || {default: $__index_46_run__}).default;
	var MainController = ($__main_47_main_46_controller__ = __webpack_require__(4), $__main_47_main_46_controller__ && $__main_47_main_46_controller__.__esModule && $__main_47_main_46_controller__ || {default: $__main_47_main_46_controller__}).default;
	var LookupController = ($__components_47_lookup_47_lookup_46_controller__ = __webpack_require__(5), $__components_47_lookup_47_lookup_46_controller__ && $__components_47_lookup_47_lookup_46_controller__.__esModule && $__components_47_lookup_47_lookup_46_controller__ || {default: $__components_47_lookup_47_lookup_46_controller__}).default;
	var ResultsController = ($__components_47_results_47_results_46_controller__ = __webpack_require__(6), $__components_47_results_47_results_46_controller__ && $__components_47_results_47_results_46_controller__.__esModule && $__components_47_results_47_results_46_controller__ || {default: $__components_47_results_47_results_46_controller__}).default;
	var VehicleInfoController = ($__components_47_vehicleInfo_47_vehicleInfo_46_controller__ = __webpack_require__(7), $__components_47_vehicleInfo_47_vehicleInfo_46_controller__ && $__components_47_vehicleInfo_47_vehicleInfo_46_controller__.__esModule && $__components_47_vehicleInfo_47_vehicleInfo_46_controller__ || {default: $__components_47_vehicleInfo_47_vehicleInfo_46_controller__}).default;
	var ResultController = ($__components_47_result_47_result_46_controller__ = __webpack_require__(8), $__components_47_result_47_result_46_controller__ && $__components_47_result_47_result_46_controller__.__esModule && $__components_47_result_47_result_46_controller__ || {default: $__components_47_result_47_result_46_controller__}).default;
	var ImagesController = ($__components_47_images_47_images_46_controller__ = __webpack_require__(9), $__components_47_images_47_images_46_controller__ && $__components_47_images_47_images_46_controller__.__esModule && $__components_47_images_47_images_46_controller__ || {default: $__components_47_images_47_images_46_controller__}).default;
	var ContentController = ($__components_47_content_47_content_46_controller__ = __webpack_require__(10), $__components_47_content_47_content_46_controller__ && $__components_47_content_47_content_46_controller__.__esModule && $__components_47_content_47_content_46_controller__ || {default: $__components_47_content_47_content_46_controller__}).default;
	var CheckoutController = ($__components_47_checkout_47_checkout_46_controller__ = __webpack_require__(11), $__components_47_checkout_47_checkout_46_controller__ && $__components_47_checkout_47_checkout_46_controller__.__esModule && $__components_47_checkout_47_checkout_46_controller__ || {default: $__components_47_checkout_47_checkout_46_controller__}).default;
	var LookupDirective = ($__components_47_lookup_47_lookup_46_directive__ = __webpack_require__(12), $__components_47_lookup_47_lookup_46_directive__ && $__components_47_lookup_47_lookup_46_directive__.__esModule && $__components_47_lookup_47_lookup_46_directive__ || {default: $__components_47_lookup_47_lookup_46_directive__}).default;
	var ResultsDirective = ($__components_47_results_47_results_46_directive__ = __webpack_require__(13), $__components_47_results_47_results_46_directive__ && $__components_47_results_47_results_46_directive__.__esModule && $__components_47_results_47_results_46_directive__ || {default: $__components_47_results_47_results_46_directive__}).default;
	var VehicleInfoDirective = ($__components_47_vehicleInfo_47_vehicleInfo_46_directive__ = __webpack_require__(14), $__components_47_vehicleInfo_47_vehicleInfo_46_directive__ && $__components_47_vehicleInfo_47_vehicleInfo_46_directive__.__esModule && $__components_47_vehicleInfo_47_vehicleInfo_46_directive__ || {default: $__components_47_vehicleInfo_47_vehicleInfo_46_directive__}).default;
	var ResultDirective = ($__components_47_result_47_result_46_directive__ = __webpack_require__(15), $__components_47_result_47_result_46_directive__ && $__components_47_result_47_result_46_directive__.__esModule && $__components_47_result_47_result_46_directive__ || {default: $__components_47_result_47_result_46_directive__}).default;
	var ImagesDirective = ($__components_47_images_47_images_46_directive__ = __webpack_require__(16), $__components_47_images_47_images_46_directive__ && $__components_47_images_47_images_46_directive__.__esModule && $__components_47_images_47_images_46_directive__ || {default: $__components_47_images_47_images_46_directive__}).default;
	var ContentDirective = ($__components_47_content_47_content_46_directive__ = __webpack_require__(17), $__components_47_content_47_content_46_directive__ && $__components_47_content_47_content_46_directive__.__esModule && $__components_47_content_47_content_46_directive__ || {default: $__components_47_content_47_content_46_directive__}).default;
	var CheckoutDirective = ($__components_47_checkout_47_checkout_46_directive__ = __webpack_require__(18), $__components_47_checkout_47_checkout_46_directive__ && $__components_47_checkout_47_checkout_46_directive__.__esModule && $__components_47_checkout_47_checkout_46_directive__ || {default: $__components_47_checkout_47_checkout_46_directive__}).default;
	var LookupService = ($__components_47_lookup_47_lookup_46_service__ = __webpack_require__(19), $__components_47_lookup_47_lookup_46_service__ && $__components_47_lookup_47_lookup_46_service__.__esModule && $__components_47_lookup_47_lookup_46_service__ || {default: $__components_47_lookup_47_lookup_46_service__}).default;
	var ResultService = ($__components_47_result_47_result_46_service__ = __webpack_require__(20), $__components_47_result_47_result_46_service__ && $__components_47_result_47_result_46_service__.__esModule && $__components_47_result_47_result_46_service__ || {default: $__components_47_result_47_result_46_service__}).default;
	var Constants = ($__constants_47_constants__ = __webpack_require__(21), $__constants_47_constants__ && $__constants_47_constants__.__esModule && $__constants_47_constants__ || {default: $__constants_47_constants__}).default;
	angular.module('productWidget', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial']).config(config).config(routerConfig).run(runBlock).controller('MainController', MainController).controller('LookupController', LookupController).controller('ResultsController', ResultsController).controller('VehicleInfoController', VehicleInfoController).controller('ResultController', ResultController).controller('ImagesController', ImagesController).controller('ContentController', ContentController).controller('CheckoutController', CheckoutController).directive('lookup', LookupDirective).directive('results', ResultsDirective).directive('vehicle', VehicleInfoDirective).directive('result', ResultDirective).directive('images', ImagesDirective).directive('contentDirective', ContentDirective).directive('checkout', CheckoutDirective).service('LookupService', LookupService).service('ResultService', ResultService).service('Constants', Constants);
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	function config($logProvider) {
	  'ngInject';
	  $logProvider.debugEnabled(true);
	}
	var $__default = config;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	function routerConfig($routeProvider) {
	  'ngInject';
	  $routeProvider.when('/', {
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  }).otherwise({redirectTo: '/'});
	}
	var $__default = routerConfig;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	function runBlock($log) {
	  'ngInject';
	  $log.debug('runBlock end');
	}
	var $__default = runBlock;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var MainController = function MainController() {
	  'ngInject';
	};
	($traceurRuntime.createClass)(MainController, {}, {});
	var $__default = MainController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var LookupController = function LookupController($scope, $rootScope, LookupService) {
	  'ngInject';
	  $scope.vehicle = {};
	  LookupService.categories().then((function(resp) {
	    $scope.categories = resp.data;
	  }), (function(err) {
	    $rootScope.error = err;
	  }));
	  $scope.updateCategory = (function(cat) {
	    $scope.category = cat;
	    getVehicle($scope.category);
	  });
	  $scope.updateYear = (function(year) {
	    $scope.vehicle.year = year;
	    getVehicle($scope.category, $scope.vehicle);
	  });
	  $scope.updateMake = (function(make) {
	    $scope.vehicle.make = make;
	    getVehicle($scope.category, $scope.vehicle);
	  });
	  $scope.updateModel = (function(model) {
	    $scope.vehicle.model = model;
	    getVehicle($scope.category, $scope.vehicle);
	  });
	  $scope.updateStyle = (function(style) {
	    $scope.vehicle.style = style;
	    getVehicle($scope.category, $scope.vehicle);
	  });
	  var getVehicle = (function(cat, vehicle) {
	    LookupService.vehicle(cat, vehicle).then((function(resp) {
	      $scope.years = resp.data.available_years;
	      $scope.makes = resp.data.available_makes;
	      $scope.models = resp.data.available_models;
	      $scope.styles = resp.data.available_styles;
	      $scope.parts = resp.data.parts;
	    }), (function(err) {
	      $rootScope.error = err;
	    }));
	  });
	};
	($traceurRuntime.createClass)(LookupController, {}, {});
	var $__default = LookupController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ResultsController = function ResultsController() {
	  'ngInject';
	};
	($traceurRuntime.createClass)(ResultsController, {}, {});
	var $__default = ResultsController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var VehicleInfoController = function VehicleInfoController() {
	  'ngInject';
	};
	($traceurRuntime.createClass)(VehicleInfoController, {}, {});
	var $__default = VehicleInfoController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ResultController = function ResultController($scope, $rootScope, ResultService) {
	  'ngInject';
	  console.log('I am a result controller');
	  ResultService.part().then((function(resp) {
	    $scope.part = resp.data;
	    console.log($scope.part);
	  }), (function(err) {
	    $rootScope.error = err;
	  }));
	};
	($traceurRuntime.createClass)(ResultController, {}, {});
	var $__default = ResultController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ImagesController = function ImagesController() {
	  'ngInject';
	};
	($traceurRuntime.createClass)(ImagesController, {}, {});
	var $__default = ImagesController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var LookupController = function LookupController() {
	  'ngInject';
	};
	($traceurRuntime.createClass)(LookupController, {}, {});
	var $__default = LookupController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var CheckoutController = function CheckoutController() {
	  'ngInject';
	};
	($traceurRuntime.createClass)(CheckoutController, {}, {});
	var $__default = CheckoutController;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var LookupDirective = function LookupDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {val: '='},
	    templateUrl: 'app/components/lookup/lookup.html',
	    link: linkFunc,
	    controller: 'LookupController',
	    controllerAs: 'lc'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, lc) {}
	};
	($traceurRuntime.createClass)(LookupDirective, {}, {});
	var $__default = LookupDirective;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ResultsDirective = function ResultsDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {extraValues: '='},
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: 'ResultsController',
	    controllerAs: 'lc'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, lc) {}
	};
	($traceurRuntime.createClass)(ResultsDirective, {}, {});
	var $__default = ResultsDirective;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var VehicleInfoDirective = function VehicleInfoDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {extraValues: '='},
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: 'VehicleInfoController',
	    controllerAs: 'lc'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, lc) {}
	};
	($traceurRuntime.createClass)(VehicleInfoDirective, {}, {});
	var $__default = VehicleInfoDirective;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ResultDirective = function ResultDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {extraValues: '='},
	    templateUrl: 'app/components/result/result.html',
	    link: linkFunc,
	    controller: 'ResultController',
	    controllerAs: 'lc'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, lc) {
	    console.log('I am a directive I swear');
	  }
	};
	($traceurRuntime.createClass)(ResultDirective, {}, {});
	var $__default = ResultDirective;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ImagesDirective = function ImagesDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {extraValues: '='},
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: 'ImagesController',
	    controllerAs: 'lc'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, lc) {}
	};
	($traceurRuntime.createClass)(ImagesDirective, {}, {});
	var $__default = ImagesDirective;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ContentDirective = function ContentDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {extraValues: '='},
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: 'ContentController',
	    controllerAs: 'lc'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, lc) {}
	};
	($traceurRuntime.createClass)(ContentDirective, {}, {});
	var $__default = ContentDirective;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var CheckoutDirective = function CheckoutDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {extraValues: '='},
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: 'CheckoutController',
	    controllerAs: 'lc'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, lc) {}
	};
	($traceurRuntime.createClass)(CheckoutDirective, {}, {});
	var $__default = CheckoutDirective;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var LookupService = function LookupService($http, Constants) {
	  this.$http = $http;
	  this.$domain = Constants.APIURL;
	  this.$key = Constants.APIKEY;
	};
	($traceurRuntime.createClass)(LookupService, {
	  vehicle: function(collection, vehicle) {
	    if (vehicle === null || vehicle === undefined) {
	      vehicle = {};
	    }
	    return this.$http({
	      url: this.$domain + '/vehicle/mongo',
	      method: 'post',
	      params: {
	        'key': this.$key,
	        'collection': collection,
	        'year': vehicle.year,
	        'make': vehicle.make,
	        'model': vehicle.model,
	        'style': vehicle.style
	      }
	    });
	  },
	  categories: function() {
	    return this.$http({
	      url: this.$domain + '/vehicle/mongo/cols',
	      method: 'get',
	      params: {'key': this.$key}
	    });
	  }
	}, {});
	LookupService.$inject = ['$http', 'Constants'];
	var $__default = LookupService;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var ResultService = function ResultService($http, Constants) {
	  this.$http = $http;
	  this.$domain = Constants.APIURL;
	  this.$key = Constants.APIKEY;
	};
	($traceurRuntime.createClass)(ResultService, {part: function() {
	    return this.$http({
	      url: this.$domain + '/part/203045',
	      method: 'get',
	      params: {'key': this.$key}
	    });
	  }}, {});
	ResultService.$inject = ['$http', 'Constants'];
	var $__default = ResultService;
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  default: {get: function() {
	      return $__default;
	    }},
	  __esModule: {value: true}
	});
	var Constants = function Constants() {
	  this.APIURL = 'http://ariesautoapi.curtmfg.com';
	  this.APIKEY = '883d4046-8b96-11e4-9475-42010af00d4e';
	};
	($traceurRuntime.createClass)(Constants, {}, {});
	var $__default = Constants;
	
	//# sourceMappingURL=<compileOutput>


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzJiNjRhYmFjNmRmYTZmZTBmZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwid2VicGFjazovLy9AdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNyIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzUiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8zIiwid2VicGFjazovLy9AdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzgiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci85Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9sb29rdXAvbG9va3VwLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy92ZWhpY2xlSW5mby92ZWhpY2xlSW5mby5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2ltYWdlcy9pbWFnZXMuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2xvb2t1cC9sb29rdXAuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy92ZWhpY2xlSW5mby92ZWhpY2xlSW5mby5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvaW1hZ2VzLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9sb29rdXAvbG9va3VwLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6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QUFHLEtBQUcsS0FBSyxDQUNoQjtBQUFBLEtBQ0QsQ0FBQyxDQUFDO0dBQ0gsTWhCZm9GO0FnQmtCckYsYUFBWSxRQUFRLEVBQUksRUFBQyxPQUFNLENBQUUsWUFBVSxDQUFDLENBQUM7QXJCbEJ6QyxjQUFTLEVxQm9CRSxjckJwQmtCO0FxQnFCakM7Ozs7Ozs7O0FDckJBO0EzQkFBLE1BQUssaUJBQWtCLENBQUMsT0FBTTtVQ0E5QixFQUFDLEdBQUUsWUNBcUI7QUFBRSx3QkFBd0I7S0FBRSxDREE3QjtBRUF2QixZQUFTLENDQVQsRUFBQyxLQUFJLENEQU8sS0NBWSxDQUFDO0VKQXlCLENBQUM7QVNBL0MsZWtCQUosU0FBTSxVQUFRLENBQ0QsQ0FBQztBQUtaLE1BQUcsT0FBTyxFQUFJLGtDQUFnQyxDQUFDO0FBQy9DLE1BQUcsT0FBTyxFQUFJLHVDQUFxQyxDQUFDO0FsQlBkO0FDQXZDLGdCQUFjLFlBQVksQ0FBRSxtQkFBd0Q7QUxBakYsY0FBUyxFc0JXRSxVdEJYa0I7QXNCV1QiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjMmI2NGFiYWM2ZGZhNmZlMGZlZFxuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9pbmRleC5jb25maWcnO1xuXG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gJy4vaW5kZXgucm91dGUnO1xuXG5pbXBvcnQgcnVuQmxvY2sgZnJvbSAnLi9pbmRleC5ydW4nO1xuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xuaW1wb3J0IExvb2t1cENvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL2xvb2t1cC9sb29rdXAuY29udHJvbGxlcic7XG5pbXBvcnQgUmVzdWx0c0NvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb250cm9sbGVyJztcbmltcG9ydCBWZWhpY2xlSW5mb0NvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL3ZlaGljbGVJbmZvL3ZlaGljbGVJbmZvLmNvbnRyb2xsZXInO1xuaW1wb3J0IFJlc3VsdENvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuY29udHJvbGxlcic7XG5pbXBvcnQgSW1hZ2VzQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2VzL2ltYWdlcy5jb250cm9sbGVyJztcbmltcG9ydCBDb250ZW50Q29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbnRyb2xsZXInO1xuaW1wb3J0IENoZWNrb3V0Q29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29udHJvbGxlcic7XG5cbmltcG9ydCBMb29rdXBEaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2xvb2t1cC9sb29rdXAuZGlyZWN0aXZlJztcbmltcG9ydCBSZXN1bHRzRGlyZWN0aXZlIGZyb20gJy4vY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuZGlyZWN0aXZlJztcbmltcG9ydCBWZWhpY2xlSW5mb0RpcmVjdGl2ZSBmcm9tICcuL2NvbXBvbmVudHMvdmVoaWNsZUluZm8vdmVoaWNsZUluZm8uZGlyZWN0aXZlJztcbmltcG9ydCBSZXN1bHREaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuZGlyZWN0aXZlJztcbmltcG9ydCBJbWFnZXNEaXJlY3RpdmUgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlcy9pbWFnZXMuZGlyZWN0aXZlJztcbmltcG9ydCBDb250ZW50RGlyZWN0aXZlIGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCBDaGVja291dERpcmVjdGl2ZSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuZGlyZWN0aXZlJztcblxuaW1wb3J0IExvb2t1cFNlcnZpY2UgZnJvbSAnLi9jb21wb25lbnRzL2xvb2t1cC9sb29rdXAuc2VydmljZSc7XG5pbXBvcnQgUmVzdWx0U2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC5zZXJ2aWNlJztcblxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdwcm9kdWN0V2lkZ2V0JywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ1JvdXRlJywgJ25nTWF0ZXJpYWwnXSlcblxuICAuY29uZmlnKGNvbmZpZylcblxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcblxuICAucnVuKHJ1bkJsb2NrKVxuXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignTG9va3VwQ29udHJvbGxlcicsIExvb2t1cENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdSZXN1bHRzQ29udHJvbGxlcicsIFJlc3VsdHNDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignVmVoaWNsZUluZm9Db250cm9sbGVyJywgVmVoaWNsZUluZm9Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignUmVzdWx0Q29udHJvbGxlcicsIFJlc3VsdENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdJbWFnZXNDb250cm9sbGVyJywgSW1hZ2VzQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ0NvbnRlbnRDb250cm9sbGVyJywgQ29udGVudENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdDaGVja291dENvbnRyb2xsZXInLCBDaGVja291dENvbnRyb2xsZXIpXG5cbiAgLmRpcmVjdGl2ZSgnbG9va3VwJywgTG9va3VwRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdyZXN1bHRzJywgUmVzdWx0c0RpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgndmVoaWNsZScsIFZlaGljbGVJbmZvRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdyZXN1bHQnLCBSZXN1bHREaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2ltYWdlcycsIEltYWdlc0RpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnY29udGVudERpcmVjdGl2ZScsIENvbnRlbnREaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2NoZWNrb3V0JywgQ2hlY2tvdXREaXJlY3RpdmUpXG5cbiAgLnNlcnZpY2UoJ0xvb2t1cFNlcnZpY2UnLCBMb29rdXBTZXJ2aWNlKVxuICAuc2VydmljZSgnUmVzdWx0U2VydmljZScsIFJlc3VsdFNlcnZpY2UpXG4gIC5zZXJ2aWNlKCdDb25zdGFudHMnLCBDb25zdGFudHMpO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanNcbiAqKi8iLCJudWxsXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzBcbiAqKi8iLCJmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvN1xuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNVxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvM1xuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNFxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNlxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMlxuICoqLyIsImZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHJvdXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHJvdXRlUHJvdmlkZXJcbiAgICAud2hlbignLycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuICAgIH0pXG4gICAgLm90aGVyd2lzZSh7XG4gICAgICByZWRpcmVjdFRvOiAnLydcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bkJsb2NrO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJ1bi5qc1xuICoqLyIsImNsYXNzIE1haW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbGxlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOFxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOVxuICoqLyIsImNsYXNzIExvb2t1cENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJHNjb3BlLCAkcm9vdFNjb3BlLCBMb29rdXBTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgICRzY29wZS52ZWhpY2xlID0ge307XG5cbiAgICBMb29rdXBTZXJ2aWNlLmNhdGVnb3JpZXMoKS50aGVuKChyZXNwKSA9PiB7XG5cdFx0JHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwLmRhdGE7XG4gICAgfSwgKGVycikgPT4ge1xuXHRcdCRyb290U2NvcGUuZXJyb3IgPSBlcnI7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUudXBkYXRlQ2F0ZWdvcnkgPSAoY2F0KSA9Pntcblx0XHQkc2NvcGUuY2F0ZWdvcnkgPSBjYXQ7XG5cdFx0Z2V0VmVoaWNsZSgkc2NvcGUuY2F0ZWdvcnkpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlWWVhciA9ICh5ZWFyKSA9Pntcblx0XHQkc2NvcGUudmVoaWNsZS55ZWFyID0geWVhcjtcblx0XHRnZXRWZWhpY2xlKCRzY29wZS5jYXRlZ29yeSwgJHNjb3BlLnZlaGljbGUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlTWFrZSA9IChtYWtlKSA9Pntcblx0XHQkc2NvcGUudmVoaWNsZS5tYWtlID0gbWFrZTtcblx0XHRnZXRWZWhpY2xlKCRzY29wZS5jYXRlZ29yeSwgJHNjb3BlLnZlaGljbGUpO1xuICAgIH07XG5cblx0JHNjb3BlLnVwZGF0ZU1vZGVsID0gKG1vZGVsKSA9Pntcblx0XHQkc2NvcGUudmVoaWNsZS5tb2RlbCA9IG1vZGVsO1xuXHRcdGdldFZlaGljbGUoJHNjb3BlLmNhdGVnb3J5LCAkc2NvcGUudmVoaWNsZSk7XG4gICAgfTtcblxuICAgICRzY29wZS51cGRhdGVTdHlsZSA9IChzdHlsZSkgPT57XG5cdFx0JHNjb3BlLnZlaGljbGUuc3R5bGUgPSBzdHlsZTtcblx0XHRnZXRWZWhpY2xlKCRzY29wZS5jYXRlZ29yeSwgJHNjb3BlLnZlaGljbGUpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0VmVoaWNsZSA9IChjYXQsIHZlaGljbGUpID0+IHtcblx0XHRMb29rdXBTZXJ2aWNlLnZlaGljbGUoY2F0LCB2ZWhpY2xlKS50aGVuKChyZXNwKSA9PiB7XG5cdFx0XHQkc2NvcGUueWVhcnMgPSByZXNwLmRhdGEuYXZhaWxhYmxlX3llYXJzO1xuXHRcdFx0JHNjb3BlLm1ha2VzID0gcmVzcC5kYXRhLmF2YWlsYWJsZV9tYWtlcztcblx0XHRcdCRzY29wZS5tb2RlbHMgPSByZXNwLmRhdGEuYXZhaWxhYmxlX21vZGVscztcblx0XHRcdCRzY29wZS5zdHlsZXMgPSByZXNwLmRhdGEuYXZhaWxhYmxlX3N0eWxlcztcblx0XHRcdCRzY29wZS5wYXJ0cyA9IHJlc3AuZGF0YS5wYXJ0cztcblx0XHR9LCAoZXJyKSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLmVycm9yID0gZXJyO1xuXHRcdH0pO1xuICAgIH07XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9va3VwQ29udHJvbGxlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2xvb2t1cC9sb29rdXAuY29udHJvbGxlci5qc1xuICoqLyIsImNsYXNzIFJlc3VsdHNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzQ29udHJvbGxlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb250cm9sbGVyLmpzXG4gKiovIiwiY2xhc3MgVmVoaWNsZUluZm9Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWhpY2xlSW5mb0NvbnRyb2xsZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy92ZWhpY2xlSW5mby92ZWhpY2xlSW5mby5jb250cm9sbGVyLmpzXG4gKiovIiwiY2xhc3MgUmVzdWx0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkc2NvcGUsICRyb290U2NvcGUsIFJlc3VsdFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIGNvbnNvbGUubG9nKCdJIGFtIGEgcmVzdWx0IGNvbnRyb2xsZXInKTtcbiAgICBSZXN1bHRTZXJ2aWNlLnBhcnQoKS50aGVuKChyZXNwKSA9PntcbiAgICBcdCRzY29wZS5wYXJ0ID0gcmVzcC5kYXRhO1xuICAgIFx0Y29uc29sZS5sb2coJHNjb3BlLnBhcnQpO1xuICAgIH0sIChlcnIpID0+e1xuICAgIFx0JHJvb3RTY29wZS5lcnJvciA9IGVycjtcbiAgICB9KTtcbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRDb250cm9sbGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC5jb250cm9sbGVyLmpzXG4gKiovIiwiY2xhc3MgSW1hZ2VzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzQ29udHJvbGxlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2ltYWdlcy9pbWFnZXMuY29udHJvbGxlci5qc1xuICoqLyIsImNsYXNzIExvb2t1cENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvb2t1cENvbnRyb2xsZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29udHJvbGxlci5qc1xuICoqLyIsImNsYXNzIENoZWNrb3V0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRDb250cm9sbGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29udHJvbGxlci5qc1xuICoqLyIsImNsYXNzIExvb2t1cERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICBzY29wZToge1xuICAgICAgICAgIHZhbDogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9sb29rdXAvbG9va3VwLmh0bWwnLFxuICAgICAgbGluazogbGlua0Z1bmMsXG4gICAgICBjb250cm9sbGVyOiAnTG9va3VwQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdsYydcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgbGMpIHtcbiAgICAgIC8vIHNjb3BlLiR3YXRjaCgndmFsJyxmdW5jdGlvbihuLCBvKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnKVxuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKG8pO1xuICAgICAgLy8gfSk7XG5cbiAgICB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb29rdXBEaXJlY3RpdmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9sb29rdXAvbG9va3VwLmRpcmVjdGl2ZS5qc1xuICoqLyIsImNsYXNzIFJlc3VsdHNEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgICAgbGluazogbGlua0Z1bmMsXG4gICAgICBjb250cm9sbGVyOiAnUmVzdWx0c0NvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAnbGMnXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGxjKSB7XG4gICAgIFxuXG4gICAgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0c0RpcmVjdGl2ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5kaXJlY3RpdmUuanNcbiAqKi8iLCJjbGFzcyBWZWhpY2xlSW5mb0RpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICBzY29wZToge1xuICAgICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICAgIGNvbnRyb2xsZXI6ICdWZWhpY2xlSW5mb0NvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAnbGMnXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGxjKSB7XG4gICAgIFxuXG4gICAgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVoaWNsZUluZm9EaXJlY3RpdmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy92ZWhpY2xlSW5mby92ZWhpY2xlSW5mby5kaXJlY3RpdmUuanNcbiAqKi8iLCJjbGFzcyBSZXN1bHREaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0Lmh0bWwnLFxuICAgICAgbGluazogbGlua0Z1bmMsXG4gICAgICBjb250cm9sbGVyOiAnUmVzdWx0Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdsYydcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgbGMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJIGFtIGEgZGlyZWN0aXZlIEkgc3dlYXInKTtcblxuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdERpcmVjdGl2ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuZGlyZWN0aXZlLmpzXG4gKiovIiwiY2xhc3MgSW1hZ2VzRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBsZXQgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICAgIGxpbms6IGxpbmtGdW5jLFxuICAgICAgY29udHJvbGxlcjogJ0ltYWdlc0NvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAnbGMnXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGxjKSB7XG4gICAgIFxuXG4gICAgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzRGlyZWN0aXZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2VzL2ltYWdlcy5kaXJlY3RpdmUuanNcbiAqKi8iLCJjbGFzcyBDb250ZW50RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBsZXQgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICAgIGxpbms6IGxpbmtGdW5jLFxuICAgICAgY29udHJvbGxlcjogJ0NvbnRlbnRDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ2xjJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBsYykge1xuICAgICBcblxuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnREaXJlY3RpdmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuZGlyZWN0aXZlLmpzXG4gKiovIiwiY2xhc3MgQ2hlY2tvdXREaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgICAgbGluazogbGlua0Z1bmMsXG4gICAgICBjb250cm9sbGVyOiAnQ2hlY2tvdXRDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ2xjJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBsYykge1xuICAgICBcblxuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0RGlyZWN0aXZlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuZGlyZWN0aXZlLmpzXG4gKiovIiwiY2xhc3MgTG9va3VwU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yICgkaHR0cCwgQ29uc3RhbnRzKSB7XG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xuXHRcdHRoaXMuJGRvbWFpbiA9IENvbnN0YW50cy5BUElVUkw7XG5cdFx0dGhpcy4ka2V5ID0gQ29uc3RhbnRzLkFQSUtFWTtcblx0fVxuXG5cdHZlaGljbGUoY29sbGVjdGlvbiwgdmVoaWNsZSl7XG5cdFx0aWYgKHZlaGljbGUgPT09IG51bGwgfHwgdmVoaWNsZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2ZWhpY2xlID0ge307XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLiRodHRwKHtcblx0XHRcdHVybDogdGhpcy4kZG9tYWluICsgJy92ZWhpY2xlL21vbmdvJyxcblx0XHRcdG1ldGhvZDoncG9zdCcsXG5cdFx0XHRwYXJhbXM6e1xuXHRcdFx0XHQna2V5JzogdGhpcy4ka2V5LFxuXHRcdFx0XHQnY29sbGVjdGlvbic6IGNvbGxlY3Rpb24sXG5cdFx0XHRcdCd5ZWFyJzogdmVoaWNsZS55ZWFyLFxuXHRcdFx0XHQnbWFrZSc6IHZlaGljbGUubWFrZSxcblx0XHRcdFx0J21vZGVsJzogdmVoaWNsZS5tb2RlbCxcblx0XHRcdFx0J3N0eWxlJzogdmVoaWNsZS5zdHlsZVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y2F0ZWdvcmllcygpe1xuXHRcdHJldHVybiB0aGlzLiRodHRwKHtcblx0XHRcdHVybDogdGhpcy4kZG9tYWluICsgJy92ZWhpY2xlL21vbmdvL2NvbHMnLFxuXHRcdFx0bWV0aG9kOidnZXQnLFxuXHRcdFx0cGFyYW1zOntcblx0XHRcdFx0J2tleSc6IHRoaXMuJGtleVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cblxuTG9va3VwU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsJ0NvbnN0YW50cyddO1xuXG5leHBvcnQgZGVmYXVsdCBMb29rdXBTZXJ2aWNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2pzaGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbG9va3VwL2xvb2t1cC5zZXJ2aWNlLmpzXG4gKiovIiwiY2xhc3MgUmVzdWx0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkaHR0cCwgQ29uc3RhbnRzKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuJGRvbWFpbiA9IENvbnN0YW50cy5BUElVUkw7XG4gICAgdGhpcy4ka2V5ID0gQ29uc3RhbnRzLkFQSUtFWTtcbiAgfVxuXG5cdHBhcnQoKXtcblx0XHRyZXR1cm4gdGhpcy4kaHR0cCh7XG5cdFx0XHR1cmw6IHRoaXMuJGRvbWFpbiArICcvcGFydC8yMDMwNDUnLFxuXHRcdFx0bWV0aG9kOidnZXQnLFxuXHRcdFx0cGFyYW1zOntcblx0XHRcdFx0J2tleSc6IHRoaXMuJGtleVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cblJlc3VsdFNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCdDb25zdGFudHMnXTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0U2VydmljZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9qc2hpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuc2VydmljZS5qc1xuICoqLyIsImNsYXNzIENvbnN0YW50c3tcblx0Y29uc3RydWN0b3IoKXtcblx0XHQvLyB0aGlzLkFQSUtFWSA9JzkyZmU5NTFjLTJjYTYtMTFlNC04NzU4LTQyMDEwYWYwZmQ3OSc7XG5cdFx0Ly8gdGhpcy5BUElVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJztcblxuXHRcdFxuXHRcdHRoaXMuQVBJVVJMID0gJ2h0dHA6Ly9hcmllc2F1dG9hcGkuY3VydG1mZy5jb20nO1xuXHRcdHRoaXMuQVBJS0VZID0gJzg4M2Q0MDQ2LThiOTYtMTFlNC05NDc1LTQyMDEwYWYwMGQ0ZSc7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vanNoaW50LWxvYWRlciEuL3NyYy9hcHAvY29uc3RhbnRzL2NvbnN0YW50cy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=