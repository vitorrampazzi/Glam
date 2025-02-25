const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar() {
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  let daysHTML = "";

  // Dias do mês anterior
  for (let x = firstDay.getDay(); x > 0; x--) {
    daysHTML += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // Dias do mês atual
  for (let i = 1; i <= lastDayDate; i++) {
    // Não adiciona nenhuma classe especial para o dia de hoje
    daysHTML += `<div class="day" data-day="${i}">${i}</div>`;
  }

  // Dias do próximo mês
  for (let j = 1; j <= nextDays; j++) {
    daysHTML += `<div class="day next">${j}</div>`;
  }

  daysContainer.innerHTML = daysHTML;

  const dayElements = daysContainer.querySelectorAll('.day:not(.prev):not(.next)');
  dayElements.forEach(day => {
    day.addEventListener('click', toggleSelectDay);
  });

  hideTodayBtn();
}

function toggleSelectDay(event) {
  const previouslySelected = document.querySelector('.days .day.selected');
  if (previouslySelected) {
    previouslySelected.classList.remove('selected');
  }

  if (!event.target.classList.contains('prev') && !event.target.classList.contains('next')) {
    event.target.classList.add('selected');
  }
}

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

todayBtn.addEventListener("click", () => {
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  renderCalendar();
});

function hideTodayBtn() {
  if (currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}


renderCalendar();