$(document).ready(function(){

$(".save").on("click" , function(){
    var description = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time,description)

})

function hourChange (){
    var currentHour = moment().hours()
    $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id")) 
        // "this" is grabbing the id hour you are clicked on 
    if (blockHour < currentHour){
        $(this).addClass("past")
        }else if (blockHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
            
        }else { $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
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
    

})



