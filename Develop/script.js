
$(function () { 
    // Get the current hour using the Day.js library
    let currentHour = dayjs().hour();

    // Iterate through hours from 9 AM (9) to 5 PM (17)
    for (let index = 9; index < 18; index++) {
        // Select the parent element with an ID like "hour-X"
        let parentId = $("#hour-" + index);

        // Set the text area's value to the saved value in local storage
        parentId.children("textarea").val(localStorage.getItem("hour-" + index));

        // Add a class to the text area to indicate past, present, or future
        if (currentHour === index) {
            parentId.children("textarea").addClass("present");
        }
        else if (currentHour > index) {
            parentId.children("textarea").addClass("past");
        }
        else if (currentHour < index) {
            parentId.children("textarea").addClass("future");
        }
    }

    // Select all elements with the class "saveBtn"
    let saveBtn = $(".saveBtn");

    // Function to handle the save button click event
    function saveButton(event) {
        // Log the value of the sibling text area
        console.log($(event.target).parent().siblings("textarea").val());

        // Select the text area associated with the clicked save button
        let textarea = $(event.target).siblings("textarea");

        // Get the ID of the parent element, which represents the hour
        let parentId = $(event.target).parent().attr("id");

        // Save the text area's value in local storage using the hour as the key
        localStorage.setItem(parentId, textarea.val());
    }

    // Add a click event listener to all save buttons
    saveBtn.on("click", saveButton);
});

  