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
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click',closePopup);

formElement.addEventListener('submit', formSubmitHandler);
