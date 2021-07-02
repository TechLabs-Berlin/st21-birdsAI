

//var titleCounter = document.createElement("h1");
//    titleCounter.setAttribute("class", "title");
//    titleCounter.innerText = TestingTesting;
//    counterDiv.appendChild(titleText);


var counter = document.getElementById('counter');
var info = document.getElementById('info');



// depending on what we want to show, select value for hectaresPerYear
// var hectaresPerYear = 10000000; // 10 million hectares of forest lost per year worldwide
// according to UN FAO estimation from 2010-2020

var hectaresPerYear = 1874000; // 1.874 million hectars of forest lost per year in Brazil
// calculated as average of 2016-2020 from here:
// https://gfw.global/3cptlA8

var secondsPerYear = 365 * 24 * 60 * 60; // days * hrs * minutes * seconds
var hectarsPerSecond = hectaresPerYear / secondsPerYear;

update();

function update() {
    var lastMidnight = new Date().setHours(0, 0, 0, 0); // sets the count to start 12am last night
    var now = new Date().getTime();
    var diffSeconds = (now - lastMidnight) / 1000   // the number of seconds passed today (since midnight)
    var hectaresToday = diffSeconds * hectarsPerSecond

    // if the number is euqal or larger than 1000, separate the first digit with a comma
    // i.e: show it as 1,234 instead of 1234
    var firstDigit = ('' + hectaresToday)[0]; // cast it to a string and select the first char
    var restDigits = ('' + hectaresToday.toFixed(2)).substr(1);

    if (hectaresToday > 999) {
        counter.innerText = firstDigit + ',' + restDigits;
    } else {
        counter.innerText = hectaresToday;
    }

    // this part adds a line of text to help illustrate what the numbers mean
    // the line changes as the numbers grow throughout the day
    // TODO: find good comparisons to display
    if (hectaresToday > 0 && hectaresToday < 210) {
        info.innerText = "Hectare = equal to a square with 100-meter sides"
    } else if (hectaresToday < 355) {
        info.innerText = "For comparison: Berlin's Tiergaten park is 210 hectares in size"
    } else if (hectaresToday < 1470) {
        info.innerText = "For comparison: Berlin's Tempelhofer Feld is 355 hectares in size"
    } else if (hectaresToday < 3000){
        info.innerText = "For comparison: Berlin Brandenburg Airport Willy Brandt is 1470 hectares in size"
    } else if (hectaresToday < 3950){
        info.innerText = "For comparison: Berlin's Grunewald Forest is approx. 3,000 hectares in size"
    } else if (hectaresToday < 5910){
        info.innerText = "For comparison: Berlin Mitte is 3,950 hectares in size"
    }
     else {
        info.innerText = "For comparison: Manhattan, NYC is 5,910 hectares in size"
    }
}

setInterval(update, 100); // run update every 100 miliseconds


var counterDiv = document.getElementById('counter-div');
var btnWrapper = document.createElement("div");
btnWrapper.setAttribute("id", "btn__wrapper");
counterDiv.appendChild(btnWrapper); 
var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
document.getElementById("btn__wrapper").appendChild(btn);               // Append <button> to <body> 