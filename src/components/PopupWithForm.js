import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__form')
    this._handleSubmitForm = handleSubmitForm;
    this._submitForm = this._submitForm.bind(this);
  }

  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  _submitForm = (evt) => {
    evt.preventDefault();
    this._handleSubmitForm(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', this._submitForm)
  }

  close() {
    this._formElement.reset();
    super.close();
  }

  renderLoading(isLoading) {
		this._submitButton = this._formElement.querySelector('.popup__save');
		if (isLoading) {
			this._submitButton.textContent = 'Сохранение...';
		} else {
			this._submitButton.textContent = 'Сохранить';
		}
	}
}
