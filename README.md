# express-crash-course

Trying to follow simple hands on examples to get to know express a little bit better.

## Scribbles and notes

#### 1. Overview:-

- Minimal, fast framework
- Backend framework
- Used for
  - Server rendered apps
  - API/Microservices
- Basic route handling
  - Req object - http req properties, like url paramters, query strings,data sent within the body,http headers
  - Middleware - change/add things to req
    - Res obj - http response, use this to send back json data, render a template, redirect, etc
  - Parse incoming data with body parser
  - Middleware
  - Functions that have access to req and response objects

#### 2. Hands On

- Cannot GET /
  - / - is the route for the index.js page
    Express cannot find a route handler for /
- Nodemon
  - Too not reset the server everytime we make a change
  - Nodemon constantly watches our server
  - Npm I -D nodemon (D- only for development, not production)
  - To use it :-
  - § Go to package.json
  - § Create 2 scripts:-
    - □ 'start':'node index' - keep resetting the server every time you make a change
    - □ 'dev':'nodemon index' - constantly watches server
- Create a Route
  - App.get('route',function);
  - Every route we create has access tp req and res object
  - App.get('/',(req,res)=>{});
  - To get express router
  - Const express= require('express')
  - Const router=express.Router();
    - Router.get()
- Sending things as res
  - Send a file
  - Send json
  - Render html template
- Setting static folder (public folder)
  - app.use();
  - § Use is the method to use when we want to use our own middleware
  - § app.use(express.static(path.join(\_\_dirname, 'public')));
- What we actually use express for
  - To build json api - connect from front end
  - Render template, where you can insert dynamic data
- Creating/adding something to server/database - POST request
  - To handle post req :- router.post
  - Sending post req,we get 200 ok resp but no data
  - We need body parser to read data sent via post
  - Initialize express body parser as middleware
  - App.use(express.json())
  - To handle url encoded data
  - App.use(express.urlencoded({extend:false}))
  - If we are using a database like mongodb, it generates ids for us. In this case, I installed a package called 'uuid' for random id generation.
- Update something on the server - PUT request
  - Router.put()
  - Delete a member - DELETE
  - Rendering templates using a template engine
  - [Express-handlebars](https://github.com/ericf/express-handlebars)
  - Add some middleware so that express knows how to use handlebars
    - app.engine('handlebars', hbs.engine);
    - app.set('view engine', 'handlebars');
  - [Get bootstrap](https://getbootstrap.com)
  - Form
    - create a form to make req to api to add a member through the form
