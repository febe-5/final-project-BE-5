# API Specs

## Authentication

All APIs with with role user or admin or both must must use this authentication.

Request :

- Header :
  - Authorization : "your token which is earned after login"

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
	"nama": "string",
	"email": "string",
	"password": "string"
}
```

- Body for `admin` :

```json
{
	"nama": "string",
	"email": "string",
	"password": "string",
	"isAdmin": "boolean"
}
```

Response :

```json
{
	"status": "string",
	"message": "string"
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
	"email": "string",
	"password": "string"
}
```

Response :

```json
{
	"status": "string",
	"message": "string",
	"accessToken": "string"
}
```

## Get Profile (user, admin)

Request :

- Method : `GET`
- Endpoint : `api/profile`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
	"status": "string",
	"message": "string",
	"data": {
		"_id": "string",
		"nama": "string",
		"email": "string"
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
	"nama": "string",
	"email": "string",
	"password": "string"
}
```

Response :

```json
{
	"status": "string",
	"message": "string"
}
```

## Get All User (admin)

Request :

- Method : `GET`
- Endpoint : `api/users`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "string",
"message": "string",
"data": [
  {
		"_id": "string",
    "nama": "string",
    "email": "string",
    "umur": "number",
    "isAdmin": "boolean"
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
"status": "string",
"message": "string",
"data": {
		"_id": "string",
    "nama": "string",
    "email": "string",
    "isAdmin": "boolean"
  }
```

## Update User (admin)

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
	"nama": "string",
	"email": "string",
	"password": "string",
	"isAdmin": "boolean"
}
```

Response :

```json
"status": "string",
"message": "string",
"data": {
		"_id": "string",
    "nama": "string",
    "email": "string",
    "isAdmin": "boolean"
  }
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
"status": "string",
"message": "string"
```
