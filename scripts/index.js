// модальное окно редактирования профиля

let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let userName = document.getElementById('userName');
let userAbout = document.getElementById('userAbout');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

function openPopup() {
    popup.classList.add('popup_opened');
    userName.value = nameProfile.textContent;
    userAbout.value = aboutProfile.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = userName.value;
    aboutProfile.textContent = userAbout.value;
    closePopup();
}

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click',closePopup);

formElement.addEventListener('submit', formSubmitHandler);

// модальное окно добавления карточек

let popupMesto = document.querySelector('.popup-mesto');
let openPopupMestoBtn = document.querySelector('.profile__add-button');
let closePopupMestoBtn = document.querySelector('.popup-mesto__close');
let formElementMesto = document.querySelector('.popup-mesto__container');
let mestoName = document.getElementById('mestoName');
let mestoLink = document.getElementById('mestoLink');

function openPopupMesto() {
  popupMesto.classList.add('popup-mesto_opened');
}

function closePopupMesto() {
  popupMesto.classList.remove('popup-mesto_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  closePopup();
}

openPopupMestoBtn.addEventListener('click', openPopupMesto);

closePopupMestoBtn.addEventListener('click',closePopupMesto);

formElementMesto.addEventListener('submit', formSubmitHandler);

// добавление карточек

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

initialCards.forEach( function({name, link}){
  addCard(name,link,);
});

function addCard(name, link){
  const cardTemplate = document.querySelector('#cards').content;
  const cardList = document.querySelector('.elements-list');
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardList.append(cardElement);
}
