import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup-image__img')
    this._popupTitle = this._popupElement.querySelector('.popup-image__title')
  }

  open(data) {
    this._popupImage.src = data.link;
    this._popupImage.textContent = data.name;
    this._popupImage.alt = data.alt;
    super.open()
  }
}
