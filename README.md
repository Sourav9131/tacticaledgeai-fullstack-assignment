# Movie Database Backend API

A full-featured NestJS backend application for managing a movie database with authentication, file uploads, and RESTful API endpoints.

---

##  Live Applications

- **Frontend (Static React App on AWS S3)**  
  👉 http://movie-checks.s3-website.ap-south-1.amazonaws.com/

- **Backend (NestJS API on AWS Elastic Beanstalk)**  
  👉 http://movie-app.ap-south-1.elasticbeanstalk.com/

- **Swagger API Docs**  
  👉 http://movie-app.ap-south-1.elasticbeanstalk.com/docs

---

##  Features

###  Authentication & Authorization
- JWT-based authentication
- User registration and login
- Protected routes with guards
- Password hashing with bcrypt

###  Movie Management
- Create, read, update, and delete movies
- Pagination and search functionality
- User-specific movie collections
- Field validation

###  File Upload
- Image upload for movie posters
- File type and size validation
- Secure file storage

###  Additional Features
- Swagger API documentation
- MongoDB database integration
- Global exception handling
- Request/response transformation
- CORS enabled
- Security with Helmet
- Compression enabled

---

## 🛠 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

---

##  Installation

### 1 Clone the repository
```bash
git clone <your-repo-url>
cd movie-database-backend
