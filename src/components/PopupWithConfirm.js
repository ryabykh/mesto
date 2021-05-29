import Popup from './Popup.js'
export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._formElement = this._popupElement.querySelector('.popup__form')
        this._handleSubmitForm = handleSubmitForm;
    }

    _submitForm = (evt) => {
        evt.preventDefault();
        this._handleSubmitForm();
        // this.close()
    }

    setEventListeners() {
        super.setEventListeners()
        this._formElement.addEventListener('submit', this._submitForm)
    }

    close() {
        super.close();
    }
}