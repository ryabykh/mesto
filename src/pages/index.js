import './index.css';
import {
    selectors,
    formNewMesto,
    formEditProfile,
    openImage,
    popupProfile,
    openMestoBtn,
    popupMesto,
    openProfileBtn,
    userName,
    userAbout,
    nameProfile,
    aboutProfile,
    avatarProfile,
    formEditAvatar,
    editAvatarBtn,
    popupAvatar,
    popupRemoveCard,
    formRemoveCard,
} from '../utils/constants.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

//add validation form
const formMesto = new FormValidator(selectors, formNewMesto);
formMesto.enableValidation();
const formProfile = new FormValidator(selectors, formEditProfile);
formProfile.enableValidation();
const formAvatar = new FormValidator(selectors, formEditAvatar);
formAvatar.enableValidation();

const options = { name: userName.value, about: userAbout.value }
const api = new Api(options)

//cards
const templateCards = document.querySelector('.template-elements');
const cardList = document.querySelector('.elements-list');

api.getInitialCards()
    .then(data => renderingCards(data))

function renderingCards(data) {
    const defaultCardList = new Section({
        items: data.reverse(),
        renderer: (data) => {
            const card = createCard(data)
            defaultCardList.addItem(card.generateCard());
        },
    }, cardList);
    defaultCardList.renderItems();
}

function handleSubmitCard(data) {
    api.addCard(data)
        .then(res => res.json())
        .then((data) => {
            const arr = []
            arr.push(data)
            renderingCards(arr)
        })
}

function createCard(data) {
    const newCard = new Card(data, templateCards, () => openPopupImage.open(data), handleConfirmCard);
    return newCard
}


const openPopupMesto = new PopupWithForm(popupMesto, handleSubmitCard)
openPopupMesto.setEventListeners();
openMestoBtn.addEventListener('click', () => {
    formMesto.toggleButtonState()
    openPopupMesto.open()
});


//preview Image
const openPopupImage = new PopupWithImage(openImage);
openPopupImage.setEventListeners();


//remove
// const removeCard = new PopupWithConfirm(popupRemoveCard, );
// removeCard.setEventListeners();



//edit Profile
api.getUserInfo()
    .then(data => {
        nameProfile.textContent = data.name,
            aboutProfile.textContent = data.about,
            avatarProfile.src = data.avatar
    })
const selectorProfile = { name: '.profile__name', about: '.profile__about' }
const fillPopupProfile = new UserInfo(selectorProfile)

const editProfile = new PopupWithForm(popupProfile, handleSubmitProfile);
editProfile.setEventListeners();
openProfileBtn.addEventListener('click', () => {
    formProfile.toggleButtonState()
    const getDataProfile = fillPopupProfile.getUserInfo()
    userName.value = getDataProfile.name;
    userAbout.value = getDataProfile.about;
    editProfile.open()
});

const editAvatar = new PopupWithForm(popupAvatar, handleSubmitAvatar);
editAvatar.setEventListeners();
editAvatarBtn.addEventListener('click', () => {
    formAvatar.toggleButtonState()
    editAvatar.open()
})

// function handleConfirmCard(item) {
//     console.log('confirm handleCardConfirm')
//     removeCard.open()
// }

// function handleRemoveCard() {
//     console.log('remove handleCardRemove')
// }

function handleSubmitAvatar() {
    console.log('send')
}

function handleSubmitProfile(data) {
    fillPopupProfile.setUserInfo(data)
    api.editProfile(data)
}