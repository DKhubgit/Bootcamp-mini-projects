
$("#datePicker").datepicker();

var time = moment();

$("#timeSlot").text(time.format("MMM DD YYYY, hh:mm:ss A"));

function showTime() {

    var interval = setInterval(function (){
        time.add(1,"s");
        $("#timeSlot").text(time.format("MMM DD YYYY, hh:mm:ss A"));
    }, 1000);

}

showTime();
