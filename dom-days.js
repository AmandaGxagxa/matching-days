document.addEventListener('DOMContentLoaded', function() {
  var date1 = document.querySelector('.date-1');
  var date2 = document.querySelector('.date-2');
  var getMatchDaysTemplate = document.querySelector('.matchingDaysTemplate').innerHTML
  var compileMatchDaysTemplate = Handlebars.compile(getMatchDaysTemplate)
  var insertMyDataAt = document.querySelector('.insertData')
  var matchingDays = MatchingDays()

  window.addEventListener('load', function() {
    var getTemplateData = compileMatchDaysTemplate({
      days: matchingDays.createContext()
    });
    insertMyDataAt.innerHTML = getTemplateData;
  });

  //
  date1.addEventListener('change', function() {
    var date = date1.value;
    matchingDays.forDate1(date);
    //console.log(Object.keys(matchingDays.createContext()));
    insertMyDataAt.innerHTML = compileMatchDaysTemplate({
      days: matchingDays.createContext()
    })

  });
  date2.addEventListener('change', function() {
    var date = date2.value;
    matchingDays.forDate2(date);
    //console.log(Object.keys(matchingDays.createContext()));
    insertMyDataAt.innerHTML = compileMatchDaysTemplate({
      days: matchingDays.createContext()
    })

  });
  Handlebars.registerHelper('style', function(changeColor) {
    if (this.date1) {
      return 'date1';
    } else if (this.date2) {
      return 'date2';
    }
    else if (this.sameDay) {
      return 'sameDay';
    }
  });
});
