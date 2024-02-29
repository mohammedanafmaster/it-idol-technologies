/****************************** Check date equality ******************************/

// Add a click event listener to the check button so when the user clicks on it, it checks if both the date values are equal or not
$('#checkButton').on('click', () => {

    // Store the values of date1 and date2 entered by the user in specific variables
    let date1 = $('#date1').val(), date2 = $('#date2').val();

    // Check if both the values are equal or not, print the corresponding message in div with id 'displayEquality'
    if (date1 == date2) {
        $('#displayEquality').text("Dates are equal");
    }

    else {
        $('#displayEquality').text("Dates are not equal");
    }
})


/****************************** Check dob based on age given by the user ******************************/

// Add a click event listener to the calculate button so when the user clicks on it, it displays the dob
$('#calculateButton').on('click', () => {

    // Store the value of user input in 'age' variable
    let age = $('#age').val();

    // Store the current date inside 'currentDate' variable
    let currentYear = new Date();

    // Subtract age with current year to get the date of birth [in years]
    let dob = (currentYear.getFullYear() - age) - 1; // a year has been subtracted because it's february right now and majority of the people might have their birthday in the coming months

    // Display dob in the div with id 'displayDOB'
    $('#displayDOB').text(`You were born in: ${dob}`);
})