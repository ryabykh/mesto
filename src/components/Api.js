const token = '60cecd25-5973-44c6-994f-4584b93b6d75'
const cohortId = 'cohort-24'

export default class Api {
  constructor(options) {
    this.method = options.method;
    this.headers = options.headers;
    this.body = options.body;
    this.name = options.name;
    this.about = options.about;

  }

  getUserInfo() {
    return fetch(`https://nomoreparties.co/v1/${cohortId}/users/me`, {
        headers: {
          authorization: token
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getInitialCards() {
    return fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards`, {
        headers: {
          authorization: token
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  editProfile() {
    return fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        about: this.about
      })
    });
  }

  addCard(){
    return fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards`, {
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

  deleteCard(){
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
