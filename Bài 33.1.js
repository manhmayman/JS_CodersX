/**
* Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
*/
var arr =[1,2,3]
function max(arr) {
// your code here
var max=0;
for (var a of arr ){
	if (a>max){
	 return max = a;
	}
}
}