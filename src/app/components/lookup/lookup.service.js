class LookupService {
  constructor ($http, Constants) {
    this.$http = $http;
    this.$domain = Constants.APIURL;
    this.$key = Constants.APIKEY;
  }

	vehicle(){
		return this.$http({
			url: this.$domain + '/vehicle',
			method:'post',
			params:{
				'key': this.$key
			}
		});
	}
}

LookupService.$inject = ['$http','Constants'];

export default LookupService;
