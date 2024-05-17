import isArray from "../../helper/isArray";

const updateData = (fields, data, alreadyData) => {
  const updateStructure = {};
  fields.forEach((field, index) => {
    if (Array.isArray(alreadyData[field])) {
      updateStructure[field] = isArray(data[index], alreadyData[field]);
    }
    updateStructure[field] = data[index] ?? alreadyData[field];
  });
  return updateStructure;
};
export default updateData;
