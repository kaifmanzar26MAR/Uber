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
**Description** All fields are required.
**Body**
```json
{
  "message": "All fields are required"
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
