export const handleSignup = async (req, res) => {
  try {
    const returnedVal = await req.auth.createUser();
    res.json({ response: returnedVal });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Signup failed");
  }
};

export const handleLogin = async (req, res) => {
  try {
    console.log("Attempting to login:", req.auth);
    const returnedVal = await req.auth.loginUser();
    res.json({ response: returnedVal });
  } catch (error) {
    console.log(error.message);
  }
};

export const handleResetPassword = async (req, res) => {
  try {
    const response = await req.auth.resetPassword();
    res.json({ response });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).send("Password reset failed");
  }
};

export const handleUsers = async (req, res) => {
  try {
    const response = await req.auth.getAll();
    console.log(response);
    res.json({ response });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).send("Password reset failed");
  }
};
