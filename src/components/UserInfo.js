import {
  nameProfile,
  aboutProfile
} from '../utils/constants.js'
export default class UserInfo {
  constructor({
    popupSelector
  }) {
    this._name = document.querySelector('#userName');
    this._about = document.querySelector('#userAbout');
  }
  
  getUserInfo() {
    this._name.value = nameProfile.textContent
    this._about.value = aboutProfile.textContent
  }

  setUserInfo(){
    nameProfile.textContent = this._name.value
    aboutProfile.textContent = this._about.value
  }
}
