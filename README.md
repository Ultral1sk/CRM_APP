# CRM_APP

1   - app.js server created.
2   - gitignore file created and node_modules + the .env file added into it.
3   - MVC folder structure created.
4   - Instal dotenv package and hide mongoDB username and password.
4.3 - Inside the config folder we make the connection with mongoDB through mongoose.
4.6 - We require the mongo db connection we've created into our server meaning app.js because it is in another folder and then we call it over there connectDB. We also need to require the file  require('dotenv').config() so we can read our username and pw. 
4.8 - install the nodemon package and inside the package.json in the "scripts" add "start" : "nodemon app.js" the server file we want nodemon to start.
5   - Creating dashboard(home) and auth routes