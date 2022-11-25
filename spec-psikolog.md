## Get All Layanan (admin)

Request :

  - Method: ```GET```
  - Endpoint: ```api/layanan```
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
            "nama_layanan": "string"
        },
        {
            "nama_layanan": "string"
        }
    ]
}
``` 

## Get Id Layanan (admin)

Request : 
  
  - Method: ```GET```
  - Endpoint: ```api/layanan/:id```
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
        "nama_layanan": "string"
    }
}
```

## Create Layanan (admin)
Request :
  
  - Method: ```POST```
  - Endpoint: ```/api/layanan```
  - Header: 
    
    - Content-Type: application/json
    - Accept: application/json
    - Authorization: ```your token```

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
        "nama_layanan": "string"
    }
}
```

## Update Layanan (admin)
Request :
  
  - Method: ```PUT```
  - Endpoint: ```api/layanan/:id```
  - Header: 
    - Content-Type: application/json
    - Accept: application/json
    - Authorization: ```your token```

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

## Delete Id Layanan (admin)
Request :

  - Method: ```DELETE```
  - Endpoint: ```/api/layanan/:id```
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

## Delete All Layanan (admin)
Request : 

  - Method: ```DELETE```
  - Endpoint: ```/api/layanan```
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

## Create Psikolog (Admin)

Request :

  - Method : ```POST```
  - Endpoint : ```api/psikolog```
  - Header : 

    - Content-Type : application/json
    - Accept : application/json
    - Authorization : ```your token```
  
  - Body:
```json
{
    "foto" : "string",
    "nama_psikolog" : "string",
    "pengalaman" : "string",
    "pendidikan" : "string",
    "jenis_kelamin" : "string",
    "deskripsi" : "text",
    "harga" : "decimal",
    "layanan" : {
        "_id" : "string"
    }
}
```

Response : 
```json
{
    "status": "string",
    "message": "string",
    "data": {
        "foto" : "string",
        "nama_psikolog" : "string",
        "pengalaman" : "string",
        "pendidikan" : "string",
        "jenis_kelamin" : "string",
        "deskripsi" : "text",
        "harga" : "decimal",
        "layanan": [
          {
            "_id": "string"
          }
        ],
        "_id": "string",
        "__v": 0
    }
}
```
## Get Psikolog 

Request :

  - Method : ```GET```
  - Endpoint : ```api/psikolog/{id}```
  - Header : 
    
    - Accept: application/json

Response :
```json
{
    "status": "string",
    "message": "string",
    "data": {
        "_id": "string",
        "foto" : "string",
        "nama_psikolog" : "string",
        "pengalaman" : "string",
        "pendidikan" : "string",
        "jenis_kelamin" : "string",
        "deskripsi" : "text",
        "harga" : "decimal",
        "layanan": [
            {
                "_id": "string",
                "nama_layanan": "string",
            }
        ],
        "__v": 0
    }
}
```

## Update Psikolog (Admin)

Request : 

  - Method : ```PUT```
  - Endpoint : ```api/psikolog/{id}```
  - Header : 

    - Content-Type: application/json
    - Accept: application/json
    - Authorization: ```your token```

  - Body:
```json
{
    "foto" : "string",
    "nama_psikolog" : "string",
    "pengalaman" : "string",
    "pendidikan" : "string",
    "jenis_kelamin" : "string",
    "deskripsi" : "text",
    "harga" : "decimal",
    "layanan" : {
        "_id" : "string"
    }
}
```

Response: 

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "foto" : "string",
        "nama_psikolog" : "string",
        "pengalaman" : "string",
        "pendidikan" : "string",
        "jenis_kelamin" : "string",
        "deskripsi" : "text",
        "harga" : "decimal",
        "layanan": [
          {
            "_id": "string"
          }
        ],
        "_id": "string",
        "__v": 0
    }
}
```

## Get All Psikolog

Request : 
  
  - Method : ```GET```
  - Endpoint : ```/api/psikolog```
  - Header : 

    - Accept: application/json

Response : 

```json
{
    "status": "string",
    "message": "string",
    "data": [
        {
            "_id": "string",
            "foto" : "string",
            "nama_psikolog" : "string",
            "pengalaman" : "string",
            "pendidikan" : "string",
            "jenis_kelamin" : "string",
            "deskripsi" : "text",
            "harga" : "decimal",
            "layanan": [
                {
                    "_id": "string",
                    "nama_layanan": "string",
                }
            ],
            "__v": 0
        },
        {
            "_id": "string",
            "foto" : "string",
            "nama_psikolog" : "string",
            "pengalaman" : "string",
            "pendidikan" : "string",
            "jenis_kelamin" : "string",
            "deskripsi" : "text",
            "harga" : "decimal",
            "layanan": [
                {
                    "_id": "string",
                    "nama_layanan": "string",
                }
            ],
            "__v": 0
        }
    ]
}
```

## Delete Get Psikolog (Admin)

Request : 
  
  - Method : ```DELETE```
  - Endpoint : ```api/psikolog/{id}```
  - Header : 

    - Accept: application/json
    - Authorization: ```your token```

Response :
```json
{
    "status": "string",
    "message": "string"
}
```

## Delete All Psikolog (Admin)

Request :
  
  - Method : ```DELETE```
  - Endpoint : ```api/psikolog```
  - Header : 

    - Accept: application/json
    - Authorization: ```your token```

Response :
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