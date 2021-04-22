class Card {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }

    _getTemlate() {
        const cardElement = document
            .querySelector('#cards')
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    };

    generateCard() {
        this._element = this._getTemlate();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        return this._element
    }
}

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    cardList.append(cardElement)
})