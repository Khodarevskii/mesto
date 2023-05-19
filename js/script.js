let profileSetting = document.querySelector('.profile__info-button');
let formElement = document.querySelector('.popup');
let pageCover = document.querySelector('.page');
let cross = document.querySelector('.cross');
let name = document.querySelector('.profile__info-title');
let about = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__about');
function open() {
  formElement.classList.add('popup__active');
  pageCover.classList.add('page_active');
  nameInput.value = name.textContent;
  jobInput.value = about.textContent;
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  about.textContent = jobInput.value;
  close();
}
function close() {
  formElement.classList.remove('popup__active');
  pageCover.classList.remove('page_active');
}
formElement.addEventListener('submit', handleFormSubmit);
profileSetting.addEventListener('click', (open));
cross.addEventListener('click', (close));