## Category

| Field Name | Type     | Description      |
| ---------- | -------- | ---------------- |
| _id        | ObjectId | Article's ID     |
| nama       | string   | Article's Title  |

## Get All Categories

- Method : `GET`
- Endpoint : `api/categories`
- Header :
  - Accept : application/json

Response :

```json
{
  "status": "success",
  "message": "all categories found",
  "data": [
      {
          "_id": "63865ec7635479c3f841f6bc",
          "nama": "Kecemasan"
      },
      {
          "_id": "63865ed9635479c3f841f6c1",
          "nama": "Trauma"
      }
  ]
}
```

## Get Category By Id

- Method : `GET`
- Endpoint : `api/categories/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "status": "success",
  "message": "category found",
  "data": {
      "_id": "63865ec7635479c3f841f6bc",
      "nama": "Kecemasan"
  }
}
```

## Add Category (admin)

- Method : `POST`
- Endpoint : `api/categories`
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`
- Body :

```json
{
  "nama": "Trauma"
}
```

Response :

```json
{
  "status": "success",
  "message": "new category created successfully"
}
```

## Update Category (admin)

- Method : `PUT`
- Endpoint : `api/categories/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`
- Body :

```json
{
  "nama": "Healing"
}
```

Response :

```json
{
  "status": "success",
  "message": "category updated successfully"
}
```

## Delete Category (admin)

- Method : `DELETE`
- Endpoint : `api/categories/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "category deleted successfully"
}
```

## Delete All Categories (admin)

- Method : `DELETE`
- Endpoint : `api/categories`
- Header :
  - Accept: application/json
  - Authorization: `your token`

Response :

```json
{
  "status": "success",
  "message": "all categories deleted successfully"
}
```