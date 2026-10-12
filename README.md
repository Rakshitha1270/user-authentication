# User Authentication & JWT

A beginner-friendly full-stack authentication project implementing:

- User registration
- bcrypt password hashing
- Login
- JWT token generation
- Protected API middleware
- Logout
- Responsive frontend

## Run locally

Open this folder in CMD/Terminal:

```bash
npm install
npm start
```

Then open:

http://localhost:3000

## API endpoints

### Register
POST `/api/auth/register`

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

### Login
POST `/api/auth/login`

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

### Protected route
GET `/api/protected`

Header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

### Health
GET `/api/health`

## Render

Build Command:
```bash
npm install
```

Start Command:
```bash
npm start
```

Set an environment variable on Render:

`JWT_SECRET` = a strong secret value

## Submission proof

- GitHub repository containing authentication code
- Postman collection OR live deployed demo link
