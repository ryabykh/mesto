export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemlate() {
    const cardElement = document
      .querySelector('#cards')
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
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openImage(openImage)
    });
    this._element.querySelector('.element__remove').addEventListener('click', () => {
      this._element.remove()
    })
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._element.querySelector('.element__like').classList.toggle('element__like_active')
    })
    closeImage.addEventListener('click', () => {
      this._closeImage(openImage)
    });
  }

  _openImage(popup) {
    document.querySelector('.popup-image__img').src = this._link;
    document.querySelector('.popup-image__title').textContent = this._name;
    document.querySelector('.popup-image__img').alt = this._name;
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._closePressEsc)
  }

  _closePressEsc = evt =>
    (evt.key === 'Escape') &&
    this._closeImage(openImage)


  _closeImage(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._closePressEsc)
  }
}
