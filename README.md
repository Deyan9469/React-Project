# Introduction :blush:
Hello, this is my Project for Soft-Uni called Bedsheet4You, a user-friendly UI/UX application.
<br>For the project I am using Vite + React

https://github.com/Deyan9469/React-Project/assets/123094953/e60dcd4a-a03c-449d-a65d-f78cad920fbc

# Start up :thumbsup:
To start the project you will need:
1. Set up 2 terminals one for folder `client` and another in folder `server`
2. In folder `client` type in terminal `npm install`
3. In folder `server` with the second terminal type `node server`, to start the server
4. In client terminal you can start the project with `npm run dev`

From there Vite will generate <http://localhost:3000>, click it and view my project for bedsheets shop.

# Idea :sparkles:
   <br> The idea of the project is for users to view and add bedsheets to sell, (but the cart functionality is "work in progress").

# Functionality :star:
The server that I'm using is from, "SoftUni" [practice server]( https://github.com/softuni-practice-server/softuni-practice-server) :octocat:. 

<br> In addition, if you want to work on the project, the APIs for the server database are:
<br>


| Service           | Endpoint                    | Requests      |
|-------------------|-----------------------------|---------------|
| User Service      | `http://localhost:3030/users` |               |
|                   | `/register`                   | POST          |
|                   | `/login`                      | POST          |
|                   | `/logout`                     | GET           |
| Collections Service | `http://localhost:3030/data` |               |
|                     | `/bedsheets`                  | GET, POST, PUT, DELETE |
| Comments Service  | `http://localhost:3030/comments` | GET, POST, DELETE |
