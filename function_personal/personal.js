/**
 * Created by jasonwolf on 1/16/14.
 */
function reminder(date, time, plans){
    console.log("You have a reminder set for "+date+" At "+time+" for your event of... "+plans);
    alert("You have a reminder set for "+date+" at "+time+" for your event of... "+plans);
}


//morning plans
var morning = prompt("do you have plans for the morning?")

if(morning == "yes"){

    var c = prompt("What are your plans for the morning?");
    var setReminder = prompt("would you like to set a reminder for the morning event?\nyes or no");
    if(setReminder == "yes"){
        var a = prompt("What will the date be for your event?");
        var b = prompt("What will the time for the event be?");
        reminder(a, b, c);
    }else{
        setReminder = false;
    }
}else{}


//Afternoon plans
var afternoon = prompt("do you have plans for the afternoon?")

if(afternoon == "yes"){

    var c = prompt("What are your plans for the afternoon?");
    var setReminder = prompt("would you like to set a reminder for the afternoon event?\nyes or no");
    if(setReminder == "yes"){
        var a = prompt("What will the date be for your event?");
        var b = prompt("What will the time for the event be?");
        reminder(a, b, c);
    }else{
        setReminder = false;
    }
}else{}

//Night plans
var night = prompt("do you have plans for the night?")

if(night == "yes"){

    var c = prompt("What are your plans for the night?");
    var setReminder = prompt("would you like to set a reminder for the night event?\nyes or no");
    if(setReminder == "yes"){
        var a = prompt("What will the date be for your event?");
        var b = prompt("What will the time for the event be?");
        reminder(a, b, c);
    }else{
        setReminder = false;
    }
}else{}