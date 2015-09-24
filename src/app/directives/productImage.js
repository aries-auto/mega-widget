// product-image directive
//
// This directive will take a product from ngModel
// and parse the digitalAssets array looking for
// the first image whose height is less than the
// defined maxHeight.
//
// Output: <img src="${image.path} alt="${ngModel.brand.name} ${ngModel.partId} ${ngModel.shortDesc}">

class ProductImage{

    constructor($compile){

        return{
            require: 'ngModel',
            replace: true,
            restrict: 'AE',
            scope:{
                ngModel: '='
            },
        	link:function(scope, elem, attrs){
                let compare = (a, b) => {
                    if(a.sort < b.sort){
                        return -1;
                    }else if(a.sort > b.sort){
                        return 1;
                    }
                    return 0;
                };

        		scope.$watch(scope.ngModel,function(){
                    let prod = scope.ngModel;
                    if(!angular.isDefined(prod)){
                        return;
                    }

                    let img;

                    if(prod.images === undefined || prod.images === null){
                        return;
                    }

                    prod.images = prod.images.sort(compare);
                    for (let i = 0; i < prod.images.length; i++){
                        if(attrs.maxHeight === '' || prod.images[i].height === undefined){
                            continue;
                        }
                        for (let j = 0; j < prod.images[i].height; j++){
                            if(prod.images[i].height <= attrs.maxHeight){
                                img = prod.images[i];
                                break;
                            }
                        }
                        if(angular.isDefined(img) && img.path !== undefined){
                            break;
                        }
                    }
                    if(angular.isDefined(img) && angular.isDefined(img.path)){
                        elem.html(`<img src= "${img.path.Scheme}://${img.path.Host}${img.path.Path}" alt="${prod.id} ${prod.short_description}">`);
                        $compile(elem)(scope);
                    }
        		});
        	}
        };
    }
}

ProductImage.$inject = ['$compile'];

export default ProductImage;
