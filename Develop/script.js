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

function saveText(hour) {
  var taskArea = $(`#hour-${hour} .description`);
  localStorage.setItem(`hour-${hour}-text`, taskArea.val());
}

function loadText(hour) {
  var taskArea = $(`#hour-${hour} .description`);
  var savedText = localStorage.getItem(`hour-${hour}-text`);
  if (savedText !== null) {
    taskArea.val(savedText);
  }
}

$(".saveBtn").on("click", function () {
  var hour = parseInt($(this).closest(".row").attr("id").replace("hour-", ""));
  saveText(hour);
});


