// 1.1. Show prompt that ask user to enter his birth date and tell user to enter the
// date in the following format (DD – MM – YYYY) ex. 22–01–1999, and then create
// function that take user input as a parameter and ensure that the string is entered
// in this format (that user entered string is 10 characters and contains (-) after the
// second character and after fifth character).[Don't use RegExp, use string
// functions].


// a. If the user input was correct: make the function create new date object, and
// initialize it with Day, Month, year values (using date constructor: Date(y,m,d)) and
// then show alert to the user with the date in date string format.

// b. If user input wasn't correct, show alert saying, "Wrong Date Format".






var birthdate = prompt("Please enter your birth date in the following format (DD - MM - YYYY), e.g., 22-01-1999");

function userBirthdate(input) {
    var inputArray = input.split('-');

    while (inputArray.length !== 3 || inputArray[0].length !== 2 || inputArray[1].length !== 2 ||
            inputArray[0] < 1 || inputArray[0] > 31 ||
            inputArray[1] < 1 || inputArray[1] > 12 ||
            inputArray[2] < 1000 || inputArray[2] > 2030) {
            alert("Wrong date Format")
        birthdate = prompt("Please enter a valid date in the format (DD - MM - YYYY)");
        inputArray = birthdate.split('-');
    }

    var day = parseInt(inputArray[0]);
    var month = parseInt(inputArray[1]) - 1; 
    var year = parseInt(inputArray[2]);

    var date = new Date(year, month, day);

    alert(date);
}

userBirthdate(birthdate);






















