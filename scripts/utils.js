export function openPopup(popup) {
  popup.classList.add('popup_opened');
  enableEscapeListener();
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePressEscape);
}

function enableEscapeListener() {
  document.addEventListener('keydown', closePressEscape);
}

function closePressEscape(evt) {
  if (evt.key === escape) {
    closePopup(makePopupActive());
  }
}

function makePopupActive() {
  const popupOpened = document.querySelector('.popup_opened');
  return popupOpened;
}
