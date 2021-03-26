# MERN Auth server

this is an express api that does simple auth with 'jwt tokens' _AKA_ **'JSON Web Tokens Tokens'**

## Installing this app:

* clone this repo
* cd into the folder you just cloned
* `npm i` to install the required packages
* `touch .env` for enviromental variables
* put the following in your .env file:
```
PORT=3001
MONGODB_URI=mongodb://localhost/mernAuth
JWT_SECRET=yourSuperDuperBigSecret
```
* `nodemon` to start the server
* a postman collection of the routes can be found here: https://www.getpostman.com/collections/2a35a65f2ba4993cd2fc