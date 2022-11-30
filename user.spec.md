# API Specs

## Authentication

All APIs with with role user or admin or both must must use this authentication.

Request :

- Header :
  - Authorization : "your token which is earned after login"

## Users

| Field Name | Type     | Description    |
| ---------- | -------- | -------------- |
| id         | ObjectId | Users ID       |
| nama       | string   | Users Name     |
| email      | string   | Users Email    |
| password   | string   | Users Password |
| isAdmin    | boolean  | Users Roles    |

## Register

Request :

- Method : `POST`
- Endpoint : `api/register`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body for `user` :

```json
{
	"nama": "Abil",
	"email": "abil@gmail.com",
	"password": "abil123",
	"umur": 20
}
```

Response :

```json
{
	"status": "success",
	"message": "user created successfully"
}
```

## Login

Request :

- Method : `POST`
- Endpoint : `api/login`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```json
{
	"email": "admin@admin.com",
	"password": "admin123"
}
```

Response :

```json
{
	"status": "success",
	"message": "login successfully",
	"accessToken": "random string"
}
```

> `accessToken` is contain a random string that will later be used to access pages that need authorization headers

## Show Profile (user, admin)

Request :

- Method : `GET`
- Endpoint : `api/profile`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "success",
	"message": "user found",
	"data": {
		"_id": "6386293f6a74b5de599b211d",
		"nama": "admin",
		"email": "admin@admin.com",
		"umur": 20,
		"__v": 0
	}
}
```

## Update Profile (user, admin)

Request :

- Method : `PUT`
- Endpoint : `api/profile`
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"nama": "admin updated",
	"email": "admin1@admin.com",
	"umur": 21,
	"password": "admin1234"
}
```

Response :

```json
{
	"status": "success",
	"message": "profile updated successfully"
}
```

> `request-body` at least contains 1 field between the four fields.

## Get All User (admin)

Request :

- Method : `GET`
- Endpoint : `api/users`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "success",
"message": "all users found",
"data": [
  {
		"_id": "6386293f6a74b5de599b211d",
    "nama": "admin updated",
    "email": "admin1@admin.com",
    "isAdmin": true,
    "umur": 21,
    "__v": 0
  },
  {
		"_id": "6387041b3307128bb73f69db",
    "nama": "Abil",
    "email": "abil@gmail.com",
    "isAdmin": false,
    "umur": 20,
    "__v": 0
  },
]
```

## Get User By Id (admin)

Request :

- Method : `GET`
- Endpoint : `api/users/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "success",
"message": "user found",
"data": {
		"_id": "6387041b3307128bb73f69db",
    "nama": "Abil",
    "email": "abil@gmail.com",
    "isAdmin": false,
    "umur": 20,
    "__v": 0
  }
```

## Update User Role (admin)

Request :

- Method : `PUT`
- Endpoint : `api/users/:id`
- Header :
  - Content-Type: application/json
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
	"isAdmin": true
}
```

Response :

```json
"status": "success",
"message": "user role updated successfully",
```

## Delete User (admin)

Request :

- Method : `DELETE`
- Endpoint : `api/users/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "success",
"message": "user deleted successfully"
```
