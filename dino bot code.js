/// to start: 
var original = Runner.prototype.gameOver
Runner.prototype.gameOver = function(){}

/// to stop:
Runner.prototype.gameOver = original

/// to set speed:
Runner.instance_.setSpeed(1000)

/// reference link:
/// https://mathewsachin.github.io/blog/2016/11/05/chrome-dino-hack.html
