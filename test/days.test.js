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

  it('Should return an object with the days of the week and  day1 and day2 days. also whether or not they match', function() {
    var matchingDays = MatchingDays()
    matchingDays.forDate1('2018-06-12');
    matchingDays.forDate2('2018-06-15');
    console.log(matchingDays.createContext());
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

})
