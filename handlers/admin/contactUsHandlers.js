export const createContactUs = async (req, res) => {
  const response = await req.contactUsInstance.create();
  console.log(response);
  res.json({ response });
};
export const updateContactUs = async (req, res) => {
  const response = await req.contactUsInstance.update();
  res.json({ response });
};
export const deleteContactUs = async (req, res) => {
  const response = await req.contactUsInstance.delete();
  res.json({ response });
};
// export const getContactUs = async (req, res) => {
//   const response = await req.contactUsInstance.get();
//   res.json({ response });
// };
export const getAllContactUs = async (req, res) => {
  const response = await req.contactUsInstance.getAll();
  res.json({ response });
};
