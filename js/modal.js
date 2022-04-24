const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');
const courseButton = document.querySelector('.course__button');

const createButton = url => {
  const elemDiv = document.createElement('div');
  const elemImg = document.createElement('img');
  elemDiv.classList.add('button-dagger');
  elemImg.src = url;
  elemDiv.append(elemImg);

  return elemDiv;
};

modalInner.append(createButton('img/dagger.png'));

modalBtn.addEventListener('click', () => (modal.style.display = 'flex'));

modal.addEventListener('click', event => {
  const modalContent = event.target.closest('.modal__inner');
  const eventButton = event.target.closest('.button-dagger');

  if (!modalContent || eventButton) modal.style.display = '';
});

courseButton.addEventListener('click', () => (modal.style.display = 'flex'));
