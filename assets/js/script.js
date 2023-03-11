// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    var events = JSON.parse(localStorage.getItem('events')) || [];

    // Generate schedule fields from here
    // Create a time block for each hour of the day
    for (var hour = 9; hour < 24; hour++) {
      var timeBlock = $('<div>').addClass('row time-block ');
      var hourColumn = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(checkHour(hour)).attr('data-hour',hour);
      var descriptionColumn = $('<textarea row="3">').addClass('col-8 col-md-10 description');
      var saveButton = $('<button>').addClass('btn saveBtn col-2 col-md-1').html('<i class="fas fa-save" aria-hidden="true"></i>');

      // Append the columns to the time block and the time block to the container
      timeBlock.append(hourColumn, descriptionColumn, saveButton);
      $('.container-lg').append(timeBlock);

      //apply past present or future class to each schedule 
      var timeDifference = hour - dayjs().hour()

      //check if time is past or present or future
      if(timeDifference < 0){
        descriptionColumn.addClass('past')
      } else if(timeDifference === 0){
        descriptionColumn.addClass('present')
      } else{
        descriptionColumn.addClass('future')
      }

      //save on click of button to localstorage
      saveButton.on('click', function() {
        var hour = parseInt($(this).siblings('.hour').data('hour')); 
        var text = $(this).siblings('.description').val();
        var event = events.find(function(event) {
            return event.hour === hour;
        });
        if (event) {
            event.text = text;
        } else {
            events.push({ hour: hour, text: text });
        }


        localStorage.setItem('events', JSON.stringify(events));
      });

      //populate events into fields to show even after refresh

      var event = events.find(function(event) {
        return event.hour === hour;
      });

      console.log(event)
      if (event) {
        descriptionColumn.val(event.text);
       }

    }
    
    function checkHour(hour){
      return dayjs().hour(hour).format('hA')
      // return hour
    }
      
    // display the current date in the header of the page.
    var currentDate = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(currentDate);
  });
  