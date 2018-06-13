describe('Matching Days Function', function() {
  it('should be able to take any day selected the first person.', function() {
    var matchingDays = MatchingDays()

    assert.equal( matchingDays.forDate1('2018-06-08'), 'Friday');

  })
  it('should be able to take any day selected by the second person.', function() {
    var matchingDays = MatchingDays()

    assert.equal( matchingDays.forDate2('2018-06-12'), 'Tuesday');

  })
  it('should be able to return true if the selected sameday of the week by first person and the second person. ', function() {
    var matchingDays = MatchingDays()
    matchingDays.forDate1('2018-06-12')
    matchingDays.forDate2('2018-06-12')

    assert.equal( matchingDays.sameWeekday(), true);

  })
});
describe('Matching Days Function that returns object with days of the week and day1 and day2', function() {
  it('Should return an object with the days of the week and  day1(Tuesday) and day2(Friday) days. also whether or not they match', function() {
    var matchingDays = MatchingDays()
    matchingDays.forDate1('2018-06-12');
    matchingDays.forDate2('2018-06-15');
    //console.log(matchingDays.createContext());
    assert.deepEqual(matchingDays.createContext(), {
      'Sunday': {dayName: 'Sunday'},
      'Monday': {dayName: 'Monday'},
      'Tuesday': {dayName: 'Tuesday', date1: true},
      'Wednesday': {dayName: 'Wednesday'},
      'Thursday': {dayName: 'Thursday'},
      'Friday': {dayName: 'Friday', date2: true},
      'Saturday': {dayName: 'Saturday'}
    });

  })
  it('Should return an object with the days of the week and  day1(Saturday) and day2(Saturday) days. also whether or not they match', function() {
    var matchingDays = MatchingDays()
    matchingDays.forDate1('2018-06-16');
    matchingDays.forDate2('2018-06-9');
    //console.log(matchingDays.createContext());
    assert.deepEqual(matchingDays.createContext(), {
      'Sunday': {dayName: 'Sunday'},
      'Monday': {dayName: 'Monday'},
      'Tuesday': {dayName: 'Tuesday'},
      'Wednesday': {dayName: 'Wednesday'},
      'Thursday': {dayName: 'Thursday'},
      'Friday': {dayName: 'Friday'},
      'Saturday': {dayName: 'Saturday', sameDay: true}
    });

  })
  it('Should return an object with the days of the week and  day1(Monday) and day2(Thursday) days. also whether or not they match', function() {
    var matchingDays = MatchingDays()
    matchingDays.forDate1('2018-06-11');
    matchingDays.forDate2('2018-06-14');
    //console.log(matchingDays.createContext());
    assert.deepEqual(matchingDays.createContext(), {
      'Sunday': {dayName: 'Sunday'},
      'Monday': {dayName: 'Monday', date1:true},
      'Tuesday': {dayName: 'Tuesday'},
      'Wednesday': {dayName: 'Wednesday'},
      'Thursday': {dayName: 'Thursday', date2:true},
      'Friday': {dayName: 'Friday'},
      'Saturday': {dayName: 'Saturday'}
    });

  })
  it('Should return an object with the days of the week and  day1(Sunday) and day2(Wednesday) days. also whether or not they match', function() {
    var matchingDays = MatchingDays()
    matchingDays.forDate1('2018-06-10');
    matchingDays.forDate2('2018-06-13');
    //console.log(matchingDays.createContext());
    assert.deepEqual(matchingDays.createContext(), {
      'Sunday': {dayName: 'Sunday', date1:true},
      'Monday': {dayName: 'Monday'},
      'Tuesday': {dayName: 'Tuesday'},
      'Wednesday': {dayName: 'Wednesday', date2:true},
      'Thursday': {dayName: 'Thursday'},
      'Friday': {dayName: 'Friday'},
      'Saturday': {dayName: 'Saturday'}
    });

  })
})
