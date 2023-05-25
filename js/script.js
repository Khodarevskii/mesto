let profileSetting = document.querySelector('.profile__info-button');
let formElement = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let page = document.querySelector('.page');
let cross = document.querySelector('.cross');
let name = document.querySelector('.profile__info-title');
let about = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#about');
function open() {
  popup.classList.add('popup_active');
  page.classList.add('page_close');
  nameInput.value = name.textContent;
  jobInput.value = about.textContent;
}
function close() {
  popup.classList.remove('popup_active');
  page.classList.remove('page_close');
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  about.textContent = jobInput.value;
  close();
}
formElement.addEventListener('submit', handleFormSubmit);
profileSetting.addEventListener('click', open);
cross.addEventListener('click', close);