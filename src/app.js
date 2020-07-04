//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {

  return [managerName, managerAge, currentTeam, trophiesWon];

}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
function createFormation(arr) {
  if (arr.length <= 0)
    return null;
  else
    return { defender: arr[0], midfield: arr[1], forward: arr[2] };
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var arr = [];
  players.forEach(value => {
    if (year == value.debut)
      arr.push(value);
  });
  return arr;

}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {

  var arr = [];
  players.forEach(value => {
    if (position == value.position)
      arr.push(value);
  });
  return arr;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  var arr = [];
  players.forEach(value => {
    for (var i = 0; i < value.awards.length; i++) {
      if (awardName == value.awards[i].name) {
        arr.push(value);
        break;
      }
    }
  });
  return arr;

}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var arr = [];
  var non = [];
  var cun = 0;
  players.forEach(value => {
    for (var i = 0; i < value.awards.length; i++) {
      if (value.awards[i].name == awardName)
        cun++;
    }
    if (cun == noOfTimes)
      arr.push(value);
  });
  return arr;


}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var arr = [];
  var coun = 0;
  players.forEach(value => {
    value.awards.forEach(valu => {
      if (valu.name == awardName && value.country == country)
        arr.push(value);

    });
  });
  return arr;


}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var arr = [];
  players.forEach(value => {

    if (noOfAwards == value.awards.length && team == value.team && age > value.age) {
      arr.push(value);
    }
  });
  return arr;



}
//Progression 9 - Sort players in descending order of their age


//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
