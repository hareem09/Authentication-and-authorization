# Authentication-and-authorization
This project demonstrates a simple **authentication** and **authorization** system using:

- 🔐 **JWT** for session management
- 🔒 **bcrypt** for password hashing
- 🍪 **Cookies** for securely storing the JWT


---

```markdown
# Auth Basics: Cookies, JWT, and Bcrypt

This project provides a simple example demonstrating how to implement authentication using **cookies**, **JWT (JSON Web Tokens)**, and **bcrypt** for password hashing. All code is placed in a single folder for simplicity and learning purposes.



## 🛠 Technologies Used

- **Node.js**
- **Express**
- **bcryptjs** — for password hashing
- **jsonwebtoken** — for token generation and verification
- **cookie-parser** — for handling cookies

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/hareem09/Authentication-and-authorization
cd filename
````

### 2. Install dependencies

```bash
npm init -y
npm install express jsonwebtoken cookie-parser
```

### 3. Create a `.env` file

```env
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the server

```bash
node index.js
```

Server will start on `http://localhost:3000`

## 📌 Features

* ✅ User registration with hashed password (using bcrypt)
* ✅ Login with email and password
* ✅ JWT token creation and verification
* ✅ Store JWT in HTTP-only cookies
* ✅ Protected route access only with valid token


## 🔐 Security Notes

* Always store your `JWT_SECRET` securely and never hardcode it in your files.
* Use HTTPS in production to secure cookie transmission.
* Use `httpOnly` and `secure` cookie flags in production.


```
