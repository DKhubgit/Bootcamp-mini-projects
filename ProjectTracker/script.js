
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
    data.push(timeDiff(data[3]));
    console.log(data);
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

function timeDiff(dueDate) {
    let currTime = moment();
    let userTime = moment(new Date(dueDate));
    return userTime.diff(currTime, 'days');
}
//TODO: Calculate total earned, 8 hours x time difference
