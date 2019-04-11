var weatherObject2 =  new XMLHttpRequest();
weatherObject2.open('GET','//api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=6eac7e39498499a5967dcc07fc168e3f&units=imperial',true);

weatherObject2.send();

weatherObject2.onload = function(){
    var weatherInfo2= JSON.parse(weatherObject2.responseText)
    console.log(weatherInfo2);

    document.getElementById('low').innerHTML=weatherInfo2.main.temp_min;
    document.getElementById('high').innerHTML=weatherInfo2.main.temp_max;
    document.getElementById('currentTemp').innerHTML=weatherInfo2.main.temp;

    var iconcode = weatherInfo2.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+iconcode+".png";
    document.getElementById('weather_icon').src = icon_path;

}
