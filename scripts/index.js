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

const cardTemplate = document.getElementById('cards').content;
const cardList = document.querySelector('.elements-list');


//popup
const popupProfile = document.querySelector('.popup');
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

//data
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');


function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function fillPopupProfile() {
    userName.value = nameProfile.textContent;
    userAbout.value = aboutProfile.textContent;
}

openPopupBtn.addEventListener('click', function() {
    openPopup(popupProfile);
    fillPopupProfile();
});


closePopupBtn.addEventListener('click', function() { closePopup(popupProfile) });

formEditProfile.addEventListener('submit', formSubmitProfile);

openPopupMestoBtn.addEventListener('click', function() { openPopup(popupMesto) });

closePopupMestoBtn.addEventListener('click', function() { closePopup(popupMesto) });

formNewMesto.addEventListener('submit', formSubmitMesto);

closeImage.addEventListener('click', function() { closePopup(openImage) });


initialCards.forEach(function({ name, link }) {
    const newCardElement = createCard(name, link);
    addCard(cardList, newCardElement);
});

function createCard(name, link) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const imageCard = cardElement.querySelector('.element__image');
    cardElement.querySelector('.element__title').textContent = name;
    imageCard.src = link;
    imageCard.alt = name;
    const likeButton = cardElement.querySelector('.element__like');
    const removeButton = cardElement.querySelector('.element__remove');
    likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('element__like_active')
    });
    removeButton.addEventListener('click', function() {
        const itemCard = removeButton.closest('.element');
        itemCard.remove()
    });

    const imageElement = document.querySelector('.popup-image__img');
    const imageTitle = document.querySelector('.popup-image__title');
    imageCard.addEventListener('click', imageClick);

    function imageClick() {
        imageElement.src = link;
        imageTitle.textContent = name;
        imageElement.alt = name;
        openPopup(openImage);
    }
    return cardElement;
}

function addCard(container, element) {
    container.prepend(element);
}

function formSubmitProfile(evt) {
    evt.preventDefault();
    nameProfile.textContent = userName.value;
    aboutProfile.textContent = userAbout.value;
    closePopup(popupProfile);
}

function formSubmitMesto(evt) {
    evt.preventDefault();
    const newCardElement = createCard(mestoName.value, mestoLink.value);
    addCard(cardList, newCardElement);
    document.querySelector('.popup-mesto__form').reset();
    closePopup(popupMesto);
}