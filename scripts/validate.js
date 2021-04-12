function isValid(formElement, inputElement, selectors) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, selectors)
    } else {
        hideInputError(formElement, inputElement, selectors)
    }
};

function hasInvalidInput(inputList) {
    return inputList.some(function(inputElement) {
        return !inputElement.validity.valid;
    })
}

function toggleButtonState(inputList, buttonElement, selectors) {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(selectors.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(selectors.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

function showInputError(formElement, inputElement, errorMessage, selectors) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass)
}

function hideInputError(formElement, inputElement, selectors) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(selectors.errorClass)
}

function setEventListeners(formElement, selectors) {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, selectors);
    inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function() {
            isValid(formElement, inputElement, selectors);
            toggleButtonState(inputList, buttonElement, selectors);
        });
    });
}

function enableValidation(selectors) {
    const formList = Array.from(document.querySelectorAll(selectors.formSelector))
    formList.forEach(function(formElement) {
        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        })
        setEventListeners(formElement, selectors)
    })
}

enableValidation(selectors)