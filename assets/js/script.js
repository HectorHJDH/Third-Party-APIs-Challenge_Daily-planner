var weekDay = dayjs().format('dddd');
var month = dayjs().format('MMMM');
var day = dayjs().format('D');

// Function that returns the ordinal depending on the number of the actual day
function ordinal(day) {
  var i = day % 10,
    j = day % 100;
  if (i == 1 && j != 11) {
    return day + "st";
  }
  if (i == 2 && j != 12) {
    return day + "nd";
  }
  if (i == 3 && j != 13) {
    return day + "rd";
  }
  return day + "th";
}

/* For ensuring that the code isn't run until the browser has finished rendering all the elements in the html 
we use function like this: "$()", that is the shorthand for this: $(document).ready(function()) */
$(function () {
  // SAVE DATA IN THE STORE AND DISPLAY IT IN THE DESCRIPTION TEXTAREAS
  // Shows the full day name, the month and day with ordinal
  $('#currentDay').text(weekDay + ', ' + month + ' ' + ordinal(day));

  // Function that goes throught all the time blocks and stores the description in the localStorage
  const time_block = document.querySelectorAll('.time-block');
  time_block.forEach((eachBlock) => {
    const description = eachBlock.querySelector('.description');
    const savedData = localStorage.getItem(`boxData ${eachBlock.id}`);
  
  // Makes the local store to show the values, data in the boxes even if reloading the page
    if (savedData) {
      description.value = savedData;
    }

  // On click the save button, the local store is going to update the past values with the new ones introduced
    const saveBtn = eachBlock.querySelector('.saveBtn');
    saveBtn.addEventListener('click', function() {
      const value = description.value;
      localStorage.setItem(`boxData ${eachBlock.id}`, value);
    });
  });

  // COLOR OF THE TIME BLOCKS
  // Defined startDay at 9 representing 9am and endDay at 17 representing 5pm
  const startDay = 9;
  const endDay = 17;

  // In this for the i moves throught the div ids "hour-x" for this line to repeat 9 times (9 to 17) incrementing the "hour-x" x value
  for (let i = startDay; i <= endDay; i++) {
    const divBlock = document.getElementById(`hour-${i}`);
    const currentHour = dayjs().hour();
    
  // Adds the classes for if the time block is future, present and past for the backgorund color change in the time blocks, also uses i 
  // to determine the hour
    if (currentHour < i) {
      divBlock.classList.add("future");
    } else if (currentHour === i) {
      divBlock.classList.add("present");
    } else {
      divBlock.classList.add("past");
    }
  }
});