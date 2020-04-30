# README
 ## INSTALL DOCKER & DOCKER-COMPOSE

 ### **ubuntu**
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose
``` 

### **mac**
non lo so... forse
```
brew install docker
brew install docker-compose
```
??????

---
 
 ## RUN DOCKER
```
 docker-compose build
 docker-compose up
``` 
---
---

# REST CALL

 ## CREATE

- #### **url** [POST]
```
http://localhost:8080/create
``` 
- #### **body**
```
{
	"title": "nuova versione",
	"percentage": 20
}
```
- ### **return**
```
CODE:201 CREATED
``` 

``` 
{
    "title": "nuova versione",
    "percentage": 20,
    "uuid": "e8503a20-c4fd-4e9a-b6d2-850f80495625"
}
``` 
## READ

-  #### **url** [GET]
```
 http://localhost:8080/search

```

- ### **return**
```
CODE:200 OK
```

```
[
    {
        "_id": 4,
        "uuid": "e8503a20-c4fd-4e9a-b6d2-850f80495625",
        "title": "nuova versione",
        "done": false,
        "percentage": 80,
        "deleted": false
    }
]
``` 

 ## UPDATE

- #### **url** [POST]
```
http://localhost:8080/update
```

- #### **body**
```
{
    "title": "nuova versione",
    "percentage": 80,
    "uuid": "e8503a20-c4fd-4e9a-b6d2-850f80495625"
}

```
- ### **return**
```
CODE:201 CREATED
``` 
 ## DELETE

- #### **url** [POST]
```
http://localhost:8080/delete
```

- #### **body**
```
{
    "title": "nuova versione",
    "percentage": 80,
    "uuid": "e8503a20-c4fd-4e9a-b6d2-850f80495625"
}

```
- ### **return**
```
CODE:201 CREATED
``` 
