var axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
	console.log(response.data);
}).catch(function(err){
	console.log(err);
});
axios.get('https://jsonplaceholder.typicode.com/todos/2').then(function(response){
	console.log(response.data);
}).catch(function(err){
	console.log(err);
});