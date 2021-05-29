export default class Card {
  constructor(data, user, templateCards, handleCardClick, {
    deleteCard,
    addLike,
    removeLike
  }) {
    this._user = user;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templateCards = templateCards;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._addLike = addLike;
    this._removeLike = removeLike;
    this._ownerId = data.ownerId;
		this._owner = data.owner;
    this._cardId = data._id;

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
    elementImage.id = this._cardId;
    // const elementLike = this._element.querySelector('.element__like-count');
    // elementLike.textContent = this._likes.length;
    this._counter = this._element.querySelector('.element__like-count');
		this._counter.textContent = this._likes.length;
    this._showLike();
    this._showTrash();

    return this._element
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.element__like');
    const removeButton = this._element.querySelector('.element__remove');
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
    // removeButton.addEventListener('click', this._removeCard.bind(this));
    removeButton.addEventListener('click', () => this._deleteCard());
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__like_active')) {
        this._removeLike(this._element);
        this._likeCard();
      } else {
        this._addLike(this._element);
        this._likeCard();
      }
    })
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _likeCard() {
  	this._likeButton.classList.toggle('element__like_active');
	}

  setLikesCounter(data) {
    this._counter = this._element.querySelector('.element__like-count');
    this._counter.textContent = data.likes.length;
	}

  _showTrash() {
		this._cardRemove = this._element.querySelector('.element__remove');
			if (this._ownerId ===  this._user._id) {
			this._cardRemove.classList.toggle('element__remove_active');
		}
	}

  _showLike() {
		this._likes.forEach(element => {
			if (element._id === this._user._id) {
				this._likeCard();
			}
		});
	}
}
