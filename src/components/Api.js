const token = '60cecd25-5973-44c6-994f-4584b93b6d75'
const cohortId = 'cohort-24'

export default class Api {
    constructor(options) {
        this.userName = options.name;
        this.userAbout = options.about;
        // this.method = options.method;
        // this.headers = options.headers;
    }

    getUserInfo() {
        return fetch(`https://nomoreparties.co/v1/cohort-24/users/me`, {
                headers: {
                    authorization: `60cecd25-5973-44c6-994f-4584b93b6d75`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            // .then((data) => console.log(data))
    }

    getInitialCards() {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards`, {
                headers: {
                    authorization: `60cecd25-5973-44c6-994f-4584b93b6d75`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    editProfile(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `60cecd25-5973-44c6-994f-4584b93b6d75`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.userName,
                about: data.userAbout
            })
        });
    }

    addCard(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards`, {
            method: 'POST',
            headers: {
                authorization: '60cecd25-5973-44c6-994f-4584b93b6d75',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.mestoName,
                link: data.mestoLink
            })
        });
    }

    deleteCard() {
        return fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards/${cardId}`, {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name,
                link: this.link
            })
        });
    }

}