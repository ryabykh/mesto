const baseUrl = "https://nomoreparties.co/v1/cohort-24"
const token = "60cecd25-5973-44c6-994f-4584b93b6d75"

export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._token = options.token;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: this._token
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
    return fetch(`${this._url}/cards`, {
        headers: {
          authorization: this._token
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
    console.log(data)
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
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
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  removeCard(data) {
    return fetch(`${this._url}/cards/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
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
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	removeLikes(data) {
    return fetch(`${this._url}/cards/likes/${data._cardId}`, {
			method: 'DELETE',
			headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		});
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
			.then(res => {
				if (res.ok) {
          console.log(res)
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}
}
