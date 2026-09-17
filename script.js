const monthYear = document.getElementById("monthYear");
const daysContainer = document.getElementById("days");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(year, month + 1, 0);

  const previousLastDay = new Date(year, month, 0);

  const firstDayIndex = (firstDay.getDay() + 6) % 7;

  const lastDate = lastDay.getDate();

  const previousLastDate = previousLastDay.getDate();

  const totalDays = Math.ceil(
    (firstDayIndex + lastDate) / 7
  ) * 7;

  const monthNames = [
    "JANVIER",
    "FÉVRIER",
    "MARS",
    "AVRIL",
    "MAI",
    "JUIN",
    "JUILLET",
    "AOÛT",
    "SEPTEMBRE",
    "OCTOBRE",
    "NOVEMBRE",
    "DÉCEMBRE"
  ];

  monthYear.textContent =
    monthNames[month] + " " + year;

  daysContainer.innerHTML = "";

  const today = new Date();

  /* JOURS DU MOIS PRÉCÉDENT */

  for (let i = firstDayIndex - 1; i >= 0; i--) {

    const day = document.createElement("div");

    day.classList.add("day", "other-month");

    day.textContent = previousLastDate - i;

    daysContainer.appendChild(day);
  }

  /* JOURS DU MOIS */

  for (let i = 1; i <= lastDate; i++) {

    const day = document.createElement("div");

    day.classList.add("day");

    day.textContent = i;

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    day.addEventListener("click", () => {

      document
        .querySelectorAll(".selected")
        .forEach(el => el.classList.remove("selected"));

      day.classList.add("selected");

    });

    daysContainer.appendChild(day);
  }

  /* JOURS DU MOIS SUIVANT */

  const remaining =
    totalDays - daysContainer.children.length;

  for (let i = 1; i <= remaining; i++) {

    const day = document.createElement("div");

    day.classList.add("day", "other-month");

    day.textContent = i;

    daysContainer.appendChild(day);
  }
}


/* MOIS PRÉCÉDENT */

prevMonth.addEventListener("click", () => {

  currentDate.setMonth(
    currentDate.getMonth() - 1
  );

  renderCalendar();
});


/* MOIS SUIVANT */

nextMonth.addEventListener("click", () => {

  currentDate.setMonth(
    currentDate.getMonth() + 1
  );

  renderCalendar();
});


renderCalendar();
