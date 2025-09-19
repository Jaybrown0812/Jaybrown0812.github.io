$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 700, 20, 290);
    createPlatform(300, 600, 50, 50, "purple");
    createPlatform(600, 500, 20, 290);
    createPlatform(1350, 400, 50, 50, "green");
    createPlatform(700, 600, 50, 50, "orange");
    createPlatform(800, 600, 50, 50, "blue");
    createPlatform(900, 600, 50, 50, "black");
    createPlatform(1000, 600, 50, 50, "yellow");
    createPlatform(600, 500, 20, 290);
    createPlatform(400, 300, 200, 20, "blue", 300, 500, 1);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 700, 170, 0.5, 0.7);
    createCollectable("diamond", 600, 170, 0.5, 0.7);
    createCollectable("steve", 400, 170, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("bottom", 600, 2000);
    createCannon("right", 300, 2000);
    createCannon("left", 300, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
