export default class AuthEntity {
  constructor(email, password, photoUrl, phoneNumber) {
    this.email = email;
    this.password = password;
    this.photoUrl = photoUrl;
    this.phoneNumber = phoneNumber;
  }
  resetPassword() {
    return this.authRef.resetPassword(this.email);
  }

  getAll() {
    return this.authRef.getUsers();
  }
}
