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
    var previousWeekDay = currentWeek.
      previousElementSibling.
      childNodes.
      item(dayWeekIndex);

    changeWeek(previousWeekDay);
  };

  var weekForward = function() {
    var nextWeekDay = currentWeek.
      nextElementSibling.
      childNodes.
      item(dayWeekIndex);

    changeWeek(nextWeekDay);
  };

  var changeWeek = function(targetWeekDay) {
    changeDay(targetWeekDay);
    currentWeek = targetWeekDay.parentElement;
  };

  var changeDay = function(targetDay) {
    selectedDay.removeAttribute("aria-selected");
    targetDay.setAttribute("aria-selected", true);
    dayWeekIndex = Array.prototype.indexOf.call(
        currentWeek.childNodes,
        targetDay
        );
    selectedDay = targetDay;
  };
})();
