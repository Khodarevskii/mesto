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
  const initialElement = element.querySelector('.element').cloneNode(true);
  initialElement.querySelector('.element__image').src = elements.link;
  initialElement.querySelector('.element__title').textContent = elements.name;
  let deleteButton = initialElement.querySelector('.element__delete-button');
  let image = initialElement.querySelector('.element__image').src;
  let text = initialElement.querySelector('.element__title').textContent;
  let likes = initialElement.querySelector('.element__likes');
  initialElement.querySelector('.element__image').addEventListener('click', bigImage.bind('img', image, text));
  deleteButton.addEventListener('click', deleteElement.bind('button', deleteButton));
  likes.addEventListener('click', like.bind('button', likes));
  return elementPlace.prepend(initialElement);
});
function open(target) {
  nameInput.value = name.textContent;
  jobInput.value = about.textContent;
  target.classList.add('popup_active');
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
function createElement(evt) {
  evt.preventDefault();
  let element = document.querySelector('#element').content;
  const userElemnt = element.querySelector('.element').cloneNode(true);
  userElemnt.querySelector('.element__image').src = imageLink.value;
  userElemnt.querySelector('.element__title').textContent = placeName.value;
  let deleteButton = userElemnt.querySelector('.element__delete-button');
  let image = userElemnt.querySelector('.element__image').src;
  let text = userElemnt.querySelector('.element__title').textContent;
  let likes = userElemnt.querySelector('.element__likes');
  userElemnt.querySelector('.element__image').addEventListener('click', bigImage.bind('img', image, text));
  deleteButton.addEventListener('click', deleteElement.bind('button', deleteButton));
  likes.addEventListener('click', like.bind('button', likes));
  elementPlace.prepend(userElemnt);
  close(popupCreate);
}
formElement.addEventListener('submit', handleFormSubmit);
profileSetting.addEventListener('click', open.bind('button', popupProfile));
profileAdd.addEventListener('click', open.bind('button', popupCreate));
crossProfile.addEventListener('click', close.bind('button', popupProfile));
crossCreate.addEventListener('click', close.bind('button', popupCreate));
crossImage.addEventListener('click', close.bind('button', popupBigimg));
createForm.addEventListener('submit', createElement);