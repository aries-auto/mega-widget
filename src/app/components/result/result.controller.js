class ResultController {
  constructor ($scope, $rootScope, $sce, ResultService) {
    'ngInject';
    console.log('I am a result controller');
    ResultService.part().then((resp) =>{
    	$scope.part = resp.data;
    	console.log($scope.part);
    }, (err) =>{
    	$rootScope.error = err;
    });

   	$scope.getInstallSheet = function(){
  		if($scope.part === undefined || $scope.part.install_sheet === undefined){
  			return '';
  		}
  		if($scope.part === null || $scope.part.install_sheet === null){
  			return '';
  		}
  		return $sce.trustAsResourceUrl($scope.part.install_sheet.Scheme +'://'+$scope.part.install_sheet.Host+$scope.part.install_sheet.Path);
  	};

    $scope.renderHTML = function(content){
        return $sce.trustAsHtml(content);
    };

    $scope.getCategoryBrief = function(){
        if ($scope.part.content === undefined){
            return '';
        }
        for (var i = $scope.part.content.length - 1; i >= 0; i--) {
            var con = $scope.part.content[i];
            if(con.contentType.Type === 'CategoryBrief'){
                return con.text;
            }
        }
        return '';
    };
    $scope.getHTMLDesc = function(){
        if ($scope.part.content === undefined || $scope.part.content === null){
            return '';
        }
        for (var i = $scope.part.content.length - 1; i >= 0; i--) {
            var con = $scope.part.content[i];
            if(con.contentType.Type === 'HTMLDescription'){
                return con.text;
            }
        }
        return '';
    };
    $scope.getBullets = function(){
        var bulls = [];
        if ($scope.part.content === undefined){
            return bulls;
        }
        for (var i = $scope.part.content.length - 1; i >= 0; i--) {
            var con = $scope.part.content[i];
            if(con.contentType.Type === 'Bullet' && bulls.indexOf(con.text) === -1){
                bulls.push(con.text);
            }
        }
        return bulls;
    };
    $scope.getPrice = function(){
        if($scope.part.pricing === undefined || $scope.part.pricing === null){
          return '';
        }
        for (var i = $scope.part.pricing.length - 1; i >= 0; i--) {
            var pr = $scope.part.pricing[i];
            if(pr.type === 'List' && pr.price > 0){
                return '$'+pr.price;
            }
        }
        return '';
    };


  } // end constructor
}

export default ResultController;
