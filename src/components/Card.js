export default class Card {
  constructor(data, templateCards, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateCards = templateCards;
    this._handleCardClick = handleCardClick;
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
    const elementImage = this._element.querySelector('.element__image')
    this._element.querySelector('.element__title').textContent = this._name;
    elementImage.src = this._link;
    elementImage.alt = this._name;
    return this._element
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector('.element__like');
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
    this._element.querySelector('.element__remove').addEventListener('click', () => {
      this._element.remove()
      this._element = null
    })
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('element__like_active')
    })
  }
}
