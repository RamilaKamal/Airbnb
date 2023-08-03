const date = new Date();

const renderCalendar = () => {
 date.setDate(1);

  const monthDays = document.querySelector(".days");
  const nextMonthDays = document.querySelector(".new-days")

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  
  const nextDays = 7 - lastDayIndex - 1;

  const newlastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 2,
    0
  ).getDate();

  const newlastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 2,
    0
  ).getDay();
  
  const newnextDays = 7 - newlastDayIndex - 1;
  
    const newfirstDayIndex = new Date( 
    date.getFullYear(),
    date.getMonth() + 1,
    1
  ).getDay();

  const newprevLastDay = new Date(
    date.getFullYear(),
    date.getMonth() +1,
    0
  ).getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  document.querySelector(".date h1").innerHTML = (months[date.getMonth()]);
  document.querySelector(".new-date h1").innerHTML = months[date.getMonth()+1];

  let days = "";
  let newDays = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  for (let x = newfirstDayIndex; x > 0; x--) {
    newDays += `<div class="prev-date">${newprevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
      days += `<div>${i}</div>`;
  }
  for (let i = 1; i <= newlastDay; i++) {
    newDays += `<div>${i}</div>`
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  for (let j = 1; j <= newnextDays; j++) {
    newDays += `<div class="next-date">${j}</div>`;
  }
  
  

  monthDays.innerHTML = days;
  nextMonthDays.innerHTML = newDays;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
