import Firestore from "../../firebase/firestore.js";

/**
 * Article class to handle article related operations
 */
export default class Article {
  /**
   * Article constructor
   * @param {string} title - The title of the article
   * @param {string} description - The description of the article
   * @param {Array<string>} tags - The tags related to the article
   * @param {string} senderUID - The UID of the sender
   * @param {string} orgID - The ID of the organization
   * @param {string} articleID - The ID of the article
   */
  constructor(title, description, tags, senderUID, orgID, articleID) {
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.senderUID = senderUID;
    this.formID = orgID ?? communityID;
    this.articleID = articleID;
    this.articleType = "article";
    this.firestore = new Firestore(this.articleType, articleID, []);
  }

  /**
   * Create a new article
   * @returns {Promise} - The result of the Firestore create operation
   */
  create() {
    return this.firestore.create({
      title: this.title,
      description: this.description,
      tags: this.tags,
      senderUID: this.senderUID,
      formID: this.formID,
    });
  }

  /**
   * Read an article
   * @returns {Promise} - The result of the Firestore read operation
   */
  read() {
    return this.firestore.read();
  }

  /**
   * Update an article
   * @returns {Promise} - The result of the Firestore update operation
   */
  update() {
    const record = this.read();
    return this.firestore.update({
      title: this.title || record.title,
      description: this.description || record.description,
      tags: this.tags || record.tags,
      senderUID: this.senderUID || record.senderUID,
      formID: this.formID || record.formID,
    });
  }

  /**
   * Delete an article
   * @returns {Promise} - The result of the Firestore delete operation
   */
  delete() {
    return this.firestore.delete(this.articleID);
  }

  /**
   * Read all articles
   * @returns {Promise} - The result of the Firestore readAll operation
   */
  readAll() {
    return this.firestore.readAll();
  }
}
