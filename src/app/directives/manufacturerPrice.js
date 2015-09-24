// product-image directive
//
// This directive will take a product from ngModel
// and parse the digitalAssets array looking for
// the first image whose height is less than the
// defined maxHeight.
//
// Output: <img src="${image.path} alt="${ngModel.brand.name} ${ngModel.partId} ${ngModel.shortDesc}">

class ManufacturerPrice{

    constructor($compile){

        return{
            require: 'ngModel',
            replace: true,
            restrict: 'AE',
            scope:{
                ngModel: '='
            },
        	link:function(scope, elem){
        		scope.$watch(scope.ngModel,function(){
                    let prod = scope.ngModel;
                    if(!angular.isDefined(prod)){
                        return;
                    }

                    let msrp;

                    if(prod.pricing === undefined || prod.pricing === null){
                        return;
                    }

                    for (let i = 0; i < prod.pricing.length; i++){
                        for (let i = 0; i < prod.pricing.length; i++){
                            if (prod.pricing[i].type === 'List'){
                                msrp = prod.pricing[i].price;
                                break;
                            }
                        }
                        if(angular.isDefined(msrp) && msrp !== undefined){
                            break;
                        }
                    }
                    if(angular.isDefined(msrp) && angular.isDefined(msrp)){
                        elem.html(`<div>$${msrp}</div>`);
                        $compile(elem)(scope);
                    }
        		});
        	}
        };
    }
}

ManufacturerPrice.$inject = ['$compile'];

export default ManufacturerPrice;
