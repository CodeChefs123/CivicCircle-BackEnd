import { firebase } from '../../config/firebase.js'

const firebaseDate = (string = false, date = new Date()) => {
  if (string) {
    return date.toISOString()
  } else {
    return firebase.firestore.Timestamp.fromDate(date)
  }
}

export default firebaseDate
