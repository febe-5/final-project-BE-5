# Final Project Group BE-5

Repo ini dibuat guna memenuhi tugas final project kelompok `BE-5`

# API Specs

## Attention

The description below will be found in each function

(`user`, `admin`) -> Can be accessed by users and admins

(`admin`) -> Only accessible to admin

() -> Can be accessed even by unregistered users

## Authentication

All APIs with with role user or admin or both must must use this authentication.

Request :

- Header :
  - Authorization : "your token which is earned after login"

## List Entity

1. [Users](https://github.com/febe-5/final-project-BE-5#users)
2. [Article](https://github.com/febe-5/final-project-BE-5#article)
3. [Category](https://github.com/febe-5/final-project-BE-5#category)
4. [Klinik](https://github.com/febe-5/final-project-BE-5#klinik)
5. [Psikolog](https://github.com/febe-5/final-project-BE-5#psikolog)
6. [Layanan](https://github.com/febe-5/final-project-BE-5#layanan)
7. [Metode](https://github.com/febe-5/final-project-BE-5#metode)
8. [Pembayaran](https://github.com/febe-5/final-project-BE-5#pembayaran)

# Users

| Field Name | Type     | Description    |
| ---------- | -------- | -------------- |
| \_id       | ObjectId | Users ID       |
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

## Show Profile (`user`, `admin`)

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

## Update Profile (`user`, `admin`)

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

## Get All User (`admin`)

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

## Get User By Id (`admin`)

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

## Update User Role (`admin`)

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

## Delete User (`admin`)

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

# Article

| Field Name | Type     | Description            |
| ---------- | -------- | ---------------------- |
| \_id       | ObjectId | Article's ID           |
| title      | string   | Article's Title        |
| slug       | string   | Article's Identifier   |
| desc       | string   | Article's Description  |
| image      | string   | Article's URL Image    |
| author     | string   | Article's Author       |
| category   | array    | Article's Category     |
| date       | date     | Article's Created Date |

## Get All Articles

- Method : `GET`
- Endpoint : `api/articles`
- Header :
  - Accept: application/json

Response :

```json
{
  "status": "success",
  "message": "all articles found",
  "data": [
    {
      "_id": "63871f163307128bb73f69fe",
      "title": "Coba Judul Article 2",
      "slug": "coba-judul-article-2",
      "desc": "alkfjasflkajsfalskf aslfkjasflkajfalskfjaawfaasdf asdlaksjdawfasdf asdflkjasdflawekfjasdf asdfasdlfkj",
      "image": "image/coba2.jpg",
      "author": "admin",
      "category": ["63865ec7635479c3f841f6bc", "63865ed9635479c3f841f6c1"],
      "date": "2022-11-30T09:15:02.832Z"
    },
    {
      "_id": "63871f163307128bb73f69ff",
      "title": "Coba Judul Article 3",
      "slug": "coba-judul-article-3",
      "desc": "alkfjasflkajsfalskf aslfkjasflkajfalskfjaawfaasdf asdlaksjdawfasdf asdflkjasdflawekfjasdf asdfasdlfkj",
      "image": "image/coba3.jpg",
      "author": "admin",
      "category": ["63865ec7635479c3f841f6bc"],
      "date": "2022-11-30T09:15:02.832Z"
    }
  ]
}
```

## Get Article By Slug

- Method : `GET`
- Endpoint : `api/articles/:slug`
- Header :
  - Accept: application/json

Response :

```json
{
  "status": "success",
  "message": "article found",
  "data": {
    "_id": "63871f163307128bb73f69fe",
    "title": "Coba Judul Article 2",
    "slug": "coba-judul-article-2",
    "desc": "alkfjasflkajsfalskf aslfkjasflkajfalskfjaawfaasdf asdlaksjdawfasdf asdflkjasdflawekfjasdf asdfasdlfkj",
    "image": "image/coba2.jpg",
    "author": "admin",
    "category": ["63865ec7635479c3f841f6bc", "63865ed9635479c3f841f6c1"],
    "date": "2022-11-30T09:15:02.832Z"
  }
}
```

## Add Article (`admin`)

- Method : `POST`
- Endpoint : `api/articles`
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`
- Body :

```json
{
  "title": "Coba Judul Article 2",
  "desc": "alkfjasflkajsfalskf aslfkjasflkajfalskfjaawfaasdf asdlaksjdawfasdf asdflkjasdflawekfjasdf asdfasdlfkj",
  "image": "image/coba2.jpg",
  "category": [
    {
      "_id": "63865ec7635479c3f841f6bc"
    },
    {
      "_id": "63865ed9635479c3f841f6c1"
    }
  ]
}
```

Response :

```json
{
  "status": "success",
  "message": "article created successfully"
}
```

## Update Article By Slug (`admin`)

- Method : `PUT`
- Endpoint : `api/articles/:slug`
- Header :
  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`
- Body :

```json
{
  "title": "Coba Judul Article 2",
  "desc": "alkfjasflkajsfalskf aslfkjasflkajfalskfjaawfaasdf asdlaksjdawfasdf asdflkjasdflawekfjasdf asdfasdlfkj",
  "image": "image/coba2.jpg",
  "category": [
    {
      "_id": "63865ec7635479c3f841f6bc"
    },
    {
      "_id": "63865ed9635479c3f841f6c1"
    }
  ]
}
```

Response :

```json
{
  "status": "success",
  "message": "article updated successfully"
}
```

> `request-body` at least contains 1 field between all fields.

## Delete Article By Slug (`admin`)

- Method : `DELETE`
- Endpoint : `api/articles/:slug`
- Header :
  - Accept: application/json
  - Authorization: `your token`

Response :

```json
{
  "status": "success",
  "message": "article deleted successfully"
}
```

## Delete All Articles (`admin`)

- Method : `DELETE`
- Endpoint : `api/articles`
- Header :
  - Accept: application/json
  - Authorization: `your token`

Response :

```json
{
  "status": "success",
  "message": "all your articles were successfully deleted"
}
```

# Category

| Field Name | Type     | Description     |
| ---------- | -------- | --------------- |
| \_id       | ObjectId | Article's ID    |
| nama       | string   | Article's Title |

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

## Add Category (`admin`)

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

## Update Category (`admin`)

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

## Delete Category (`admin`)

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

## Delete All Categories (`admin`)

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

# Klinik

| Field Name | Type     | Description    |
| ---------- | -------- | -------------- |
| \_id       | ObjectId | Klinik ID      |
| url_gambar | string   | Gambar Klinik  |
| nama       | string   | Nama Klinik    |
| lokasi     | string   | Lokasi Klinik  |
| profil     | string   | Profil Klinik  |
| email      | string   | Email Klinik   |
| no_telp    | string   | No Telp Klinik |

## Get All Klinik

Request :

- Method : `GET`
- Endpoint : `api/klinik`
- Header :
  - Accept : application/json

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

## Get Klinik By Id

Request :

- Method : `GET`
- Endpoint : `api/klinik/:id`
- Header :
  - Accept : application/json
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

## Post klinik (`Admin`)

Request :

- Method : `POST`
- Endpoint : `api/klinik`
- Header :
  - Content-Type: application/json
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

## Update Klinik By Id (`Admin`)

Request :

- Method : `PUT`
- Endpoint : `api/klinik/:id`
- Header :
  - Content-Type: application/json
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

## Delete all klinik (`admin`)

Request :

- Method : `DELETE`
- Endpoint : `api/klinik`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "Delete all data success"
}
```

## Delete klinik by id (`admin`)

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

# Psikolog

| Field Name    | Type     | Description            |
| ------------- | -------- | ---------------------- |
| \_id          | ObjectId | Psikolog ID            |
| nama_psikolog | string   | Psikolog Nama          |
| jenis_kelamin | string   | Psikolog Jenis Kelamin |
| pendidikan    | string   | Psikolog Pendidikan    |
| pengalaman    | string   | Psikolog Pengalaman    |
| harga         | number   | Psikolog Harga         |
| deskripsi     | text     | Psikolog Deskripsi     |
| image_url     | string   | Psikolog Image_URL     |
| layanan       | ObjectId | Psikolog Layanan ID    |

## Get All Psikolog

Request :

- Method: `GET`
- Endpoint: `api/psikolog`
- Header:

  - Accept : application/json

Response :

```json
{
  "status": "string",
  "message": "string",
  "data": [
    {
      "_id": "string",
      "nama_psikolog": "string",
      "jenis_kelamin": "string",
      "Pendidikan": "string",
      "Pengalaman": "string",
      "harga": "number",
      "deskripsi": "string",
      "image_url": "string",
      "layanan": [
        {
          "_id": "string"
        },
        {
          "_id": "string"
        }
      ],
      "__v": 0
    },
    {
      "_id": "string",
      "nama_psikolog": "string",
      "jenis_kelamin": "string",
      "Pendidikan": "string",
      "Pengalaman": "string",
      "harga": "number",
      "deskripsi": "string",
      "image_url": "string",
      "layanan": [
        {
          "_id": "string"
        },
        {
          "_id": "string"
        }
      ],
      "__v": 0
    }
  ]
}
```

## Get Id Psikolog

Request :

- Method: `GET`
- Endpoint: `api/psikolog/:id`
- Header:

  - Accept: application/json

Response :

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "_id": "string",
    "nama_psikolog": "string",
    "jenis_kelamin": "string",
    "Pendidikan": "string",
    "Pengalaman": "string",
    "harga": "number",
    "deskripsi": "string",
    "image_url": "string",
    "layanan": [
      {
        "_id": "string"
      },
      {
        "_id": "string"
      }
    ]
  }
}
```

## Create Psikolog (`admin`)

Request :

- Method: `POST`
- Endpoint: `/api/psikolog`
- Header:

  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`

- Body:

```json
{
  "nama_psikolog": "string",
  "jenis_kelamin": "string",
  "Pendidikan": "string",
  "Pengalaman": "string",
  "harga": "number",
  "deskripsi": "string",
  "image_url": "string",
  "layanan": [
    {
      "_id": "string"
    },
    {
      "_id": "string"
    }
  ]
}
```

Response:

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "nama_psikolog": "string",
    "jenis_kelamin": "string",
    "Pendidikan": "string",
    "Pengalaman": "string",
    "harga": "number",
    "deskripsi": "string",
    "image_url": "string",
    "layanan": [
      {
        "_id": "string"
      },
      {
        "_id": "string"
      }
    ]
  }
}
```

## Update Psikolog (`admin`)

Request :

- Method: `PUT`
- Endpoint: `api/psikolog/:id`
- Header:

  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`

- Body:

```json
{
  "nama_psikolog": "string",
  "jenis_kelamin": "string",
  "Pendidikan": "string",
  "Pengalaman": "string",
  "harga": "number",
  "deskripsi": "string",
  "image_url": "string",
  "layanan": [
    {
      "_id": "string"
    },
    {
      "_id": "string"
    }
  ]
}
```

Response :

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "nama_psikolog": "string",
    "jenis_kelamin": "string",
    "Pendidikan": "string",
    "Pengalaman": "string",
    "harga": "number",
    "deskripsi": "string",
    "image_url": "string",
    "layanan": [
      {
        "_id": "string"
      },
      {
        "_id": "string"
      }
    ],
    "_id": "string",
    "__v": 0
  }
}
```

## Delete Id Psikolog (`admin`)

Request :

- Method: `DELETE`
- Endpoint: `/api/psikolog/:id`
- Header:

  - Accept: application/json
  - Authorization: `your token`

Response :

```json
{
  "status": "string",
  "message": "string"
}
```

## Delete All Psikolog (`admin`)

Request :

- Method: `DELETE`
- Endpoint: `/api/psikolog`
- Header:

  - Accept: application/json
  - Authorization: `your token`

Response:

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "acknowledged": "boolean",
    "deletedCount": "integer"
  }
}
```

# Layanan

| Field Name   | Type     | Description  |
| ------------ | -------- | ------------ |
| \_id         | ObjectId | Layanan ID   |
| nama_layanan | string   | Layanan nama |

## Get All Layanan

Request :

- Method: `GET`
- Endpoint: `api/layanan`
- Header:

  - Accept : application/json

Response :

```json
{
  "status": "string",
  "message": "string",
  "data": [
    {
      "_id": "string",
      "nama_layanan": "string",
      "__v": 0
    },
    {
      "_id": "string",
      "nama_layanan": "string",
      "__v": 0
    }
  ]
}
```

## Get Id Layanan

Request :

- Method: `GET`
- Endpoint: `api/layanan/:id`
- Header:

  - Accept: application/json

Response :

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "_id": "string",
    "nama_layanan": "string"
  }
}
```

## Create Layanan (`admin`)

Request :

- Method: `POST`
- Endpoint: `/api/layanan`
- Header:

  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`

- Body:

```json
{
  "nama_layanan": "string"
}
```

Response:

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "nama_layanan": "string",
    "_id": "string",
    "__v": 0
  }
}
```

## Update Layanan (`admin`)

Request :

- Method: `PUT`
- Endpoint: `api/layanan/:id`
- Header:

  - Content-Type: application/json
  - Accept: application/json
  - Authorization: `your token`

- Body:

```json
{
  "nama_layanan": "string"
}
```

Response :

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "nama_layanan": "string",
    "_id": "string",
    "__v": 0
  }
}
```

## Delete Id Layanan (`admin`)

Request :

- Method: `DELETE`
- Endpoint: `/api/layanan/:id`
- Header:

  - Accept: application/json
  - Authorization: `your token`

Response :

```json
{
  "status": "string",
  "message": "string"
}
```

## Delete All Layanan (`admin`)

Request :

- Method: `DELETE`
- Endpoint: `/api/layanan`
- Header:

  - Accept: application/json
  - Authorization: `your token`

Response:

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "acknowledged": "boolean",
    "deletedCount": "integer"
  }
}
```

| Field Name | Type     | Description |
| ---------- | -------- | ----------- |
| \_id       | ObjectId | Id Metode   |
| nama       | string   | nama Metode |

## Get All metode (User, Admin)

Request :

- Method : `GET`
- Endpoint : `api/metode`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "Get data success",
  "data": [
    {
      "_id": "string",
      "nama": "string"
    }
  ]
}
```

## Get Metode By Id (User, Admin)

Request :

- Method : `GET`
- Endpoint : `api/metode/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

```json
{
  "status": "success",
  "message": "Get data success",
  "data": {
    "_id": "string",
    "nama": "string"
  }
}
```

## Post Metode(Admin)

Request :

- Method : `POST`
- Endpoint : `api/metode/`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "nama": "string"
}
```

Response :

```json
{
  "status": "success",
  "message": "Post data success",
  "data": {
    "_id": "string",
    "nama": "string"
  }
}
```

## Update Metode By Id(Admin)

Request :

- Method : `PUT`
- Endpoint : `api/metode/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "nama": "string"
}
```

Response :

```json
{
  "status": "success",
  "message": "Update data success",
  "data": {
    "_id": "string",
    "nama": "string"
  }
}
```

## Delete Metode By Id(Admin)

Request :

- Method : `DELETE`
- Endpoint : `api/metode/:id`
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

## Delete All Metode By Id(Admin)

Request :

- Method : `DELETE`
- Endpoint : `api/metode/`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "Delete all data success"
}
```

| Field Name  | Type     | Description |
| ----------- | -------- | ----------- |
| \_id        | ObjectId | Id Metode   |
| id_psikolog | ObjectId | Id Metode   |
| id_user     | ObjectId | Id Metode   |
| jadwal      | String   | Id Metode   |
| id_metode   | ObjectId | Id Metode   |

## Get All Data Pembayaran (admin)

Request :

- Method : `GET`
- Endpoint : `api/pembayaran`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
"status": "string",
"message": "string",
"data": [
  {
    "id_psikolog": {
        "_id": "string",
        "nama_psikolog": "string",
        "no_telp": "string",
        "pengalaman": "string",
        "jadwal": "string",
        "harga": "integer",
        }
    "id_user": {
        "_id": "string",
        "nama": "string",
        "email": "string",
        "password": "string",
        "umur": "integer",
        "isAdmin": "boolean",
    }
    "jadwal": "string",
    "id_metode":  {
        "_id": "string",
        "nama": "string",
      },
  },
]
```

## Delete All Data Pembayaran (Admin)

Request :

- Method : `DELETE`
- Endpoint : `api/pembayaran`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "Delete all data success"
}
```

## Create payment (User)

Request :

- Method : `POST`
- Endpoint : `api/pembayaran`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "id_psikolog": "ObjectId('string')",
  "id_user": "ObjectId('string')",
  "jadwal": "string",
  "id_metode": "ObjectId('string')"
}
```

Response :

```json
{
  "status": "success",
  "message": "pending payment"
}
```

## Update Data Pembayaran By Id (User)

Request :

- Method : `PUT`
- Endpoint : `api/pembayaran/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`
- Body :

```json
{
  "bukti_bayar": "string"
}
```

Response :

```json
{
  {
  "status": "success",
  "message": "payment success",
  "data": {
    "nama_psikolog": "string",
    "no_telp": "string"
  }
}
}
```

## Get Data Pembayaran By Id (User)

Request :

- Method : `POST`
- Endpoint : `api/pembayaran/:id`
- Header :
  - Accept : application/json
  - Authorization : `your token`

Response :

```json
{
  "status": "success",
  "message": "Get data success",
  "data": {
    "_id": "string",
    "id_psikolog": "string",
    "id_user": "string",
    "jadwal": "string",
    "id_metode": "string"
  }
}
```

## Delete Data Pembayaran By Id (User)

Request :

- Method : `Delete`
- Endpoint : `api/pembayaran/:id`
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
