# API Specs

## Authentication

All APIs with with role user or admin or both must must use this authentication.

Request :

- Header :
  - Authorization : "your token which is earned after login"

## Get All Klinik (User, Admin)

Request :

- Method : `GET`
- Endpoint : `api/klinik`
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "string",
  "message": "string",
  "dataKlinik": [
    {
      "_id": "string",
      "url_gambar": "string",
      "nama": "string",
      "lokasi": "string",
      "profil": "string",
      "email": "string",
      "no_telp": "string"
    }
  ]
}
```

## Get Klinik By Id (User, Admin)

Request :

- Method : `GET`
- Endpoint : `api/klinik/:id`
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - Authorization : `your token`
- Body :

Response :

```json
{
  "status": "string",
  "message": "string",
  "dataKlinik": [
    {
      "_id": "string",
      "url_gambar": "string",
      "nama": "string",
      "lokasi": "string",
      "profil": "string",
      "email": "string",
      "no_telp": "string"
    }
  ]
}
```

## Post klinik (Admin)

Request :

- Method : `POST`
- Endpoint : `api/klinik`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "url_gambar": "string",
  "nama": "string",
  "lokasi": "string",
  "profil": "string",
  "email": "string",
  "no_telp": "string"
}
```

Response :

```json
{
  "status": "string",
  "message": "string",
  "dataKlinik": [
    {
      "_id": "string",
      "url_gambar": "string",
      "nama": "string",
      "lokasi": "string",
      "profil": "string",
      "email": "string",
      "no_telp": "string"
    }
  ]
}
```

## Update Klinik By Id (Admin)

Request :

- Method : `PUT`
- Endpoint : `api/klinik/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "url_gambar": "string",
  "nama": "string",
  "lokasi": "string",
  "profil": "string",
  "email": "string",
  "no_telp": "string"
}
```

Response :

```json
{
  "status": "string",
  "message": "string",
  "dataKlinik": [
    {
      "_id": "string",
      "url_gambar": "string",
      "nama": "string",
      "lokasi": "string",
      "profil": "string",
      "email": "string",
      "no_telp": "string"
    }
  ]
}
```

## Delete all klinik (admin)

Request :

- Method : `DELETE`
- Endpoint : `api/klinik`
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "Delete all data success"
}
```

## Delete klinik by id (admin)

Request :

- Method : `Delete`
- Endpoint : `api/klinik/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "Delete data success"
}
```
