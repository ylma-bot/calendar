```javascript
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

  /*
    En JavaScript :
    dimanche = 0
    lundi = 1
    mardi = 2...

    On transforme donc pour commencer par lundi.
  */

  const firstDayIndex =
    (firstDay.getDay() + 6) % 7;

  const lastDate =
    lastDay.getDate();

  const previousLastDate =
    previousLastDay.getDate();


  /*
    Nombre total de cases du calendrier.
  */

  const totalDays =
    Math.ceil(
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


  /*
    Affichage du mois et de l'année.
  */

  monthYear.textContent =
    monthNames[month] + " " + year;


  /*
    On vide l'ancien calendrier
    avant de créer le nouveau.
  */

  daysContainer.innerHTML = "";


  /*
    Date actuelle.
  */

  const today = new Date();


  /* =========================
     JOURS DU MOIS PRÉCÉDENT
     ========================= */

  for (
    let i = firstDayIndex - 1;
    i >= 0;
    i--
  ) {

    const day =
      document.createElement("div");

    day.classList.add(
      "day",
      "other-month"
    );

    day.textContent =
      previousLastDate - i;

    daysContainer.appendChild(day);
  }


  /* =========================
     JOURS DU MOIS ACTUEL
     ========================= */

  for (
    let i = 1;
    i <= lastDate;
    i++
  ) {

    const day =
      document.createElement("div");

    day.classList.add("day");

    day.textContent = i;


    /*
      On met en évidence
      la date d'aujourd'hui.
    */

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {

      day.classList.add("today");
    }


    /*
      Quand on clique sur une date,
      elle devient sélectionnée.
    */

    day.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".selected")
          .forEach(element => {

            element.classList.remove(
              "selected"
            );

          });


        day.classList.add("selected");

      }
    );


    daysContainer.appendChild(day);
  }


  /* =========================
     JOURS DU MOIS SUIVANT
     ========================= */

  const remaining =
    totalDays -
    daysContainer.children.length;


  for (
    let i = 1;
    i <= remaining;
    i++
  ) {

    const day =
      document.createElement("div");

    day.classList.add(
      "day",
      "other-month"
    );

    day.textContent = i;

    daysContainer.appendChild(day);
  }
}


/* =========================
   MOIS PRÉCÉDENT
   ========================= */

prevMonth.addEventListener(
  "click",
  () => {

    currentDate.setMonth(
      currentDate.getMonth() - 1
    );

    renderCalendar();
  }
);


/* =========================
   MOIS SUIVANT
   ========================= */

nextMonth.addEventListener(
  "click",
  () => {

    currentDate.setMonth(
      currentDate.getMonth() + 1
    );

    renderCalendar();
  }
);


/*
  Premier affichage.
*/

renderCalendar();
```
