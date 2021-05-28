export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._about = data.about;
        this._avatar = data.avatar;
    }

    getUserInfo(data) {

      const userInfo = {
        name: data.name,
        about: data.about,
        avatar: data.avatar,
        id: data._id
      }
      return userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this._avatar.src = data.avatar;
    }

    saveUserInfo(data, nameInput, jobInput, avatar) {
      nameInput.value = data.name;
      jobInput.value = data.about;
      avatar.src = data.avatar;
    }
}
