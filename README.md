# 💼 Job Portal Backend API

This is the robust backend server for a Job Portal application built using the **MERN Stack** (Node.js, Express, MongoDB). It facilitates user authentication, role-based access control (Recruiters/Candidates), job management, and resume application tracking.

## 🌐 Live Demo
**Base URL:** `https://my-job-portal-api.onrender.com`

> **Note:** The server is hosted on a free tier, so the first request might take 30-60 seconds to wake up.

---

## 🚀 Features
* **Secure Authentication:** User registration and login using **JWT (JSON Web Tokens)** & bcrypt.
* **Role-Based Access:**
    * **Recruiters:** Can post new jobs.
    * **Candidates:** Can search for jobs and apply.
* **Job Management:** CRUD operations for job listings.
* **File Handling:** Resume uploads using `multer`.
* **Cloud Database:** Integrated with **MongoDB Atlas**.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas (Cloud)
* **Authentication:** JWT & bcryptjs
* **Deployment:** Render

---

## ⚙️ Installation & Local Setup

Follow these steps to run the backend locally on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Botgagan/potentz-company-project.git
```

### 2. Navigate to Backend
```bash
cd Backend
```
### 3. Install Dependencies
```bash
npm install
```
### 4. Environment Configuration
I have set up a Cloud Database for testing purposes so you don't need to install MongoDB locally.

*  Locate the file named **`.env.example`** in the `Backend` directory.
*  **Rename** it to **`.env`**.
*  **Done!** The file is pre-filled with the necessary MongoDB Atlas URI and Secret Keys for testing.

### 5. Start the Server
```bash
npm start
```
You should see: Server running on port 5000 and MongoDB Connected.

## 🧪 API Documentation
### 1. Authentication
### Register User
*  **Endpoint:** POST /api/auth/register
*  **Body:**
```JSON
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "recruiter"
}
```
(Role can be "recruiter" or "candidate")

### Login User
*  **Endpoint:** POST /api/auth/login
*  **Body:**
```JSON
{
  "email": "john@example.com",
  "password": "password123"
}
```
#### Response: Returns a token. You must copy this token to access protected routes.

### 2. Jobs
### Get All Jobs
*  **Endpoint:** GET /api/jobs

*  **Access:** Public

*  **Response:** Returns a list of all available job openings.

### Create Job (Protected)
*  **Endpoint:** POST /api/jobs

*  **Headers:** Authorization: Bearer <YOUR_TOKEN>

*  **Body:**

```JSON
{
  "title": "Backend Developer",
  "company": "Tech Corp",
  "location": "Remote",
  "description": "Looking for a Node.js expert."
}
```
### 3. Applications
### Apply for Job (Protected)
* **Endpoint:** POST /api/applications/:id

* **Headers:** Authorization: Bearer <YOUR_TOKEN>

* **Type:** form-data

*  **Fields:**

    *  **resume:** (File Upload - PDF/Doc)

## 📂 Testing with Postman
I have included a ready-to-use **Postman Collection** in the repository to make testing one-click easy.

*  **Download:** Find Job_Portal_API.postman_collection.json in the root folder.

*  **Import:** Open Postman -> Click "Import" -> Drag & Drop the file.

*  **Run:** The collection is pre-configured to work with http://localhost:5000.

## 👤 Author
**Gagandeep Singh** Full Stack Developer
