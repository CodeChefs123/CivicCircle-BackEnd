/**
 * Retrieves news data and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with news data.
 */
const getNews = async (req, res) => {
  const { newsInitialization } = req
  let response
  if (req.body.all) {
    response = await newsInitialization.readAll()
  } else {
    response = await newsInitialization.read()
  }

  return res.json({
    response
  })
}

/**
 * Creates news and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with news creation status.
 */
const createNews = async (req, res) => {
  const { newsInitialization } = req
  return res.json({
    response: await newsInitialization.create()
  })
}

/**
 * Updates news and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const updateNews = async (req, res) => {
  const { newsInitialization } = req
  const response = await newsInitialization.update()
  res.json({ response })
}

/**
 * Deletes news and sends a status response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - Response status.
 */
const deleteNews = async (req, res) => {
  const { newsInitialization } = req
  const response = await newsInitialization.delete()
  return res.json({ response })
}

export { getNews, createNews, updateNews, deleteNews }
