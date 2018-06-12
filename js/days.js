function MatchingDays() {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day1 = '';
  var day2 = '';

  var week = function() {
    return weekDays;
  }

  function forDate1(value) {
    if (value !== undefined || value === "") {
      var date = new Date(value);
      let day = date.getDay();
      day1 = weekDays[day];

  return day1;
    }

  }

  function forDate2(value2) {
    if (value2 !== undefined || value2 === "") {
      var date2 = new Date(value2);
      let day = date2.getDay();

      day2 = weekDays[day];

        return day2;
    }

  }


  function sameWeekday() {
    return day1 === day2;;
  }
  // TODO: Create a function called compareBothDates

  function createContext() {
    let context = {};

    for (let i = 0; i < weekDays.length; i++){
      var currentIndex = weekDays[i];
      context[currentIndex] = {
        dayName: currentIndex
      }
      if (day1 == currentIndex) {
        context[currentIndex].date1 = true;
        if (sameWeekday()) {
          delete context[currentIndex].date1;
          context[currentIndex].sameDay = true;
        }
      } else if (day2 == currentIndex) {
        context[currentIndex].date2 = true;

        if (sameWeekday()) {
          delete context[currentIndex].same;
          context[currentIndex].sameDay = true;
        }
      }
    }
    return context;
  }
  // TODO: add an empty map to store days of the week with keys
  // TODO: Loop through weekDays array and
  return {
    forDate1,
    forDate2,
    week,
    sameWeekday,
    createContext
  };

}
