window.addEventListener("DOMContentLoaded", function() {

    // BABYLON Engine creation
    var canvas = document.getElementById('gameCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    // BABYLON Scene creation
    var scene = new BABYLON.Scene(engine);

    // Camera creation/setup
    var camera = new BABYLON.FreeCamera("camera",
        new BABYLON.Vector3(5, 5, -5),
        scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    // Ambient light
    var light = new BABYLON.HemisphericLight("light",
        new BABYLON.Vector3(0, 1, 0),
        scene);

    // cube (the node)
    var cube = BABYLON.Mesh.CreateBox("myBox", 1, scene);

    // rendering loop
    engine.runRenderLoop(function () {
       scene.render();
    });
}, false);