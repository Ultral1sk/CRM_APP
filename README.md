# CRM_APP

1   - app.js server created.
2   - gitignore file created and node_modules + the .env file added into it.
3   - MVC folder structure created.
4   - Instal dotenv package and hide mongoDB username and password.
4.3 - Inside the config folder we make the connection with mongoDB through mongoose.

4.6 - We require the mongo db connection we've created into our server meaning app.js because it is in another folder and then we call it over there connectDB. We also need to require the file  require('dotenv').config() so we can read our username and pw.

4.8 - install the nodemon package and inside the package.json in the "scripts" add "start" : "nodemon app.js" the server file we want nodemon to start.

5   - Creating dashboard(home) and auth routes. When we requrire them from another folder we need to say app.use('/', requrie('foldername'));

6   - Inside model folder we create the schemas when we create them we need to require mongoose and also we need to export them with module.exports = mogoose.model('users', userSchema).

6.3 - if we want to test the schema we need to use the CRUD VERBS those request are inside the controller,
over there we create the requests.

6.6 - Creating api/auth/register route with authentication. Test post request available on the REGSTER ROUTE comming from the controller. On POST requst if user contains name,email,pass return 'success' else 'error'.

7   - Creating api/auth/login route with authentication bcrypt hashing jwt token. Test post request available on the REGSTER ROUTE comming from the controller. On POST requst if user contains email,pass return 'success' else 'error'.