// Importing Firestore and ArticleModel
// import Firestore from "../../firebaseCP/firestore.js";
import Firestore from "../../firebase/firestore.js";
import Article from "./ArticleEntity.js";

/**
 * News class that extends Article class.
 * This class is used to create a news object.
 */
export default class News extends Article {
  /**
   * News constructor.
   * @param {string} newsID - The ID of the news.
   * @param {string} title - The title of the news.
   * @param {string} description - The description of the news.
   * @param {Array} tags - The tags associated with the news.
   * @param {string} senderUID - The UID of the sender.
   * @param {string} orgID - The ID of the organization.
   */
  constructor(newsID, title, description, tags, senderUID) {
    // Calling the parent class constructor
    super(title, description, tags, senderUID, undefined, undefined);
    // Initializing properties
    this.newsID = newsID;
    this.type = "news";
    // communityID
    // Creating a new Firestore instance
    this.firestore = new Firestore(this.type, newsID, []);
  }
}
