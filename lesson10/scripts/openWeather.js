var weatherObject =  new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=5604473&appid=6eac7e39498499a5967dcc07fc168e3f&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo= JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

    //document.getElementById('current').innerHTML=weatherInfo.main.temp_min;
    document.getElementById('low').innerHTML=weatherInfo.main.temp_min;
    document.getElementById('high').innerHTML=weatherInfo.main.temp_max;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+iconcode+".png";
    document.getElementById('weather_icon').src = icon_path;

    var tempF= parseFloat(document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp);
    var speed= parseFloat(document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed);
    
    var chill= 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));

    document.getElementById("windChill").innerHTML= Math.round(chill).toFixed(1);
}
