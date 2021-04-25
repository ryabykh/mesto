//template cards
const templateCards = document.querySelector('.template-elements');
const cardList = document.querySelector('.elements-list');

//popup
const popupProfile = document.querySelector('.popup-profile');
const popupMesto = document.querySelector('.popup-mesto');
const openImage = document.querySelector('.popup-image');


//open popup buttons
const openProfileBtn = document.querySelector('.profile__edit-button');
const openMestoBtn = document.querySelector('.profile__add-button');

//close popup buttons
const closeProfileBtn = document.querySelector('.popup-profile__close');
const closeMestoBtn = document.querySelector('.popup-mesto__close');
const closeImageBtn = document.querySelector('.popup-image__close');

//form
const formEditProfile = document.querySelector('.popup-profile__form');
const formNewMesto = document.querySelector('.popup-mesto__form');

//form-input
const userName = document.getElementById('userName');
const userAbout = document.getElementById('userAbout');
const mestoName = document.getElementById('mestoName');
const mestoLink = document.getElementById('mestoLink');

//data profile
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

//data Card
const imageTitle = document.querySelector('.popup-image__title');
const imageImg = document.querySelector('.popup-image__img');

//key
const escape = 'Escape'

// form selectors
const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// first cards
const initialCards = [{
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
