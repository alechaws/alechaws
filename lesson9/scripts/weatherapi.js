var weatherRequest =  new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?id=524901&appid=6eac7e39498499a5967dcc07fc168e3f&units=imperial',true);

weatherRequest.send();

weatherRequest.onload = function(){
    var weatherInfo= JSON.parse(weatherRequest.responseText)
    console.log(weatherInfo);

    //document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    //document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    //var iconcode = weatherInfo.weather[0].icon;
    //var icon_path= "http://openweathermap.org/img/w/"+iconcode+".png";
    //document.getElementById('weather_icon').src = icon_path;
    
}
