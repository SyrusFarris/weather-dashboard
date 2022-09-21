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