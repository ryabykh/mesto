import Card from './Card.js';
import FormValidator from './FormValidator.js';


initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  cardList.append(cardElement)
})

const formList = Array.from(document.querySelectorAll(selectors.formSelector));
formList.forEach((item)=>{
  const formElement = new FormValidator (selectors, item);
  const formCheckValid = formElement.enableValidation(item);
})

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  const buttonElement = popup.querySelector(selectors.submitButtonSelector)
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(selectors.inactiveButtonClass);
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

function formSubmitProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = userName.value;
  aboutProfile.textContent = userAbout.value;
  closePopup(popupProfile);
}

function formSubmitMesto(evt) {
  evt.preventDefault();
  const card = new Card(mestoName.value, mestoLink.value);
  const cardElement = card.generateCard();
  addCard(cardList, cardElement);
  document.querySelector('.popup-mesto__form').reset();
  closePopup(popupMesto);
}

function addCard(container, element) {
  container.prepend(element);
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
