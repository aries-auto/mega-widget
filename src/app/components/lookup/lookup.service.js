class LookupService {
  constructor ($http) {
    this.$http = $http;
    
  }

 //  findGroups(group){
	// 	return this.$http({
	// 		url: this.$domain + '/group/find',
	// 		method:'post',
	// 		data:group,
	// 		headers:{
	// 			'Authorization':' bearer '+this.user.auth.token
	// 		}
	// 	});
	// }
}

LookupService.$inject = ['$http'];

export default LookupService;
