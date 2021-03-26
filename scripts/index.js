// редактирование профиля

let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');
let closePopupBtn = document.querySelector('.popup__close');
let formEditProfile = document.querySelector('.popup__container');
let userName = document.getElementById('userName');
let userAbout = document.getElementById('userAbout');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click',closePopup);

formEditProfile.addEventListener('submit', formSubmitProfile);

function openPopup() {
    popup.classList.add('popup_opened');
    userName.value = nameProfile.textContent;
    userAbout.value = aboutProfile.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitProfile(evt) {
    evt.preventDefault();
    nameProfile.textContent = userName.value;
    aboutProfile.textContent = userAbout.value;
    closePopup();
}


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

let popupMesto = document.querySelector('.popup-mesto');
let openPopupMestoBtn = document.querySelector('.profile__add-button');
let closePopupMestoBtn = document.querySelector('.popup-mesto__close');
let formNewMesto = document.querySelector('.popup-mesto__container');
let mestoName = document.getElementById('mestoName');
let mestoLink = document.getElementById('mestoLink');
;

initialCards.forEach( function({name, link}){
  addCard(name, link);
});

openPopupMestoBtn.addEventListener('click', openPopupMesto);

closePopupMestoBtn.addEventListener('click',closePopupMesto);

formNewMesto.addEventListener('submit', formSubmitMesto);

function openPopupMesto() {
  popupMesto.classList.add('popup-mesto_opened');
}

function closePopupMesto() {
  popupMesto.classList.remove('popup-mesto_opened');
}

function formSubmitMesto(evt) {
  evt.preventDefault();
  addCard(mestoName.value, mestoLink.value);
  closePopupMesto();
}

function addCard(name, link){
  const cardTemplate = document.querySelector('#cards').content;
  const cardList = document.querySelector('.elements-list');
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
  cardList.prepend(cardElement);

  const likeButton = document.querySelector('.element__like');
  const removeButton = document.querySelector('.element__remove');
  likeButton.addEventListener('click', () => {likeButton.classList.toggle('element__like_active')})
  removeButton.addEventListener('click', ()=> {const itemCard = removeButton.closest('.element');
  itemCard.remove()});

  const imageItem = document.querySelector('.element__image');
  const imageCard = document.querySelector('.popup-image');
  const closeImage = document.querySelector('.popup-image__close');
  const image = document.querySelector('.popup-image__img');
  const imageTitle = document.querySelector('.popup-image__title');

  imageItem.addEventListener('click', imageClick);
  function imageClick(event){
    image.src= link;
    imageTitle.textContent = name;
    imageCard.classList.add('popup-image_opened');
    closeImage.addEventListener('click', () => {imageCard.classList.remove('popup-image_opened')});

  }
}

