import isArray from "../validation/isArray.js";

const updateData = (fields, data, alreadyData) => {
  const updateStructure = {};
  fields.forEach((field, index) => {
    console.log(updateStructure);
    if (Array.isArray(alreadyData[field])) {
      updateStructure[field] = isArray(data[index], alreadyData[field]);
    }
    updateStructure[field] = data[index] ?? alreadyData[field];
    console.log(updateStructure);
  });
  return updateStructure;
};
export default updateData;
