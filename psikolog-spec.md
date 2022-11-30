# Psikolog

| Field Name | Type     | Description      |
| ---------- | -------- | ---------------- |
| _id        | ObjectId | Psikolog ID     |
| nama_psikolog     | string   | Psikolog Nama   |
| jenis_kelamin        | string | Psikolog Jenis Kelamin     |
| pendidikan        | string | Psikolog Pendidikan     |
| pengalaman        | string | Psikolog Pengalaman     |
| harga        | number | Psikolog Harga     |
| deskripsi        | text | Psikolog Deskripsi     |
| image_url        | string | Psikolog Image_URL     |
| layanan        | ObjectId | Psikolog Layanan ID     |

## Get All Psikolog

Request :

  - Method: ```GET```
  - Endpoint: ```api/psikolog```
  - Header: 

    - Accept : application/json
    - Authorization : ```your token```

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

## Get Id Layanan

Request : 
  
  - Method: ```GET```
  - Endpoint: ```api/psikolog/:id```
  - Header:
    
    - Accept: application/json
    - Authorization : ```your token```

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

## Create Psikolog (admin)
Request :
  
  - Method: ```POST```
  - Endpoint: ```/api/psikolog```
  - Header: 
    
    - Content-Type: application/json
    - Accept: application/json
    - Authorization: ```your token```

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

## Update Psikolog (admin)
Request :
  
  - Method: ```PUT```
  - Endpoint: ```api/psikolog/:id```
  - Header: 
    - Content-Type: application/json
    - Accept: application/json
    - Authorization: ```your token```

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

## Delete Id Psikolog (admin)
Request :

  - Method: ```DELETE```
  - Endpoint: ```/api/psikolog/:id```
  - Header: 
    
    - Accept: application/json
    - Authorization: ```your token```

Response : 
```json
{
    "status": "string",
    "message": "string"
}
```

## Delete All Psikolog (admin)
Request : 

  - Method: ```DELETE```
  - Endpoint: ```/api/psikolog```
  - Header:
    
    - Accept: application/json
    - Authorization: ```your token```

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