import {
  initialCards,
  cardList,
  selectors,
  formNewMesto,
  formEditProfile,
  templateCards,
  openImage,
  nameProfile,
  aboutProfile,
  popupProfile,
  openMestoBtn,
  popupMesto,
  openProfileBtn

} from './constants.js'
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js'

//add default card from array
const defaultCardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, templateCards, () => openPopupImage.open(data));
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  },
}, cardList);
defaultCardList.renderItems();

//preview Image
const openPopupImage = new PopupWithImage(openImage);
openPopupImage.setEventListeners();

//add new place
const openPopupMesto = new PopupWithForm(popupMesto, handleSubmitCard)
openPopupMesto.setEventListeners();
openMestoBtn.addEventListener('click', () => {
  disableButton(popupMesto);
  openPopupMesto.open()
});

function handleSubmitCard(data) {
  const {
    mestoName: name,
    mestoLink: link
  } = data;
  const card = new Card({
    name,
    link
  }, templateCards, () => openPopupImage.open(data));
  const cardElement = card.generateCard();
  defaultCardList.newItem(cardElement);
}

//edit Profile
const editProfile = new PopupWithForm(popupProfile, handleSubmitProfile);
editProfile.setEventListeners();
console.log(popupProfile)
openProfileBtn.addEventListener('click', () => {
  disableButton(popupProfile);
  editProfile.open()
  const fillPopupProfile = new UserInfo(popupProfile)
  fillPopupProfile.getUserInfo()
});

function handleSubmitProfile(data) {
  console.log(data)
  nameProfile.textContent = data.userName
  aboutProfile.textContent = data.userAbout
}

//add validation form
const formMesto = new FormValidator(selectors, formNewMesto);
formMesto.enableValidation();
const formProfile = new FormValidator(selectors, formEditProfile);
formProfile.enableValidation();

// disable button
function disableButton(popup) {
  const buttonElement = popup.querySelector(selectors.submitButtonSelector)
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(selectors.inactiveButtonClass);
}
