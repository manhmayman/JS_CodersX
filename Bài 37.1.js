/**
* Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.*/
function sum(x) {
// viết code ở đây.
var i = 1,sum =0;
while(i < x){
	sum = sum +i;
	i+=2;
}
}
console.log(sum);

