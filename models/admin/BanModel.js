// Importing the auth object from firebase configuration
import { auth } from '../../config/firebase.js'

/**
 * Ban class to handle user banning operations
 */
export default class Ban {
  /**
   * Constructor to initialize the user id
   * @param {string} uid - The user id
   */
  constructor (uid) {
    this.uid = uid
  }

  /**
   * Method to ban a user
   * @returns {Array} - An array with a boolean indicating success or failure and the response or error message
   */
  async banUser () {
    try {
      const res = await auth.setCustomUserClaims(this.uid, { banned: true })
      return [true, res]
    } catch (error) {
      return [false, error.message]
    }
  }

  /**
   * Method to check if a user is banned
   * @returns {boolean} - A boolean indicating if the user is banned
   */
  async isUserBanned () {
    const user = await auth.getUser(this.uid)
    return user.customClaims?.banned || false
  }

  /**
   * Method to unban a user
   * @returns {Array} - An array with a boolean indicating success or failure and the response or error message
   */
  async unBanUser () {
    try {
      const res = await auth.setCustomUserClaims(this.uid, { banned: false })
      return [true, res]
    } catch (error) {
      return [false, error.message]
    }
  }
}
