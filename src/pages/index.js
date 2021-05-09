import './index.css';
import {
  initialCards,
  selectors,
  formNewMesto,
  formEditProfile,
  openImage,
  popupProfile,
  openMestoBtn,
  popupMesto,
  openProfileBtn

} from '../utils/constants.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js'

//template cards
export const templateCards = document.querySelector('.template-elements');
export const cardList = document.querySelector('.elements-list');

//add default card from array
const defaultCardList = new Section({
  items: initialCards,
  renderer: (data) => {
    addCard(data)
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
  formMesto.toggleButtonState()
  openPopupMesto.open()
});

function handleSubmitCard(data) {
  const {mestoName: name, mestoLink: link} = data
  addCard({name, link})
}

function addCard(data){
    const card = new Card(data, templateCards, () => openPopupImage.open(data));
    const cardElement = card.generateCard();
    defaultCardList.newItem(cardElement);

}

//edit Profile
const editProfile = new PopupWithForm(popupProfile, handleSubmitProfile);
editProfile.setEventListeners();
openProfileBtn.addEventListener('click', () => {
  formProfile.toggleButtonState()
  fillPopupProfile.getUserInfo()
  editProfile.open()
  });
  
const fillPopupProfile = new UserInfo(popupProfile)

function handleSubmitProfile() {
  fillPopupProfile.setUserInfo()
}

//add validation form
const formMesto = new FormValidator(selectors, formNewMesto);
formMesto.enableValidation();
const formProfile = new FormValidator(selectors, formEditProfile);
formProfile.enableValidation();