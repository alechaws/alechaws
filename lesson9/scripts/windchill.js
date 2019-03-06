var tempF= parseFloat(document.getElementById("temperature").innerHTML);
var speed= parseFloat(document.getElementById("windSpeed").innerHTML);

var chill= 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));

document.write(Math.round(chill).toFixed(1));