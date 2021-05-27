export default class Card {
    constructor(data, templateCards, handleCardClick, handleCardConfirm) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._templateCards = templateCards;
        this._handleCardClick = handleCardClick;
        this._handleCardConfirm = handleCardConfirm;
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
        const elementLike = this._element.querySelector('.element__like-count');
        elementLike.textContent = this._likes.length;
        return this._element
    }

    _setEventListeners() {
        const likeButton = this._element.querySelector('.element__like');
        const removeButton = this._element.querySelector('.element__remove');
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
        // removeButton.addEventListener('click', this._removeCard.bind(this));
        removeButton.addEventListener('click', () => this._confirmRemove());
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('element__like_active')
        })
    }

    _confirmRemove() {
        console.log('confirm Cards')
        console.log(this._element)
        this._handleCardConfirm(this._element)
    }

    removeCard() {
        this._element.remove()
        this._element = null
    }
}