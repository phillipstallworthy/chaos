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

      var depth2 = three((side/4), depth1, "red");

      var depth3 = three((side/8), depth2, "green");

      //var depth4 = three((side/16), depth3, "purple");

      //down((side / 32) + margin, org_depth + margin, (side / 32), "orange");

      //down((side / 64) + margin, org_depth + margin, (side / 64), "white");

      /*
      Draw three triagles around a triagle
      side - the width of this triangle
      previous depth - the depth of the triagnel we are drawing triangles around
        required for positioning the top one
      colour - colour of triangles
      return - the depth of the new triangles.
      */

      function three(x, y, side, previous_depth, colour ) {
        //bottom left
        down(x - side, y, side, colour);
        //bottom right
        down(x + side, y, side, colour);
        //top
        return down(x, y - previous_depth, side, colour);
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
