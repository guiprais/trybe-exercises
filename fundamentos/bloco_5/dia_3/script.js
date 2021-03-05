function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

// Exercicio 1
let ulDays = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i += 1) {
  const dezDays = dezDaysList[i];
  let dezDaysItem = document.createElement('li');
  dezDaysItem.setAttribute('class', 'day');
  dezDaysItem.innerText = dezDays;
  ulDays.appendChild(dezDaysItem);

  if (dezDays == 24 || dezDays == 25 || dezDays == 31) {
    dezDaysItem.classList.add('holiday');
  }

  if (dezDays == 4 || dezDays == 11 || dezDays == 18 || dezDays == 25) {
    dezDaysItem.classList.add('friday');
  }
}

// Exercicio 2
function createBtnHoliday(string) {
  const createButton = document.createElement('button');
  createButton.innerText = string;
  createButton.id = 'btn-holiday';
  return createButton;
}

let feriado = createBtnHoliday('Feriado');
const selectButtonsContainer = document.querySelector('.buttons-container');
selectButtonsContainer.appendChild(feriado);

// Exercicio 3
function changeHolidaysColor() {
  const selectHolidays = document.querySelectorAll('.holiday');

  for (let i = 0; i < selectHolidays.length; i += 1) {
    let holiday = selectHolidays[i];

    if (holiday.classList.contains('active') === false) {
      holiday.classList.add('active');
      holiday.style.backgroundColor = 'lightgreen';
    } else {
      holiday.classList.remove('active');
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

const selectButtonHoliday = document.querySelector('#btn-holiday');
selectButtonHoliday.addEventListener('click', changeHolidaysColor);
