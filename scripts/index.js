function openPopup(popup) {
  popup.classList.add('popup_opened');
  function closePressEscape(evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
      window.removeEventListener('keydown', closePressEscape)
    }
  }
  window.addEventListener('keydown', closePressEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function fillPopupProfile() {
  userName.value = nameProfile.textContent;
  userAbout.value = aboutProfile.textContent;
}

openPopupBtn.addEventListener('click', function () {
  openPopup(popupProfile);
  fillPopupProfile();
});


closePopupBtn.addEventListener('click', function () {
  closePopup(popupProfile)
});

formEditProfile.addEventListener('submit', formSubmitProfile);

openPopupMestoBtn.addEventListener('click', function () {
  openPopup(popupMesto)
});

closePopupMestoBtn.addEventListener('click', function () {
  closePopup(popupMesto)
});

formNewMesto.addEventListener('submit', formSubmitMesto);

closeImage.addEventListener('click', function () {
  closePopup(openImage)
});


initialCards.forEach(function ({
  name,
  link
}) {
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
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active')
  });
  removeButton.addEventListener('click', function () {
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

function setEventListenersOverlay() {
  const formList = Array.from(document.querySelectorAll('.popup'))
  formList.forEach(function (formElement) {
    window.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('popup')) {
        closePopup(formElement)
      }
    });
  });
};

setEventListenersOverlay()
