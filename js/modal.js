const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');
const courseButton = document.querySelector('.course__button');

modalBtn.addEventListener('click', () => (modal.style.display = 'flex'));

modal.addEventListener('click', event => {
  const modalContent = event.target.closest('.modal__inner');
  if (!modalContent) modal.style.display = '';
});

const createButton = url => {
  const elemDiv = document.createElement('div');
  const elemImg = document.createElement('img');
  elemImg.src = url;
  elemImg.classList.add('dagger');
  elemDiv.append(elemImg);

  return elemDiv;
};

modalInner.append(createButton('img/dagger.png'));

const button = modalInner.querySelector('.dagger');

button.addEventListener('click', () => (modal.style.display = ''));

courseButton.addEventListener('click', () => (modal.style.display = 'flex'));
