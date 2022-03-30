var isResizing = false;

(function() {
  var container = document.getElementById("container"),
    left = document.getElementById("left_panel"),
    right = document.getElementById("right_panel"),
    handle = document.getElementById("drag");

  handle.onmousedown = function(e) {
    isResizing = true;
  };

  document.onmousemove = function(e) {
    // we don't want to do anything if we aren't resizing.
    if (!isResizing) {
      return;
    }

    var offsetRight = container.clientWidth - (e.clientX - container.offsetLeft);

    left.style.right = offsetRight + "px";
    right.style.width = offsetRight + "px";
  }

  document.onmouseup = function(e) {
    // stop resizing
    isResizing = false;
  }
})();



// code for json 

var jsonObj = {};
var jsonViewer = new JSONViewer();
document.querySelector("#json").appendChild(jsonViewer.getContainer());
// document.querySelector("#output").appendChild(jsonViewer.getContainer());



var loadJsonBtn = document.querySelector("textarea.load-json");
// var collapseBtn = document.querySelector("button.collapse");
// var maxlvlBtn = document.querySelector("button.maxlvl");

loadJsonBtn.addEventListener("click", function () {

   convention()

});

loadJsonBtn.addEventListener("keydown", function () {

    convention()

});

loadJsonBtn.addEventListener("keyup", function () {

    convention()

});


loadJsonBtn.addEventListener("change", function () {

    convention()

});

function convention(){
    
    var text = document.getElementById('output').value

    var data = "ok"
    try {
        JSON.parse(text);
    } catch (e) {
        data = "ERROR";
    }



    if (text == "") {
        jsonObj = "No Data Available"
        jsonViewer.showJSON(jsonObj);
    }
    else if (data == "ERROR") {
        jsonObj = "Wrong Format"
        jsonViewer.showJSON(jsonObj);
    }
    else {
        // document.getElementById("output").innerText = JSON.parse(text)
        jsonObj = JSON.parse(text)
        jsonViewer.showJSON(jsonObj);

    }
}

// collapseBtn.addEventListener("click", function() {
// 	jsonViewer.showJSON(jsonObj, null, 1);
// });

// maxlvlBtn.addEventListener("click", function() {
// 	jsonViewer.showJSON(jsonObj, 1);
// });