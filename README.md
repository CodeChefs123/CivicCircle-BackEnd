# CivicCircle Backend

Explore the server-side powerhouse behind CivicCircle: managing a dynamic volunteer database, perfecting matchmaking algorithms, and facilitating seamless user interactions—all in one place.

## Table of Contents

- [CivicCircle Backend](#civiccircle-backend)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)
  - [API Documentation](#api-documentation)
    - [Authentication](#authentication)
    - [Volunteer Routes](#volunteer-routes)
      - [Get Volunteer Profile](#get-volunteer-profile)
      - [Get Volunteer Trainings](#get-volunteer-trainings)
      - [Apply for Training](#apply-for-training)
      - [Get Volunteer Opportunities](#get-volunteer-opportunities)
      - [Apply for Opportunity](#apply-for-opportunity)
    - [Organization Routes](#organization-routes)
      - [Get Organization Trainings](#get-organization-trainings)
      - [Create Training](#create-training)
      - [Update Training](#update-training)
      - [Delete Training](#delete-training)
      - [Get Volunteer Opportunities](#get-volunteer-opportunities-1)
      - [Create Volunteer Opportunity](#create-volunteer-opportunity)
    - [Middleware](#middleware)
      - [`middlewares/auth.js`](#middlewaresauthjs)
    - [Utilities](#utilities)
    - [Firebase Rules](#firebase-rules)
    - [Contributing](#contributing)
    - [License](#license)

## Project Structure

```
/home/ranuga/Programming/Projects/All/CivicCircle/BackEnd/
├── .history
├── config
├── firebase
├── handlers
├── middlewares
├── models
│   ├── admin
│   ├── home
│   ├── organization
├── node_modules
├── path
├── routes
├── utils
├── .deepsource.toml
├── .firebaserc
├── .gcloudignore
├── .gitignore
├── app.yaml
├── database.rules.json
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── index.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── storage.rules
└── structure.txt
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/CivicCircle-Backend.git
   cd CivicCircle-Backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up Firebase:**
   Make sure you have Firebase CLI installed and configured. You can log in and configure Firebase using the following commands:
   ```sh
   firebase login
   firebase init
   ```

## Configuration

Configure your Firebase credentials and other settings in the appropriate configuration files under the `config` directory.

## Running the Server

To start the Express server, run:

```sh
npm start
```

The server will run on the default port `3000`. You can access the API at `http://localhost:3000`.

## API Documentation

### Authentication

All routes require authentication via a `uid` header. This UID should correspond to a valid user ID in your Firebase authentication system.

### Volunteer Routes

#### Get Volunteer Profile

- **Endpoint:** `/volunteer/profile`
- **Method:** `GET`
- **Headers:** `{ "uid": "user-uid" }`
- **Response:**
  ```json
  {
    "response": {
      "name": "John Doe",
      "email": "john@example.com",
      "country": "USA",
      "skills": "JavaScript, Node.js"
    }
  }
  ```

#### Get Volunteer Trainings

- **Endpoint:** `/volunteer/trainings`
- **Method:** `GET`
- **Headers:** `{ "uid": "user-uid" }`
- **Response:**
  ```json
  {
    "response": [
      {
        "id": "1",
        "title": "Web Development",
        "description": "Learn HTML, CSS, and JavaScript",
        "level": "Beginner",
        "skillsCovered": "HTML, CSS, JavaScript"
      }
    ]
  }
  ```

#### Apply for Training

- **Endpoint:** `/volunteer/trainings/apply/:trainingID`
- **Method:** `POST`
- **Headers:** `{ "uid": "user-uid" }`
- **Response:**
  ```json
  {
    "message": "Successfully applied for training :trainingID"
  }
  ```

#### Get Volunteer Opportunities

- **Endpoint:** `/volunteer/opportunities`
- **Method:** `GET`
- **Headers:** `{ "uid": "user-uid" }`
- **Response:**
  ```json
  {
    "response": [
      {
        "id": "1",
        "name": "Volunteer at Local Shelter",
        "description": "Help with daily tasks",
        "country": "USA",
        "applicants": 10,
        "employees": 5,
        "skillsCovered": "Organization, Teamwork"
      }
    ]
  }
  ```

#### Apply for Opportunity

- **Endpoint:** `/volunteer/opportunities/apply/:opportunityID`
- **Method:** `POST`
- **Headers:** `{ "uid": "user-uid" }`
- **Response:**
  ```json
  {
    "message": "Successfully applied for opportunity :opportunityID"
  }
  ```

### Organization Routes

#### Get Organization Trainings

- **Endpoint:** `/organization/trainings`
- **Method:** `GET`
- **Headers:** `{ "uid": "org-uid" }`
- **Response:**
  ```json
  {
    "response": [
      {
        "id": "1",
        "title": "Web Development",
        "description": "Learn HTML, CSS, and JavaScript",
        "level": "Beginner",
        "skillsCovered": "HTML, CSS, JavaScript"
      }
    ]
  }
  ```

#### Create Training

- **Endpoint:** `/organization/trainings/create`
- **Method:** `POST`
- **Headers:** `{ "uid": "org-uid" }`
- **Body:**
  ```json
  {
    "title": "Web Development",
    "description": "Learn HTML, CSS, and JavaScript",
    "level": "Beginner",
    "skillsCovered": "HTML, CSS, JavaScript"
  }
  ```
- **Response:**
  ```json
  {
    "response": "Training created successfully!"
  }
  ```

#### Update Training

- **Endpoint:** `/organization/trainings/update/:trainingID`
- **Method:** `POST`
- **Headers:** `{ "uid": "org-uid" }`
- **Body:**
  ```json
  {
    "title": "Advanced Web Development",
    "description": "Learn advanced topics in web development",
    "level": "Advanced",
    "skillsCovered": "React, Node.js"
  }
  ```
- **Response:**
  ```json
  {
    "response": "Training updated successfully!"
  }
  ```

#### Delete Training

- **Endpoint:** `/organization/trainings/delete/:trainingID`
- **Method:** `POST`
- **Headers:** `{ "uid": "org-uid" }`
- **Response:**
  ```json
  {
    "response": "Training deleted successfully!"
  }
  ```

#### Get Volunteer Opportunities

- **Endpoint:** `/organization/volunteers`
- **Method:** `GET`
- **Headers:** `{ "uid": "org-uid" }`
- **Response:**
  ```json
  {
    "response": [
      {
        "id": "1",
        "name": "Volunteer at Local Shelter",
        "description": "Help with daily tasks",
        "country": "USA",
        "applicants": 10,
        "employees": 5,
        "skillsCovered": "Organization, Teamwork"
      }
    ]
  }
  ```

#### Create Volunteer Opportunity

- **Endpoint:** `/organization/volunteers`
- **Method:** `POST`
- **Headers:** `{ "uid": "org-uid" }`
- **Body:**
  ```json
  {
    "name": "Volunteer at Local Shelter",
    "description": "Help with daily tasks",
    "country": "USA",
    "applicants": 10,
    "employees": 5,
    "skillsCovered": "Organization, Teamwork"
  }
  ```
- **Response:**
  ```json
  {
    "response": "Volunteer opportunity created successfully!"
  }
  ```

### Middleware

Authentication middleware is used to verify the presence of a `uid` header and ensure that the user is authenticated.

#### `middlewares/auth.js`

```js
const authMiddleware = (req, res, next) => {
  const uid = req.headers["uid"];
  if (!uid) {
    return res.status(401).json({ message: "Unauthorized: No UID provided" });
  }
  req.uid = uid;
  next();
};

module.exports = authMiddleware;
```

### Utilities

Utility functions and configurations can be added to the `utils` directory as needed.

### Firebase Rules

Firebase rules are defined to ensure data security and integrity. You can find the rules in the following files:

- `database.rules.json`
- `firestore.rules`
- `storage.rules`

### Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README.md file provides an in-depth overview of your project, including installation instructions, API documentation, and details on how to contribute. Adjust the content as necessary to fit your specific project needs.
