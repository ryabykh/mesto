import Popup from './Popup.js'
export default class PopupWithConfirm extends Popup {
  constructor({
    popupSelector,
    handleSubmitForm
  }) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._handleSubmitForm = handleSubmitForm;
    this._cardArray = []
  }

  getCard(card) {
    this._cardArray.push(card)
  }

  _submitForm = (evt) => {
    evt.preventDefault();
    this._handleSubmitForm(this._cardArray[0]);
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', this._submitForm)
  }

  close() {
    super.close();
  }
}
