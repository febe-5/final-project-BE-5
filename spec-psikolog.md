## Get All Layanan (admin)

Request :

  - Method: GET
  - Endpoint: api/layanan
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
    ]
}
``` 

## Get Id Layanan (admin)

Request : 
  
  - Method: GET
  - Endpoint: api/layanan/:id
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
        "nama_layanan": "string"
        "_id": "string",
        "__v": 0
    }
}
```

## Delete Id Layanan (admin)
Request :

  - Method: ```DELETE```
  - Endpoint: ```/api/layanan/:id
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