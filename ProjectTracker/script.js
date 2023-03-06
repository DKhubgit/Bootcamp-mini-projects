
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


$("#formSubmit").on("click", getData);

function getData() {
    let data = [];
    $("input, select").each(function() {
        data.push($(this).val());
    })
    console.log(data)
    addProject(data);
}

function addProject(data) {
    let tableRows = ["<tr>"];
    $.each(data,function(index, value) {
        tableRows.push("<td>" + value + "</td>");
    })
    tableRows.push("</tr>");
    $("tbody").append(tableRows.join(''));
}
//TODO: Calculate time difference from current to due date
//TODO: Calculate total earned, 8 hours x time difference
