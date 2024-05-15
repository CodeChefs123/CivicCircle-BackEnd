import Firestore from "../../firebase/firestore.js";

export default class NotificationModel {
  constructor(orgUid) {
    this.firestoreRef = new Firestore("auth/organization", orgUid);
  }

  async sendNotification(notification) {
    const notifications = this.firestoreRef.read()[1].notifications;
    notifications.push(notification);
    return this.firestoreRef.update({ notifications });
  }

  async getNotifications() {
    return this.firestoreRef.read()[1].notifications;
  }
}
