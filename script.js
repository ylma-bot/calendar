const monthTitle = document.getElementById("month-title");
const calendarDays = document.getElementById("calendar-days");

const today = new Date();

const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDay = today.getDate();

const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

const monthName = today.toLocaleDateString("fr-FR", {
  month: "long",
  year: "numeric"
});

monthTitle.textContent = monthName;

let firstDay = firstDayOfMonth.getDay();

// En JavaScript, dimanche vaut 0.
// On transforme le calendrier pour commencer par lundi.
firstDay = firstDay === 0 ? 6 : firstDay - 1;

// Cases vides avant le premier jour du mois
for (let i = 0; i < firstDay; i++) {
  const emptyDay = document.createElement("div");
  calendarDays.appendChild(emptyDay);
}

// Jours du mois
for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
  const dayElement = document.createElement("div");

  dayElement.classList.add("day");
  dayElement.textContent = day;

  if (day === currentDay) {
    dayElement.classList.add("today");
  }

  calendarDays.appendChild(dayElement);
}
