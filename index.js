var citylist =$("#city-list");
var cities = [];
var key = "61780ebbce3b69849afa856390058a20";

// For the day
function formatDay(date){
    var date = new date();
    console.log(date);
    var month = date.getMonth()+1;
    var day = date.getDate();

    var dayOutput = date.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    return dayOutput;
 }

 init();

 //initialize function
 function init() {
     var storedCities = JSON.parse(localStorge.getItem("cities"));

     if (storedCities !== null) {
         cities = storedCities;
     }
     //Render the cities to DOM
     renderCities();
 }

 //Function to store Cities
 function storeCities() {
    localstorage.setItem("cities", JSON.stringify(cities));
    console.log(localStorage);
 }

 //function to render Cities
 function renderCities() {
     citylist.empty();

    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];

        var li = $("<li>").text(city);
        li.attr("id", "listC");
        li.attr("data-city", city);
        li.attr("class", "list-group-item");
        console.log(li);
        citylist.prepend(li);
    }
        if (!city){
            return
        }
        else{
            getResponseWeather(city)
        };
    }

 // When the form is submitted

 $("#add-city").on("click", function(event) {
     event.preventDefault();

     //Obtains city from input
     var city = $("city-input").val().trim();

     //When form is submitted with blank input
     if (city === "") {
         return;
     }
     cities.push(city);
     storeCities();
     renderCities();
    });