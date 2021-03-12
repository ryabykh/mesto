const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const closePopupBtn = document.querySelector('.popup__close');
const closeCover = document.querySelector('.popup__cover');
const formElement = document.querySelector('.popup__container');
let nameInputPopup = document.querySelector('.popup__input-name');
let aboutInputPopup = document.querySelector('.popup__input-about');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

let likeImage = document.querySelectorAll('.element__like');

for (let i = 0; i < likeImage.length; i += 1) {
    const currentImage = likeImage[i];
    currentImage.addEventListener('click', clickLike);
}

function clickLike(event) {
    const parentLike = event.target.parentElement;
    const like = parentLike.querySelector('.element__like');
    like.classList.toggle('element__like_active');
}

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