// create current day 
// grab current day info 
// add current day info to header element
// create current time 
// create array of hours 
//     if (current time , hours[]){
//         return .future;
//     }
//     else if (current time == hours[]){
//         return .present; 
//     }
//     else (current time > hours[]){
//         return .past;
//     }
// add click event for all save buttons 
// save button stores respective .descriptions to local storage 
// when you refresh page saved .descriptions persist

var currentDayEl = document.getElementById("currentDay");

currentDayEl.textContent = moment().format("MMMM Do YYYY");

var currentTimeEl = document.getElementById("currentTime");

currentTimeEl.textContent = moment().format("h:mm:ss a");

// var hours = [9, 10, 11, 12, 1, 2 , 3, 4, 5];

// var myColorFunction = function () {
//     for (var i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//     }

// }
// myColorFunction();

var saveButton = document.querySelector(".btn");
var textDescription = ["","","","","","","","",""];
var textEvent = [];


//  for (var hours =9; hours<18; hours++){
//     textDescription = document.querySelector($("#" + i));
textDescription[0] = document.querySelector("#nine");
textDescription[1] = document.querySelector("#ten");
textDescription[2] = document.querySelector("#eleven");
textDescription[3] = document.querySelector("#twelve");
textDescription[4] = document.querySelector("#thirteen");
textDescription[5] = document.querySelector("#fourteen");
textDescription[6] = document.querySelector("#fifteen");
textDescription[7] = document.querySelector("#sixteen");
textDescription[8] = document.querySelector("#seventeen");

for (var hours =0; hours<9; hours++){ 
    textEvent[hours] = localStorage.getItem("hours"+hours);
    textDescription[hours].textContent = textEvent[hours];
    console.log("loading: " + textDescription[hours]);
}


function saveFunction() {
    for (var i = 0; i<9;i++){
        localStorage.setItem("hours" + i, textDescription[i].value.trim()); 
        console.log("storing: " + textDescription[i].value.trim());
}
 };

saveButton.addEventListener("click", saveFunction);
   
    saveFunction();
