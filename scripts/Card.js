import {openPopup, closePopup} from './index.js'

export default class Card {
  constructor(name, link, templateCards) {
    this._name = name;
    this._link = link;
    this._templateCards = templateCards;

  }

  _getTemlate() {
    const cardElement = this._templateCards
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  };

  generateCard() {
    this._element = this._getTemlate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    return this._element
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector('.element__like');
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openImage(openImage)
    });
    this._element.querySelector('.element__remove').addEventListener('click', () => {
      this._element.remove()
      this._element=null
    })
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('element__like_active')
    })
    closeImageBtn.addEventListener('click', () => {
      closePopup(openImage)
    });
  }

  _openImage(popup) {
    imageImg.src = this._link;
    imageTitle.textContent = this._name;
    imageImg.alt = this._name;
    openPopup(popup);
    document.addEventListener('keydown', this._closePressEsc)
  }
}
