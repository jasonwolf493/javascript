/**
 * Created by jasonwolf on 1/16/14.
 */

// Freetime calculator
    // hours spent on activities
var work = 8;
var school = 8;
var breakfast = 8;
var lunch = 8;
var dinner = 8;
var travel = 8;
var sleep = 8;
var other = 8;
var day = 24;

if(day >= 1){
   var work = prompt("How many hours a day do you work?\nYou have " + day + " hours available.");
    var day = day - work;

    if(day >= 1){
        var school = prompt("How many hours a day do you work on school?\nYou have " + day + " hours available.");
        var day = day - school;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var breakfast = prompt("How many hours a day do you work on breakfast? If you have breakfast at work enter 0.\nYou have " + day + " hours available.");
        var day = day - breakfast;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var lunch = prompt("How many hours a day do take for lunch? If you have lunch at work enter 0.\nYou have " + day + " hours available.");
        var day = day - lunch;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var dinner = prompt("How many hours a day do you take for dinner? If you have lunch at work enter 0.\nYou have " + day + " hours available.");
        var day = day - dinner;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var travel = prompt("How many hours a day do you spend travelling?\nYou have " + day + " hours available.");
        var day = day - travel;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var sleep = prompt("How many hours a day do you sleep?\nYou have " + day + " hours available.");
        var day = day - sleep;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var other = prompt("How many hours a day do you spend on things that were not listed?\nYou have " + day + " hours available.");
        var day = day - other;
    }else{alert("You have no more time left in the day.");};

}else{
    alert("You have no more time left in the day.");

};

alert("You have finished entering your data. Please see the results below.\n")
























