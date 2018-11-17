window.onload = function () {

  init();

  function init() {

    chaos.init();
    //chaos.clear("green");

    var margin = 25;

    //sixTriangles();
    twoTriangles();

    function twoTriangles() {
      var side = sideCalc();
      var depth = up((side / 2) + margin, margin, side);

      console.log("depth = " + depth);
      console.log("side = " + side);

      down((side / 2) + margin,depth + margin,
          (side / 2));

    }

    // Draw 
    function sixTriangles() {

      var side = sideCalc(), x = (side / 2) + margin, y = side + margin,
        yDelta = 10, sideDelta = 20, limit = 6;

      draw(x, y, side, yDelta, sideDelta, limit);

      //recursive drawing function
      function draw(x, y, side, yDelta, sideDelta, limit) {
        if (limit == 0) { return };
        console.log("x : " + x + "  y : "
          + y + "  side : " + side);
        down(x, y, side);
        limit--;
        draw(x, y - yDelta, side - sideDelta, yDelta, sideDelta, limit);
      };
    }


    // draw an upside down equilateral triangle
    // path starts at x,y, bottom  
    function down(x, y, side) {
      var half = side / 2;
      var angle = (Math.PI / 180) * 60;
      var depth = Math.cos(angle / 2) * side;

      chaos.context.moveTo(x, y);

      chaos.context.lineTo(x - half, y - depth);
      chaos.context.lineTo(x + half, y - depth);

      chaos.context.lineTo(x, y);
      chaos.context.stroke();

      return depth;
    }

    // draw an equilateral triangle
    // path starts at x,y, top middle 
    function up(x, y, side) {
      var half = side / 2;
      var angle = (Math.PI / 180) * 60;
      var depth = Math.cos(angle / 2) * side;

      chaos.context.moveTo(x, y);

      chaos.context.lineTo(x + half, y + depth);
      chaos.context.lineTo(x - half, y + depth);

      chaos.context.lineTo(x, y);
      chaos.context.stroke();

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
