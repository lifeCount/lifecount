var currentYear = new Date().getFullYear();
var startYear = currentYear - 100;
var select = document.getElementById('birthYear');
var selectMonth = document.getElementById('birthMonth');
var selectDay = document.getElementById('birthDay');
var selectLife = document.getElementById('lifeSpan');


function addYear() {
  for (var i = startYear; i <= currentYear; i++) {
    var newYearOption = document.createElement('option');
    newYearOption.value = i;
    newYearOption.innerHTML = i;
    if (i === currentYear) {
      newYearOption.selected = true;
    }
    select.appendChild(newYearOption);
  }
}
function addMonth() {
  for (var i = 1; i <= 12; i++) {
    var newMonthOption = document.createElement('option');
    newMonthOption.value = i;
    newMonthOption.innerHTML = i;
    document.getElementById('birthMonth').appendChild(newMonthOption);
  }
}
function addDay() {
  for (var i = 1; i <= 31; i++) {
    var newDayOption = document.createElement('option');
    newDayOption.value = i;
    newDayOption.innerHTML = i;
    document.getElementById('birthDay').appendChild(newDayOption);
  }
}
function addLife() {
  for (var i = 80; i <=100; i++) {
    var newLifeOption = document.createElement('option');
    newLifeOption.value = i;
    newLifeOption.innerHTML = i;
    document.getElementById('lifeSpan').appendChild(newLifeOption);
  }
}

addYear();
addMonth();
addDay();
addLife();


function result() {
  var today = new Date();
  var selectedYear = select.options[select.selectedIndex].value;
  var selectedMonth = selectMonth.options[selectMonth.selectedIndex].value;
  var selectedDay = selectDay.options[selectDay.selectedIndex].value;
  var selectedLife = selectLife.options[selectLife.selectedIndex].value;

  var birth = new Date(selectedYear + "/" + selectedMonth + "/" + selectedDay)
  var toToday = today.getTime();
  var toBirth = birth.getTime();
  var passedTime = toToday - toBirth;
  var afterTime = toBirth + selectedLife * 365 * 24 * 60 * 60 * 1000 - toToday;
  passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24));
  afterTime = Math.round(afterTime / (1000 * 60 * 60 * 24));
  var a = document.getElementById("beforeDay");
  var b = document.getElementById("afterDay");

  a.innerHTML = passedTime;
  b.innerHTML = afterTime;
}