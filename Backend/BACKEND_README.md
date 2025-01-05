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

### Fetch User Profile

**Endpoint:** `GET /api/v1/users/profile`

**Description:** This endpoint is used to fetch the profile of a logged-in user.

**Response:**
**200 OK**
**Description** User profile fetched successfully.
**Body**

```json
{
  "message": "User profile fetched successfully",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

**401 Unauthorized**
**Description** Unauthorized.
**Body**

```json
{
  "message": "Unauthorized"
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

### Logout User

**Endpoint:** `POST /api/v1/users/logout`

**Description:** This endpoint is used to logout a user.

**Response:**
**200 OK**
**Description** User logged out successfully.
**Body**

```json
{
  "message": "User logged out successfully"
}
```

**401 Unauthorized**
**Description** Unauthorized.
**Body**

```json
{
  "message": "Unauthorized"
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

### Register Captain

**Endpoint:** `POST /api/v1/captains/register`

**Description:** This endpoint is used to register a new captain.

**Request Body:**

```json
{
  "firstname": "string (required, minimum 3 characters)",
  "lastname": "string (optional, minimum 3 characters)",
  "email": "string (required, unique, minimum 6 characters)",
  "password": "string (required)"
}
{
    "firstname": "string (required, minimum 3 characters)",
    "lastname" : "string (optional, minimum 3 characters)",
    "password" : "string (required)",
    "email" : "string (required, unique, minimum 6 characters)",
    "vehicale" : {
        "color" : "string (required, minimum 3 characters)",
        "plate" : "string (required, minimum 3 characters)",
        "capacity" : "Number (required, minimum value should be 1)",
        "vehicleType" : "Enum [\"car\", \"auto\", \"motorbike\"]"
    }
}
```

**Response:**

**201 Created**
**Description** Captain registered successfully.
**Body**

```json
{
  "message": "string",
  "token": "string",
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "status": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "Number",
      "vehicleType": "string"
    },
    "_id": "string"
  }
}
```

**400 Bad Request**
**Description** Captain already exists.
**Body**

```json
{
  "message": "Captain already exists"
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
``
```
