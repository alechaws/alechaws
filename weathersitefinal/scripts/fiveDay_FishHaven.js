var weatherObject =  new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/forecast?zip=83287,us&appid=6eac7e39498499a5967dcc07fc168e3f&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo= JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

    //Day+1= list[3].xxx
    var day0= weatherInfo.list[3].dt_txt;
    var parse0= day0.substr(5,5)
    document.getElementById('day0').innerHTML=parse0;
    document.getElementById('condition0').innerHTML=weatherInfo.list[3].weather["0"].main;
    document.getElementById('fivelow0').innerHTML=weatherInfo.list[3].main.temp_min;
    document.getElementById('fivehigh0').innerHTML=weatherInfo.list[3].main.temp_max;
    document.getElementById('wind0').innerHTML=weatherInfo.list[3].wind.speed;

    //Day+2= list[11]
    var day1= weatherInfo.list[11].dt_txt;
    var parse1= day1.substr(5,5)
    document.getElementById('day1').innerHTML=parse1;
    document.getElementById('condition1').innerHTML=weatherInfo.list[11].weather["0"].main;
    document.getElementById('fivelow1').innerHTML=weatherInfo.list[11].main.temp_min;
    document.getElementById('fivehigh1').innerHTML=weatherInfo.list[11].main.temp_max;
    document.getElementById('wind1').innerHTML=weatherInfo.list[11].wind.speed;

   //Day+3= list[19]
   var day2= weatherInfo.list[19].dt_txt;
   var parse2= day2.substr(5,5)
   document.getElementById('day2').innerHTML=parse2;
   document.getElementById('condition2').innerHTML=weatherInfo.list[19].weather["0"].main;
   document.getElementById('fivelow2').innerHTML=weatherInfo.list[19].main.temp_min;
   document.getElementById('fivehigh2').innerHTML=weatherInfo.list[19].main.temp_max;
   document.getElementById('wind2').innerHTML=weatherInfo.list[19].wind.speed;

   //Day+4= list[19]
   var day3= weatherInfo.list[27].dt_txt;
   var parse3= day3.substr(5,5)
   document.getElementById('day3').innerHTML=parse3;
   document.getElementById('condition3').innerHTML=weatherInfo.list[27].weather["0"].main;
   document.getElementById('fivelow3').innerHTML=weatherInfo.list[27].main.temp_min;
   document.getElementById('fivehigh3').innerHTML=weatherInfo.list[27].main.temp_max;
   document.getElementById('wind3').innerHTML=weatherInfo.list[27].wind.speed;

   //Day+4= list[35]
   var day4= weatherInfo.list[35].dt_txt;
   var parse4= day4.substr(5,5)
   document.getElementById('day4').innerHTML=parse4;
   document.getElementById('condition4').innerHTML=weatherInfo.list[35].weather["0"].main;
   document.getElementById('fivelow4').innerHTML=weatherInfo.list[35].main.temp_min;
   document.getElementById('fivehigh4').innerHTML=weatherInfo.list[35].main.temp_max;
   document.getElementById('wind4').innerHTML=weatherInfo.list[35].wind.speed;

}
