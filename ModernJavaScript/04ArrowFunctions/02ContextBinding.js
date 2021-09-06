var Ball = function(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.dt = 25;
  var self = this;
  setInterval(function(){
    self.x += vx;
    self.y += vy;
    console.log(self.x, self.y);
  }, this.dt);
}

// var ball = new Ball(0,0, 10000, 10000);


var Ball = function(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.dt = 25;
  setInterval(function(){
    this.x += this.vx;
    this.y += this.vy;
    console.log(this.x, this.y);
  }.bind(this), this.dt);
}

// var ball = new Ball(0,0, 10000, 10000);

var Ball = function(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.dt = 25;
  setInterval(() => {
    this.x += this.vx;
    this.y += this.vy;
    console.log(this.x, this.y);
  }, this.dt);
}


var ball = new Ball(0,0, 10000, 10000);
