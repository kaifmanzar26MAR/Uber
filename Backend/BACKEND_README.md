# Uber

## API Documentation

### Register User

**Endpoint:** `POST /api/v1/users/register`

**Description:** This endpoint is used to register a new user.

**Request Body:**
```json
{
  "firstname": "string (required, minimum 3 characters)",
  "lastname": "string (optional, minimum 3 characters)",
  "email": "string (required, unique, minimum 6 characters)",
  "password": "string (required)"
}
```

**Response:**

**201 Created**
**Description** user registered successfully.
**Body**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  },
  "token": "string"
}
```

**400 Bad Request**
**Description** User already exists.
**Body**
```json
{
  "message": "User already exists"
}
```
**401 Bad Request**
**Description** All fields are required or Invalid filed lenght.
**Body**
```json
{
  "message": "All fields are required or Invalid filed lenght"
}
```

**500 Internal Server Error**
**Description** An error occurred on the server.
**Body**
```json
{
  "message": "Error message"
}
```


### Login User

**Endpoint:** `POST /api/v1/users/login`

**Description:** This endpoint is used to login a user.

**Request Body:**
```json
{
  "email": "string (required, unique, minimum 6 characters)",
  "password": "string (required)"
}
```

**Response:**
**201 logined**
**Description** user logined successfully.
**Body**
```json
{
  "message": "User logged in successfully",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  },
  "token": "string"
}
```

**400 Bad Request**
**Description** All fields are required.
**Body**
```json
{
  "message": "All fields are required"
}
```

**401 Unauthorized**
**Description** Invalid email or password
**Body**
```json
{
  "message": "Invalid email or password"
}
```

**500 Internal Server Error**
**Description** An error occurred on the server.
**Body**
```json
{
  "message": "Error message"
}
```
