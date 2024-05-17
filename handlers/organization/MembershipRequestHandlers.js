const getMembershipRequests = async (req, res) => {
  const showAll = req.body.all ?? false;
  console.log(showAll, req.body.all);
  let response;
  if (showAll) {
    response = await req.membershipInstance.readAll();
  } else {
    response = await req.membershipInstance.read();
  }
  res.json({ response });
};

const approveMembershipRequest = (req, res) => {
  const response = req.membershipInstance.approve();
  res.json({ response });
};
const declineMembershipRequest = (req, res) => {
  const response = req.membershipInstance.decline();
  res.json({ response });
};
export {
  getMembershipRequests,
  approveMembershipRequest,
  declineMembershipRequest,
};
