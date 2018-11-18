window.onload = function () {

  init();

  function init() {

    chaos.init();
    //chaos.clear("green");

    var margin = 25;

    //twoTriangles();
    fiveTriangles();

    function twoTriangles() {
      var side = sideCalc();
      var depth = up((side / 2) + margin, margin, side);

      down((side / 2) + margin, depth + margin,
        (side / 2));

    }

    //colours = []

    function fiveTriangles() {
      var side = sideCalc();
      var depth = up((side / 2) + margin, margin, side, "blue");

      var depth1 = down((side / 2) + margin, depth + margin,(side / 2), "yellow");
 
      var depth2 = three();

      down((side / 8) + margin, depth + margin, (side / 8), "green");
      down((side / 8) * 3 + margin, depth + margin, (side / 8), "green");
      down((side / 4) + margin, (depth - depth2) + margin, (side / 8), "green");

      down((side / 16) + margin, depth + margin, (side / 16), "purple");

      down((side / 32) + margin, depth + margin, (side / 32), "orange");

      down((side / 64) + margin, depth + margin, (side / 64), "white");


      function three(size, colour) {
        down((side / 4) + margin, depth + margin, (side / 4), "red");
        down((side / 4) * 3 + margin, depth + margin, (side / 4), "red");
        var depth2 = down((side / 2) + margin, depth1 + margin, (side / 4), "red");
        return depth2;
      }
    }

    // draw an upside down equilateral triangle
    // path starts at x,y, bottom  
    function down(x, y, side, colour) {
      var half = side / 2;
      var angle = (Math.PI / 180) * 60;
      var depth = Math.cos(angle / 2) * side;

      console.log("Down");
      console.log("depth = " + depth);
      console.log("side = " + side);
      console.log("x = " + x);
      console.log("y = " + y);
      console.log(" ");

      chaos.context.beginPath();
      chaos.context.moveTo(x, y);

      chaos.context.lineTo(x - half, y - depth);
      chaos.context.lineTo(x + half, y - depth);

      chaos.context.closePath();
      chaos.context.stroke();
      chaos.context.fillStyle = colour;
      chaos.context.fill();

      return depth;
    }

    // draw an equilateral triangle
    // path starts at x,y, top middle 
    function up(x, y, side, colour) {
      var half = side / 2;
      var angle = (Math.PI / 180) * 60;
      var depth = Math.cos(angle / 2) * side;

      console.log("Up");
      console.log("depth = " + depth);
      console.log("side = " + side);
      console.log("x = " + x);
      console.log("y = " + y);
      console.log(" ");

      chaos.context.beginPath();
      chaos.context.moveTo(x, y);

      chaos.context.lineTo(x + half, y + depth);
      chaos.context.lineTo(x - half, y + depth);

      //chaos.context.lineTo(x, y);
      chaos.context.closePath();
      chaos.context.stroke();
      chaos.context.fillStyle = colour;
      chaos.context.fill();

      return depth;
    }

    // 50 less that the smallest dimension of the canvas
    function sideCalc() {
      if (window.innerWidth < window.innerHeight) {
        return window.innerWidth - (margin * 2);
      } else {
        return window.innerHeight - (margin * 2);
      }
    }
  }
}
