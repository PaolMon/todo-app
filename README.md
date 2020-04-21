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
	"msg": {
		"author": "Paolo",
		"task": "iniziare progetto"
	}
}
```
- ### **return**
```
CODE:201 CREATED
``` 
## READ

-  #### **url** [GET]
```
 http://localhost:8080/search/{author}

```

- ### **return**
```
CODE:200 OK
```

```
[
    {
        "_id": 2,
        "uuid": "3aac1fc0-0906-4bc3-a9f5-6662698c993c",
        "deleted": false,
        "author": "Paolo",
        "task": "iniziare progetto",
        "done": true
    },
    {
        "_id": 20,
        "uuid": "06a77255-2c95-479a-b268-6c3a8627e1f3",
        "deleted": false,
        "author": "Paolo",
        "task": "creare repository GIT",
        "done": true
    },
    {
        "_id": 21,
        "uuid": "4b0685ca-ba1f-4779-a6c6-46ce1099ee34",
        "deleted": false,
        "author": "Paolo",
        "task": "aggiornare progetto",
        "done": true
    },
    {
        "_id": 22,
        "uuid": "7819c876-5315-430f-8790-3717d8e2ddee",
        "deleted": false,
        "author": "Paolo",
        "task": "FIX nginx",
        "done": false
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
	"msg": {
		"uuid": "942b0a87-b2a2-4120-834b-36148993bc0",
		"task": "aggiornare progetto",
		"done": true
	}
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
	"msg": {
		"uuid": "942b0a87-b2a2-4120-834b-36148993bc0"
	}
}

```
- ### **return**
```
CODE:201 CREATED
``` 
