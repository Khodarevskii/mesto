const profileSetting = document.querySelector('.profile__info-button');
const formElement = document.querySelector('.popup__form');
const popupProfile = document.querySelector('.popup-profile');
const popupCreate = document.querySelector('.popup-create');
const popupBigimg = document.querySelector('.popup-image');
const name = document.querySelector('.profile__info-title');
const about = document.querySelector('.profile__info-subtitle');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#about');
const profileAdd = document.querySelector('.profile__add-button');
const placeName = document.querySelector('#place');
const imageLink = document.querySelector('#link');
const createForm = document.querySelector('#create-form')
const elementPlace = document.querySelector('.elements');
const element = document.querySelector('#element').content;
const popupImage = document.querySelector('#image');
const popupText = document.querySelector('#text')
const userElemnt = element.querySelector('.element').cloneNode(true);
const crossProfile = document.querySelector('.cross-profile');
const crossCreate = document.querySelector('.cross-create');
const crossImage = document.querySelector('.cross-image');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function like(target) {
  target.classList.toggle('element__likes_active');
}
function deleteElement(target) {
  target.parentElement.remove()
}
function bigImage(image, text) {
  open(popupBigimg);
  popupImage.src = image
  popupText.textContent = text
}
initialCards.forEach(function (elements) {

  createElement(elements, elements.link, elements.name);
});
function open(target) {
  target.classList.add('popup_active');
}
function openProfile() {
  open(popupProfile);
  nameInput.value = name.textContent;
  jobInput.value = about.textContent;
}
function close(target) {
  target.classList.remove('popup_active');
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  about.textContent = jobInput.value;
  close(popupProfile);
}
function createElement(element, imageValue, textValue) {
  const userElemnt = document.querySelector('#element').content;
  element = userElemnt.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = imageValue
  element.querySelector('.element__title').textContent = textValue
  const deleteButton = element.querySelector('.element__delete-button');
  const image = element.querySelector('.element__image').src;
  const text = element.querySelector('.element__title').textContent;
  const likes = element.querySelector('.element__likes');
  element.querySelector('.element__image').addEventListener('click', bigImage.bind('img', image, text));
  deleteButton.addEventListener('click', deleteElement.bind('button', deleteButton));
  likes.addEventListener('click', like.bind('button', likes));
  return elementPlace.prepend(element);
}
function handleCardSubmit(evt, element) {
  evt.preventDefault();
  createElement(element, imageLink.value, placeName.value)
}
formElement.addEventListener('submit', handleFormSubmit);
profileSetting.addEventListener('click', openProfile);
profileAdd.addEventListener('click', open.bind('button', popupCreate));
crossProfile.addEventListener('click', close.bind('button', popupProfile));
crossCreate.addEventListener('click', close.bind('button', popupCreate));
crossImage.addEventListener('click', close.bind('button', popupBigimg));
createForm.addEventListener('submit', handleCardSubmit);