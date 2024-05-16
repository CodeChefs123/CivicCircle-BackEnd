export default class AuthEntity {
  constructor(email, password, phoneNumber, name, photo) {
    this.email = email;
    this.password = password;
    this.photo = photo[1];
    this.photoType = photo[0];
    this.phoneNumber = phoneNumber;
    this.name = name;
  }
  resetPassword() {
    return this.authRef.resetPassword(this.email);
  }

  getAll() {
    return this.authRef.getUsers();
  }
}
