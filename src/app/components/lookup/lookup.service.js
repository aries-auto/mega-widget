class LookupService {
	constructor ($http, Constants) {
		this.$http = $http;
		this.$domain = Constants.APIURL;
		this.$key = Constants.APIKEY;
	}

	vehicle(collection, vehicle){
		if (vehicle === null || vehicle === undefined) {
			vehicle = {};
		}
		return this.$http({
			url: this.$domain + '/vehicle/mongo',
			method:'post',
			params:{
				'key': this.$key,
				'collection': collection,
				'year': vehicle.year,
				'make': vehicle.make,
				'model': vehicle.model,
				'style': vehicle.style
			}
		});
	}

	categories(){
		return this.$http({
			url: this.$domain + '/vehicle/mongo/cols',
			method:'get',
			params:{
				'key': this.$key
			}
		});
	}

}

LookupService.$inject = ['$http','Constants'];

export default LookupService;
