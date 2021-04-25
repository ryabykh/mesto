import Card from './Card.js';
import FormValidator from './FormValidator.js';

initialCards.forEach((item) => {
  cardList.append(createCard(item.name, item.link))
})

const formMesto = new FormValidator(selectors, formNewMesto);
formMesto.enableValidation();
const formProfile = new FormValidator(selectors, formEditProfile);
formProfile.enableValidation();

openProfileBtn.addEventListener('click', function () {
  openPopup(popupProfile);
  disableButton(popupProfile);
  fillPopupProfile();
});

closeProfileBtn.addEventListener('click', function () {
  closePopup(popupProfile);
});

formEditProfile.addEventListener('submit', submitFormProfile);

openMestoBtn.addEventListener('click', function () {
  openPopup(popupMesto);
  disableButton(popupMesto);
});

closeMestoBtn.addEventListener('click', function () {
  closePopup(popupMesto)
});

formNewMesto.addEventListener('submit', submitFormMesto);

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  enableEscapeListener();
}

function disableButton(popup) {
  const buttonElement = popup.querySelector(selectors.submitButtonSelector)
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(selectors.inactiveButtonClass);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePressEscape);
}

function fillPopupProfile() {
  userName.value = nameProfile.textContent;
  userAbout.value = aboutProfile.textContent;
}

function submitFormProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = userName.value;
  aboutProfile.textContent = userAbout.value;
  closePopup(popupProfile);
}

function submitFormMesto(evt) {
  evt.preventDefault();
  addCard(cardList, createCard(mestoName.value, mestoLink.value));
  formNewMesto.reset();
  closePopup(popupMesto);
}

function createCard(name, link) {
  const card = new Card(name, link, templateCards);
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(container, element) {
  container.prepend(element);
}

function makePopupActive(){
  const popupOpened = document.querySelector('.popup_opened');
  return popupOpened;
}

function closePressEscape(evt) {
  if (evt.key === escape) {
    closePopup(makePopupActive());
  }
}

function enableEscapeListener() {
  document.addEventListener('keydown', closePressEscape);
}

function setEventListenersOverlay() {
  window.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
      closePopup(makePopupActive());
    }
  });

};

setEventListenersOverlay()
