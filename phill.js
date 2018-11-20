window.onload = function () {

  init();

  function init() {

    chaos.init();

    var margin = 25;
    // first large triable is level zero, 
    //2nd internal level 1, 3rd level starts populating around the previous
    // also used to select the colour
    var level = 0;
    var max_level = 5;
    colours = ["blue", "yellow", "red", "green", "orange", "purple", "white"];

    fiveTriangles();



    function fiveTriangles() {
      var side = sideCalc();
      
      //first large triangle upright triangle
      var up_depth = up((side / 2) + margin, margin, side, colours[level++]);


      // 2nd triangle
      var x = (side / 2) + margin;
      var y = up_depth + margin;
      var depth = down(x, y, (side / 2), colours[level]);

      //the populate the rest recursivly aroound the second one.
      three(x, y, (side / 4), depth, level);

      /*
      Draw three triagles around a triagle
      x,y - The locatino of the start of the previous triangle, 
        surrounding triables are calulated relative to this.
      side - the side length of surronding triangles
      depth - the depth of the triagnel we are drawing triangles around
        required for positioning the top one
      level - a count of the depth of recursion. - Don't go too deep Alice!
      return - the depth of the new triangles.
      */

      function three(x, y, side, depth, level) {
        level ++;

        //bottom left
        var depth = down(x - side, y, side, colours[level]);
        if (level <= max_level) {
          three(x - side, y, side / 2, depth, level);
        }

        //bottom right
        down(x + side, y, side, colours[level]);
        if (level <= max_level) {
          three(x + side, y, side / 2, depth, level);
        }

        //top
        down(x, y - depth, side, colours[level]);
        if (level <= max_level) {
          three(x, y - depth, side / 2, depth, level);
        }
        
        return depth;
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
