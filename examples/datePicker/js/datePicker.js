var DatePicker = (function() {
  var dateGrid = document.querySelector("#date-picker");
  var selectedDay = dateGrid.querySelector("[aria-selected='true']");
  var currentWeek = selectedDay.parentElement;
  var dayWeekIndex = Array.prototype.indexOf.call(
      currentWeek.childNodes,
      selectedDay
      );

  dateGrid.addEventListener("keydown", function(event) {
    switch(event.key) {
      case "ArrowLeft":
        dayBack();
        break;
      case "ArrowRight":
        dayForward();
        break;
      case "ArrowUp":
        weekBack();
        break;
      case "ArrowDown":
        weekForward();
        break;
      default:
        return;
    }
  });

  var dayForward = function() {
    var nextDay = selectedDay.nextElementSibling;
    changeDay(nextDay)
  };

  var dayBack = function() {
    var previousDay = selectedDay.previousElementSibling;
    changeDay(previousDay)
  };

  var weekBack = function() {
    var previousWeek = currentWeek.previousElementSibling;
    var previousWeekDay = previousWeek.childNodes.item(currentWeekDayIndex);

    changeDay(previousWeekDay);

    currentWeek = previousWeek;
  };

  var weekForward = function() {
    var nextWeek = currentWeek.nextElementSibling;
    var nextWeekDay = nextWeek.childNodes.item(currentWeekDayIndex);

    changeDay(nextWeekDay);

    currentWeek = nextWeek;
  };

  var changeDay = function(targetDay) {
    selectedDay.removeAttribute("aria-selected");
    targetDay.setAttribute("aria-selected", true);
    selectedDay = targetDay;
  };
})();
