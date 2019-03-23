 //URL that contains JSON File
 var section = document.querySelector('main');
 var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 var request = new XMLHttpRequest();
//Pointing REQUEST to correct URL and sennding GET request
 request.open('GET', requestURL);
 request.responseType = 'json';
 request.send();
//What needs to be done with the data recieved from the GET request
 request.onload = function() {
     var townData = request.response;
     showData(townData);
}
//Parse information from JSON file and combine into single element to send to HTML page
function showData(jsonObj) {
  var towns = jsonObj['towns']

  for (var i = 0; i < towns.length-4; i++){
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myImg = document.createElement('img');

    if (towns[i].name == "Preston") {
      myImg.setAttribute('src', 'https://cdn.glitch.com/0e6459e2-7f45-4e2b-8100-f606b11bdadc%2Fdownload.jpeg?1551738255453');
      myImg.setAttribute('alt', 'Preston')
  } else if (towns[i].name == "Fish Haven") {
      myImg.setAttribute('src', 'https://cdn.glitch.com/0e6459e2-7f45-4e2b-8100-f606b11bdadc%2Fdownload.jpeg?1551738255453');
      myImg.setAttribute('alt', 'Soda Springs');
  } else if (towns[i].name == "Soda Springs") {
      myImg.setAttribute('src', 'https://cdn.glitch.com/0e6459e2-7f45-4e2b-8100-f606b11bdadc%2Fdownload.jpeg?1551738255453');
      myImg.setAttribute('alt', 'Fish Haven');
  }

    myH2.textContent = towns[i].name;
    myPara1.textContent = towns[i].motto;
    myPara2.textContent = 'Year founded: ' + towns[i].yearFounded;
    myPara3.textContent = 'Current population: ' + towns[i].currentPopulation;
    myPara4.textContent = 'Average annual rainfall: ' + towns[i].averageRainfall;

  myArticle.append(myH2);
  myArticle.append(myPara1);
  myArticle.append(myPara2);
  myArticle.append(myPara3);
  myArticle.append(myPara4);
  myArticle.append(myImg);

  section.appendChild(myArticle);
}
}
