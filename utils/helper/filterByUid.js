const filterByUid = (snapshot, organizationId) => {
  const items = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.orgID === organizationId) {
      items.push(data);
    }
  });
  return items;
};
