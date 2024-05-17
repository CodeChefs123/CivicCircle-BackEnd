/**
 * Gets the ban status of a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing the user's ban status.
 */
const getBanStatus = async (req, res) => {
  try {
    const { ban } = req
    const isBanned = await ban.isUserBanned()
    res.json({ response: isBanned })
  } catch (error) {
    console.error('Error getting ban status:', error)
    res.status(500).json({ error: 'Failed to get ban status' })
  }
}

/**
 * Bans a user and sends a JSON response with a message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with a ban message.
 */
const banUser = async (req, res) => {
  try {
    const { ban, uid } = req
    const response = await ban.banUser()
    res.json({ response })
  } catch (error) {
    console.error('Error banning user:', error)
    res.status(500).json({ error: 'Failed to ban user' })
  }
}

/**
 * Unbans a user and sends a JSON response with a message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with an unban message.
 */
const unBanUser = async (req, res) => {
  try {
    const { ban, uid } = req
    const response = await ban.unBanUser()
    res.json({ response })
  } catch (error) {
    console.error('Error unbanning user:', error)
    res.status(500).json({ error: 'Failed to unban user' })
  }
}

export { getBanStatus, banUser, unBanUser }
