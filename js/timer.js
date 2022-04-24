const daysBlock = document.querySelector('.timer__days');
const hoursBlock = document.querySelector('.timer__hours');
const minutesBlock = document.querySelector('.timer__minutes');
const secondsBlock = document.querySelector('.timer__seconds');
const timerBloks = document.querySelectorAll('.timer__count');
const appointmentDate = '25 april 2022';

let interval;

const numWord = (value, words) => {
  value = Math.abs(value);

  const lastName = value % 10;

  if (value > 10 && value < 20) return words[2];

  if (lastName > 1 && lastName < 5) return words[1];

  if (lastName === 1) return words[0];

  return words[2];
};

const updateTimer = time => {
  const daysArrayText = ['день', 'дня', 'дней'];
  const hoursArrayText = ['час', 'часа', 'часов'];
  const minutesArrayText = ['минута', 'минуты', 'минут'];
  const secondsArrayText = ['секунда', 'секунды', 'секунд'];

  const date = new Date();
  const dateDeadline = new Date(time).getTime();
  const timeRemaining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  const fdays = days < 10 ? '0' + days : days;
  const fhours = hours < 10 ? '0' + hours : hours;
  const fminutes = minutes < 10 ? '0' + minutes : minutes;
  const fseconds = seconds < 10 ? '0' + seconds : seconds;

  daysBlock.nextElementSibling.textContent = numWord(days, daysArrayText);

  hoursBlock.nextElementSibling.textContent = numWord(hours, hoursArrayText);

  minutesBlock.nextElementSibling.textContent = numWord(
    minutes,
    minutesArrayText
  );

  secondsBlock.nextElementSibling.textContent = numWord(
    seconds,
    secondsArrayText
  );

  daysBlock.textContent = fdays;
  hoursBlock.textContent = fhours;
  minutesBlock.textContent = fminutes;
  secondsBlock.textContent = fseconds;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    daysBlock.textContent = '00';
    hoursBlock.textContent = '00';
    minutesBlock.textContent = '00';
    secondsBlock.textContent = '00';

    timerBloks.forEach(elme => elme.classList.add('colorTimer'));
  }
};

updateTimer(appointmentDate);
interval = setInterval(() => updateTimer(appointmentDate), 500);
