 module.exports = {
   "type": "mysql",
   "host": process.env.HOST,
   "port": process.env.PORT,
   "username": process.env.USERNAME,
   "password": process.env.PASSWORD,
   "database": "digital-hospital",
   "entities": ["dist/entities/**/*.js"],
   "synchronize": true 
 }