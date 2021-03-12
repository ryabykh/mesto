const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const closePopupBtn = document.querySelector('.popup__close');
const closeCover = document.querySelector('.popup__cover');
const formElement = document.querySelector('.popup__container');
let nameInputPopup = document.querySelector('.popup__input-name');
let aboutInputPopup = document.querySelector('.popup__input-about');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInputPopup.value = nameProfile.textContent;
    aboutInputPopup.value = aboutProfile.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInputPopup.value;
    aboutProfile.textContent = aboutInputPopup.value;
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', function() {
    openPopup();
})

closePopupBtn.addEventListener('click', function() { closePopup() });

closeCover.addEventListener('click', function() { closePopup() });

formElement.addEventListener('submit', formSubmitHandler);