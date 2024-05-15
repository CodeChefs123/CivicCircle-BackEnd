const handleCreatePhoneVerification = (req, res) => {
  const request = req.auth.createPhoneVerification(req.body.phoneNumber)
  res.json({ response: request })
}
const handlePhoneValidation = (req, res) => {
  const { verificationId, otp } = req.body
  const userCreds = req.auth.verifyPhoneVerification(verificationId, otp)
  res.json({ response: userCreds })
}

export { handleCreatePhoneVerification, handlePhoneValidation }
