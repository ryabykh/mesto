import {
  escape
} from './constants.js'
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = popupSelector;
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _clickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.close()
    }
  }

  _handleEscClose = (evt) => {
    if (evt.key === escape) {
      this.close()
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector('.popup__close')
    this._popupElement.addEventListener('click', this._clickOverlay)
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}
