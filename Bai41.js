var request = require('request')
function load(url){
	return new Promise(function(resolve,reject){
		request(url, function(error, response, body){
			if (error !== null){
				reject(error);
			}
			else{
				resolve(body);
			}
		})
	});
}
load('https://jsonplaceholder.typicode.com/todos/1')
.then(function(body){
	console.log('Done',body);
});