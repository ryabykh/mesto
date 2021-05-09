//popup
export const popupProfile = document.querySelector('.popup-profile');
export const popupMesto = document.querySelector('.popup-mesto');
export const openImage = document.querySelector('.popup-image');


//open popup buttons
export const openProfileBtn = document.querySelector('.profile__edit-button');
export const openMestoBtn = document.querySelector('.profile__add-button');

//close popup buttons
const closeProfileBtn = document.querySelector('.popup-profile__close');
const closeMestoBtn = document.querySelector('.popup-mesto__close');
const closeImageBtn = document.querySelector('.popup-image__close');

//form
export const formEditProfile = document.querySelector('.popup-profile__form');
export const formNewMesto = document.querySelector('.popup-mesto__form');

//form-input
export const userName = document.getElementById('userName');
export const userAbout = document.getElementById('userAbout');
const mestoName = document.getElementById('mestoName');
const mestoLink = document.getElementById('mestoLink');

//data profile
export const nameProfile = document.querySelector('.profile__name');
export const aboutProfile = document.querySelector('.profile__about');

//data Card
export const cardTitle = document.querySelector('.popup-image__title');
export const cardImage = document.querySelector('.popup-image__img');

//key
export const escape = 'Escape'

// form selectors
export const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// first cards
export const initialCards = [{
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
