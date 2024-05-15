export const acceptOrganization = async (req, res) => {
  const response = await req.orgVertify.accept();
  res.json({ response });
};
export const declineOrganization = async (req, res) => {
  const response = await req.orgVertify.decline();
  res.json({ response });
};
export const getAllOrganization = async (req, res) => {
  const response = await req.orgVertify.getAllUsers();
  res.json({ response });
};
