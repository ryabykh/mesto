export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._token = options.token;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this._getResponseData)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this._getResponseData)
  }

  editProfile(data) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
      .then(this._getResponseData);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
      .then(this._getResponseData);
  }

  removeCard(data) {
    console.log(data)
    return fetch(`${this._url}/cards/${data._cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      })
      .then(this._getResponseData);
  }

  addLike(data) {
    return fetch(`${this._url}/cards/likes/${data._cardId}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(this._getResponseData);
  }

  removeLikes(data) {
    return fetch(`${this._url}/cards/likes/${data._cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
      })
      .then(this._getResponseData);
  }

  editAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(avatar)
      })
      .then(this._getResponseData);
  }
}
