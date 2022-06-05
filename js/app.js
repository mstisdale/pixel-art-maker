// Setup canvas and get width and height values

var PixelCanvas = {};

PixelCanvas.getInput = function () {
    var height = document.querySelector("#inputHeight");
    var width = document.querySelector("#inputWidth");
    const button = document.querySelector("input[type=submit]");

    button.addEventListener("click", function (event) {
        event.preventDefault();
        var widthValue = width.value;
        var heightValue = height.value;
        PixelCanvas.makeGrid(widthValue, heightValue);
    });
};

// Function that builds canvas using makeGrid and adds colors to grid

PixelCanvas.makeGrid = function (width, height) {

    const table = document.getElementById("pixelCanvas");
    table.innerHTML = "";
    var color = document.querySelector("#colorPicker");
    var i = 0;
    while (i < height) {
        var tr = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            var td = document.createElement("td");
            td.classList.add("grid");
            tr.appendChild(td);
        }
        table.appendChild(tr);
        i++;
    }

    table.addEventListener("click", function (event) {
        if (event.target.tagName === "TD") {
            var td = event.target;
            td.style.backgroundColor = color.value;
        }
    });

  
};

// Calls function

PixelCanvas.getInput();