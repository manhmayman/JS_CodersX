/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
 var axios = require('axios');
 function axiosPromise(url){
 	return new Promise(function(resolve,reject){
 		axios.get(url)
 		.then(function(response){
 			console.log(response);
 		})
 		.catch(function(error){
 			console.log(error);
 		})
 	});
 }
 Promise.all([
 	axiosPromise('https://jsonplaceholder.typicode.com/todos/1'),
 	axiosPromise('https://jsonplaceholder.typicode.com/todos/2'),
 	axiosPromise('https://jsonplaceholder.typicode.com/todos/3')
]);