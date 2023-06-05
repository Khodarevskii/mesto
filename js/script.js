let profileSetting = document.querySelector('.profile__info-button');
let formElement = document.querySelector('.popup__form');
let popup = document.querySelectorAll('.popup')
let page = document.querySelector('.page');
let cross = document.querySelectorAll('.cross');
let name = document.querySelector('.profile__info-title');
let about = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#about');
let profileAdd = document.querySelector('.profile__add-button');
let placeName = document.querySelector('#place');
let imageLink = document.querySelector('#link');
let createForm = document.querySelector('#create-form')
let elementPlace = document.querySelector('.elements');
let element = document.querySelector('#element').content;
let popupImage = document.querySelector('#image');
let popupText = document.querySelector('#text')
const userElemnt = element.querySelector('.element').cloneNode(true);
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
initialCards.forEach(function (elements) {
  const initialElement = element.querySelector('.element').cloneNode(true);
  initialElement.querySelector('.element__image').src = elements.link;
  initialElement.querySelector('.element__title').textContent = elements.name;
  elementPlace.prepend(initialElement);
});
/* Очень хотел сделать через bind,но почему-то не видет кнопку.*/
function open(index) {
  return function () {
    nameInput.value = name.textContent;
    jobInput.value = about.textContent;
    popup[index].classList.add('popup_active');
    page.classList.add('page_close');
  }
}
function close(index) {
  return function () {
    popup[index].classList.remove('popup_active');
    page.classList.remove('page_close');
  }
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  about.textContent = jobInput.value;
  popup[0].classList.remove('popup_active');
  page.classList.remove('page_close');
}
function createElement(evt) {
  evt.preventDefault();
  let element = document.querySelector('#element').content;
  const userElemnt = element.querySelector('.element').cloneNode(true);
  userElemnt.querySelector('.element__image').src = imageLink.value;
  userElemnt.querySelector('.element__title').textContent = placeName.value;
  elementPlace.prepend(userElemnt);
  popup[1].classList.remove('popup_active');
  page.classList.remove('page_close');
}
function deleteElement(target) {
  target.parentElement.remove()
}
function bigImage(target) {
  popup[2].classList.add('popup_active');
  page.classList.add('page_close');
  popupImage.src = target.src
  popupText.textContent = target.parentElement.textContent
}
elementPlace.addEventListener('click', function (evt) {
  let element = evt.target;
  if (element.classList.contains('element__delete-button')) deleteElement(element);
  else if (element.classList.contains('element__likes')) element.classList.toggle('element__likes_active');
  else if (element.classList.contains('element__image')) bigImage(element);
  return
});
formElement.addEventListener('submit', handleFormSubmit);
profileSetting.addEventListener('click', open(0));
profileAdd.addEventListener('click', open(1));
cross[0].addEventListener('click', close(0));
cross[1].addEventListener('click', close(1));
cross[2].addEventListener('click', close(2));
createForm.addEventListener('submit', createElement);