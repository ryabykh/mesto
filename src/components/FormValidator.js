import {
  selectors
} from './constants.js'
export default class FormValidator {
  constructor(data, formElement) {
    this._data = selectors;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(selectors.inputSelector));
    this._buttonElement = this._formElement.querySelector(selectors.submitButtonSelector);
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    })
    this._setEventListeners()
  }

  _setEventListeners() {

    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      })
    })
  }

  _toggleButtonState() {

    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(selectors.inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(selectors.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _hasInvalidInput(inputList) {

    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })

  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass)
  }

  _hideInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(selectors.errorClass)
  }
}
