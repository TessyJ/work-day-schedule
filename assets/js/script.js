// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // Generate schedule fields from here
    // Create a time block for each hour of the day
    for (var hour = 0; hour < 24; hour++) {
      var timeBlock = $('<div>').addClass('row time-block ');
      var hourColumn = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hour);
      var descriptionColumn = $('<textarea row="3">').addClass('col-8 col-md-10 description');
      var saveButton = $('<button>').addClass('btn saveBtn col-2 col-md-1').html('<i class="fas fa-save" aria-hidden="true"></i>');

      // Append the columns to the time block and the time block to the container
      timeBlock.append(hourColumn, descriptionColumn, saveButton);
      $('.container-lg').append(timeBlock);

    }



    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var currentDate = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(currentDate);
  });
  