$(document).ready(function(){

$(".save").on("click" , function(){
    // triggers the collection of data and stores it in a value after a click event on the id "save"
    var description = $(this).siblings(".description").val()
    
    var time = $(this).parent().attr("id")
    // saves the information in the description to the local storage that matches time
    localStorage.setItem(time,description)

})

function hourChange (){
    var currentHour = moment().hours()
    $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id")) 
        // "this" is grabbing the id hour you are clicked on 
    if (blockHour < currentHour){
        $(this).addClass("past")
        // adds the styling of past to time block if curent time is past
        }else if (blockHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        // changes block hour is equal to current hour removes the past class and adds the present
        }else { $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
        // these change the color coordination of the block hours based on actual hour.
        }
        
    })
}
hourChange()

    var timeInterval = setInterval(hourChange,15000)
    $("#9am .description").val(localStorage.getItem("9am"))
    $("#10am .description").val(localStorage.getItem("10am"))
    $("#11am .description").val(localStorage.getItem("11am"))
    $("#12pm .description").val(localStorage.getItem("12pm"))
    $("#1pm .description").val(localStorage.getItem("1pm"))
    $("#2pm .description").val(localStorage.getItem("2pm"))
    $("#3pm .description").val(localStorage.getItem("3pm"))
    $("#4pm .description").val(localStorage.getItem("4pm"))
    $("#5pm .description").val(localStorage.getItem("5pm"))
    

    $("#currentDay").text(moment().format("dddd, MMMM Do"))
    // this sets the format of the current days time

})



