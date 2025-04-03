# NodeJS Express

A simple Node.js and Express application with MySQL integration.

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/en/download/)
- **MySQL**: [Install MySQL]([https://dev.mysql.com/doc/refman/8.0/en/installing.html](https://dev.mysql.com/downloads/installer/))
---
## Installation & Setup for local deployment
### **1. Clone the Repository:**
```
git clone https://github.com/Killersea/NodeJS-Express.git
```

### **2. Navigate into the project directory:**
```
cd NodeJS-Express
```

### **3. Install the required dependencies:**
```
npm install

```
Create a .env file in the directory:
```sh
DB_USER="your mysql username"
DB_PASSWORD="your mysql password
DB_HOST="your mysql host"
DB_DATABASE="your database name"
DB_PORT="your mysql port"
LOCAL_HOST="your server port"
```

### **4. Set up the database by running the following:**
```
npm run setup-db
```
This will initialize your MySQL database.

### **5. Start the application:**
```
npm start
```
The app should now be running at [http://localhost:8081](http://localhost:8081)

The swagger should now be running at [http://localhost:8081/api-docs](http://localhost:8081/api-docs)

---
## API Endpoints
```
GET /api/user/{userId} #This will generate a single user.

PUT /api/user/{userId} #This will update a user in the system. If the user_isdel is 1, the user with that id will be deleted.

GET /api/user #This will all the users in the system.

POST /api/user #This will create a new user in the system. Only the user_fname and user_lname is required in the field.
```

---
## Model
```
{
  "user_id": 0,
  "user_fname": "string",
  "user_lname": "string",
  "user_isdel": 0
}
```

---
## Postman
Get User

![Get User](https://i.imgur.com/MxZWkbQ.png)

Update User

![Update User](https://i.imgur.com/OqdRBoE.png)

Delete User

![Delete User](https://i.imgur.com/oRromow.png)

Generate All User

![Generate All User](https://i.imgur.com/NxXAREu.png)

Create User

![Create](https://i.imgur.com/TxJ3sOq.png)


