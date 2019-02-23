var d = new Date() ;

var dayArray= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var monthArray= ["January","February","March","April", "May","June","July","August","September","October","November","December"];

var dayOfWeek= dayArray[d.getDay()];
var day= d.getDate();
var month= monthArray[d.getMonth()];
var year= d.getFullYear() ;

var today=  dayOfWeek + "," + day  + " " +  month  + " " + year;

document.write(today)