"use strict";

var _translator = require("./translator.js");

document.getElementById("myText").addEventListener("change", function () {
  var input = document.getElementById("myText").value;
  var translation = (0, _translator.translateToMorse)(input);
  document.getElementById("morseCode").innerHTML = translation;
});