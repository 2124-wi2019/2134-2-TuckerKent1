/*
    Tucker Kent
    script.js
    19SP_INFO_2134_WW-Online-JavaScript II
    Thoendel
    25 March 2020
*/
window.addEventListener("load", (event) => { //event listener added to window object to run script on page load

    const timeHolder = document.getElementById("timeHolder"); //storing span into constant
    const currentURL = document.getElementById("currentURL"); //storing span into constant
    const protocolSecure = document.getElementById("protocolSecure"); //storing span into constant

    setInterval(setTime, 1000); //calling setInterval function -- which invokes setTime function -- to reset the time on the page every 1 second
    setURL(); // calling setURL function to display the full url in the spcified span
    setProtocolType(); //this methed displays yes or no based on whether page is http: / https:

    const expireDate = new Date(); //creating a date object 
    let twoWeeks = expireDate.getDate(); //using getDate method to get current date and set it to variable
    twoWeeks = expireDate.getTime() + 1000 * 60 * 60 * 24 * 14; //setting time to 14 days out from current date retrieved
    expireDate.setTime(twoWeeks); //setting value of expireDate to the value put into twoWeeks
    document.cookie = `author=Tucker Kent; expires=${expireDate.toUTCString()}`; //setting author and expiration of cookie -- setting expireDate to a UTC String value

    function setTime() { //function updates time span
        timeHolder.innerHTML = ""; //resetting the span to blank
        timeHolder.innerHTML = getCurrentTime(); //setting the span to the time value returned by getCurrentTime function
    }

    function setURL() { //function displays url to specified span
        let getURL = window.location.href; //getting url and setting it to a variable
        currentURL.innerHTML = getURL; //setting url to the currentURL span via innerHTML
    }

    function setProtocolType() { //function checks and updates secure protocol span
        let pType = window.location.protocol; //setting protocol return value to variable pType
        if (pType === "https:"){ //if pType is secure / https:
            protocolSecure.innerHTML = "Yes"; //sets innerHTML of span value to "yes"
        } else { // if pType is http:
            protocolSecure.innerHTML = "No"; //sets innerHTML of span to "no"
        }
    }
});
//Add your code above this comment
//do not modify anything beneath this 
//comment
function getCurrentTime() {
    const currentDateTime = new Date();
    const currentMinute = (currentDateTime.getHours() < 10 ? '0' : '') + currentDateTime.getHours();
    const currentHour = (currentDateTime.getMinutes() < 10 ? '0' : '') + currentDateTime.getMinutes();
    const currentSecond = (currentDateTime.getSeconds() < 10? '0' : '') + currentDateTime.getSeconds();
    const currentTimeAsString = currentMinute + ":" + currentHour + ":" + currentSecond;
    return currentTimeAsString;
}
