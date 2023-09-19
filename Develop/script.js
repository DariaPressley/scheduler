var formEl = $(".description");


var currentDay = dayjs();
$('#currentDay').text(currentDay.format('MMM D, YYYY'));


$(document).ready(function () {
  function updateHourlyBlocks() {
    var currentHour = dayjs().hour();
    for (var i = 9; i <= 17; i++) {
      var block = $(`#hour-${i}`);
      if (!block.length) continue;

      block.removeClass("past present future");
      if (i < currentHour) {
        block.addClass("past");
      } else if (i === currentHour) {
        block.addClass("present");
      } else {
        block.addClass("future");
      }
    }
  }

  function updateCurrentDay() {
    var currentDate = new Date();
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    var currentDay = currentDate.toLocaleDateString(undefined, options);
    $("#currentDay").text(currentDay);
  }

  updateCurrentDay();
  updateHourlyBlocks();
});






$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});