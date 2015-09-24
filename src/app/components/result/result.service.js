class ResultService {
  constructor ($http, Constants) {
    this.$http = $http;
    this.$domain = Constants.APIURL;
    this.$key = Constants.APIKEY;
  }

	part(){
		return this.$http({
			url: this.$domain + '/part/203045',
			method:'get',
			params:{
				'key': this.$key
			}
		});
	}
}

ResultService.$inject = ['$http','Constants'];

export default ResultService;
