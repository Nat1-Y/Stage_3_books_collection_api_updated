# Books Collection API 📚

## Description
A **RESTful API** for managing a collection of books. This API allows users to perform CRUD operations, validates input data, and includes creative features such as book recommendations and marking books as favorites. Authentication and role-based access control (RBAC) are also integrated to secure the API.

---

## Features
- **CRUD Operations**: Create, Read, Update, and Delete books in the collection.
- **Data Validation**: Ensures required fields (`title`, `author`, `isbn`, `publishedYear`) are present and valid.
- **Authentication & RBAC**:
  - **JWT-based Authentication**: Secure login and token management.
  - **Role Management**: Admin and User roles with restricted access to certain endpoints.
- **Custom Endpoints**:
  - `/books/recommendations`: Suggests a random book from the collection.
  - `/books/favorite/:id`: Marks a specific book as a favorite.

---

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Lightweight web framework for routing and middleware.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: ODM library for MongoDB.
- **jsonwebtoken**: Token management for secure authentication.
- **bcrypt**: Password hashing for secure storage.
- **dotenv**: Manage environment variables securely.

---

## Installation and Setup

### Prerequisites
- Node.js installed.
- MongoDB Atlas account or a local MongoDB instance.
- Git installed on your system.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/Nat1-Y/Stage_3_books_collection_api_updated/tree/main>
   cd Stage_3_books_collection_api_updated
Install Dependencies:

npm install
Set Up Environment Variables:

Create a .env file in the root directory.

2. **Run the Application**:

npm start
Access the API:

Open your browser or API client (e.g., Postman) and navigate to:

http://localhost:5000
API Endpoints
3. **Public Endpoints**:
GET /books: Retrieve all books.
GET /books/:id: Retrieve details of a specific book.
GET /books/recommendations: Get a random book recommendation.
Authenticated Endpoints
POST /books: Add a new book (Admin only).
PATCH /books/:id: Update a book (Admin only).
DELETE /books/:id: Delete a book (Admin only).
POST /books/favorite/:id: Mark a book as a favorite (Authenticated Users).
4. **Deployment**:
The API is deployed and available online at:

<https://stage-3-books-collection-api-updated-7.onrender.com/auth/signup>
