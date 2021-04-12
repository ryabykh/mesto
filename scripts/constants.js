//template cards
const cardTemplate = document.getElementById('cards').content;
const cardList = document.querySelector('.elements-list');

//popup
const popupProfile = document.querySelector('.popup-profile');
const popupMesto = document.querySelector('.popup-mesto');
const openImage = document.querySelector('.popup-image');

//open popup buttons
const openPopupBtn = document.querySelector('.profile__edit-button');
const openPopupMestoBtn = document.querySelector('.profile__add-button');

//close popup buttons
const closePopupBtn = document.querySelector('.popup__close');
const closePopupMestoBtn = document.querySelector('.popup-mesto__close');
const closeImage = document.querySelector('.popup-image__close');

//form
const formEditProfile = document.querySelector('.popup__container');
const formNewMesto = document.querySelector('.popup-mesto__container');

//form-input
const userName = document.getElementById('userName');
const userAbout = document.getElementById('userAbout');
const mestoName = document.getElementById('mestoName');
const mestoLink = document.getElementById('mestoLink');

//data profile
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

// form selectors
const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};