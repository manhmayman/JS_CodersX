var math = {
  add: function(x) {
    return x.reduce(function(a,b){
      return a+b;
    });
  }
};

module.exports = math;