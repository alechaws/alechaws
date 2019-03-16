var weatherObject =  new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=85208,us&appid=6eac7e39498499a5967dcc07fc168e3f&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo= JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);
    console.log("Suggma")


    




//document.write(Math.round(chill).toFixed(1));
}