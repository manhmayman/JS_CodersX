function circle(x,y,radius){
  this.x = x;
  this.y = y;
  this.radius = radius;
};
circle.prototype.isOverlapped = function(cir){
 if(
   (this.radius+cir.radius)*(this.radius+cir.radius) < (this.x-cir.x)*(this.x-cir.x)+(this.y-cir.y)*(this.y-cir.y)
 ){
   return 1;
 }
 else {
   if((this.radius+cir.radius)*(this.radius+cir.radius) ==(this.x-cir.x)*(this.x-cir.x)+(this.y-cir.y)*(this.y-cir.y)){
     return 0;
   }
   else{
     return -1
     }
 }
};
module.exports = circle;