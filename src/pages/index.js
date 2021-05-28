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
  mestoName,
  mestoLink,
  nameProfile,
  aboutProfile,
  formEditAvatar,
  editAvatarBtn,
  popupAvatar,
  popupRemoveCard,
  inputAvatar,
  avatarProfile
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

//cards
const templateCards = document.querySelector('.template-elements');
const cardList = document.querySelector('.elements-list');

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/cohort-24",
  token: "60cecd25-5973-44c6-994f-4584b93b6d75"
})

Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
  ])
  .then((data) => {
    const [userData, initialCards] = data;
    userInfo.getUserInfo(userData);
    userInfo.setUserInfo(userData);
    const cardItems = renderingCards(initialCards, userData);
    cardItems.renderItems();
  })
  .catch((err) => {
    console.log(err);
  })

  function renderingCards(data, user) {
    const defaultCardList = new Section({
      items: data,
      renderer: (item) => {
        const card = createCard(item, user);
        const cardElement = card.generateCard();
        defaultCardList.addItem(cardElement);
      }
    },
    cardList);
    return defaultCardList
  }

function createCard(data, userId) {
  // console.log(data)
  const newCard = new Card(
    data,
    userId,
    templateCards,
    () => openPopupImage.open(data),
    {
			deleteCard: () => {
				const popupSubmit = new PopupWithForm({
					popupSelector: popupRemoveCard,
					handleSubmitForm: () => {
						const apiRemoveCard = api.removeCard(data);
						apiRemoveCard.then(() => {
							newCard.removeCard();
							popupSubmit.close();
						})
							.catch((err) => {
								console.log(`Ошибка: ${err}`);
							});
					}
				});
				popupSubmit.open();
				popupSubmit.setEventListeners();
			},
			addLike: () => {

				const apiLikeCard = api.addLike(newCard);
				apiLikeCard.then((data) => {
          newCard.setLikesCounter(data);
				})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			},
			removeLike: () => {
				const apiRemoveLike = api.removeLikes(newCard);
				apiRemoveLike.then((data) => {
					newCard.setLikesCounter(data);
				})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			}
		});

  return newCard
}

const openPopupMesto = new PopupWithForm({
  popupSelector: popupMesto,
  handleSubmitForm: () => {
    openPopupMesto.renderLoading(true);
		const apiNewCard = api.addCard({
			name: mestoName.value,
			link: mestoLink.value,
		})
    apiNewCard.then((data) => {
      openPopupMesto.renderLoading(false);
			const newCard = renderingCards(data, data.owner._id);
			newCard.renderItem(data, data.owner._id);
			openPopupMesto.close();
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
	}
  })

//preview Image
const openPopupImage = new PopupWithImage(openImage);
openPopupImage.setEventListeners();

//Profile
const userInfo = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile})

const editProfile = new PopupWithForm({
	popupSelector: popupProfile,
	handleSubmitForm: () => {
		editProfile.renderLoading(true);
		const apiEditUser = api.editProfile({
			name: userName.value,
			about: userAbout.value
		});
		apiEditUser.then((data) => {
			userInfo.setUserInfo(data);
			editProfile.renderLoading(false)
			editProfile.close();
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
	}
});

const editAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  handleSubmitForm: () => {
    editAvatar.renderLoading(true);
		const apiUser = api.editAvatar({avatar: inputAvatar.value});
		apiUser.then((data) => {
			const userData = userInfo.getUserInfo(data);
			userInfo.saveUserInfo(userData, nameProfile, aboutProfile, avatarProfile);
			editAvatar.renderLoading(false);
			editAvatar.close();
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
  }
});

openMestoBtn.addEventListener('click', () => {
  formMesto.toggleButtonState()
  openPopupMesto.open()
  openPopupMesto.setEventListeners();
});

editProfile.setEventListeners();
openProfileBtn.addEventListener('click', () => {
  formProfile.toggleButtonState()
  const apiUser = api.getUserInfo();
	apiUser.then((data) => {
		const userData = userInfo.getUserInfo(data);
		userInfo.saveUserInfo(userData, nameProfile, aboutProfile, avatarProfile);
		userName.value = nameProfile.textContent;
		userAbout.value = aboutProfile.textContent;
		editProfile.open();
		editProfile.setEventListeners();
	})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
});

editAvatar.setEventListeners();
editAvatarBtn.addEventListener('click', () => {
  formAvatar.toggleButtonState()
  editAvatar.open()
})

