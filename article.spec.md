## Article

| Field Name | Type     | Description            |
| ---------- | -------- | ---------------------- |
| _id        | ObjectId | Article's ID           |
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
          "category": [
              "63865ec7635479c3f841f6bc",
              "63865ed9635479c3f841f6c1"
          ],
          "date": "2022-11-30T09:15:02.832Z"
      },
      {
          "_id": "63871f163307128bb73f69ff",
          "title": "Coba Judul Article 3",
          "slug": "coba-judul-article-3",
          "desc": "alkfjasflkajsfalskf aslfkjasflkajfalskfjaawfaasdf asdlaksjdawfasdf asdflkjasdflawekfjasdf asdfasdlfkj",
          "image": "image/coba3.jpg",
          "author": "admin",
          "category": [
              "63865ec7635479c3f841f6bc"
          ],
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
      "category": [
          "63865ec7635479c3f841f6bc",
          "63865ed9635479c3f841f6c1"
      ],
      "date": "2022-11-30T09:15:02.832Z"
  }
}
```

## Add Article (admin)

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

## Update Article By Slug (admin)

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

## Delete Article By Slug (admin)

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

## Delete All Articles (admin)

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