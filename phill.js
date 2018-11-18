window.onload = function () {

  init();

  function init() {

    chaos.init();

    var margin = 25;

    fiveTriangles();

    //colours = []

    function fiveTriangles() {
      var side = sideCalc();
      var org_depth = up((side / 2) + margin, margin, side, "blue");

      var depth1 = down((side / 2) + margin, org_depth + margin, (side / 2), "yellow");

      var depth2 = three(4, "red");

      down((side / 8) + margin, org_depth + margin, (side / 8), "green");
      down((side / 8) * 3 + margin, org_depth + margin, (side / 8), "green");
      down((side / 4) + margin, (org_depth - depth2) + margin, (side / 8), "green");

      down((side / 16) + margin, org_depth + margin, (side / 16), "purple");

      down((side / 32) + margin, org_depth + margin, (side / 32), "orange");

      down((side / 64) + margin, org_depth + margin, (side / 64), "white");

      /*
      Draw three triagles around a triagle
      devisor - devide the orgininal side by this
      colour - colour of the triagles
      return - the depth of the new triangles.
      */

      function three(devisor, colour, ) {
        down((side / devisor) + margin, org_depth + margin, (side / devisor), colour);
        down((side / devisor) * 3 + margin, org_depth + margin, (side / devisor), colour);
        var depth2 = down((side / 2) + margin, depth1 + margin, (side / devisor), colour);
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
