/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
window.onload = function(){
    var videoInput = document.getElementById('inputVideo');
    var canvasInput = document.getElementById('inputCanvas');

    var htracker = new headtrackr.Tracker();
    htracker.init(videoInput, canvasInput);
    htracker.start();
    
    document.addEventListener('headtrackingEvent', function(event){
        if(event.z >= 60){
            document.getElementById("parrafo").style.fontSize = "40px";
            document.getElementById("parrafo").innerHTML = "estás lejos de tu webcam";
        }
        if(event.z < 60){
            document.getElementById("parrafo").style.fontSize = "15px";
            document.getElementById("parrafo").innerHTML = "estás cerca de tu webcam";
        }
    });
}