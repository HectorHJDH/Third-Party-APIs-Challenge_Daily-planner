var weekDay = dayjs().format('dddd');
var month = dayjs().format('MMMM');
var day = dayjs().format('D');

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
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(weekDay + ', ' + month + ' ' + ordinal(day));

  const description = document.querySelectorAll('.description');
  description.forEach((block, i) => {
    const savedData = localStorage.getItem(`boxData ${i}`);
    if (savedData) {
      block.value = savedData;
    }
  });

  const saveBtn = document.querySelectorAll('.saveBtn');
  saveBtn.forEach((btn, i) => {
    btn.addEventListener('click', function() {
      const inputTxtArea = description[i].value;
      localStorage.setItem(`boxData ${i}`, inputTxtArea);
    });
  });
});