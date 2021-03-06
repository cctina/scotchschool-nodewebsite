# Tutorial Note: [Build A Node.js Website](https://school.scotch.io/build-a-nodejs-website) | [Scotch School](https://school.scotch.io)
## 0. Abstract
1. [Getting Started](#1)
2. [Creating our First Server](#2)
3. [Using Express and Nodemon](#3)
4. [Node Directory Structure](#4)
5. [Creating our Views](#5)
6. [Templating with EJS](#6)
7. [Passing Data to Views](#7)
8. [Form Routing](#8)
9. [Credit](#credit)

## <span id='1'>1. Getting started<span>

### Intialize a New Project 
(cmd through a console)

1. Download & install *node.js* from the website.
2. `mkdir <app_name>` Create a folder for the project.
3. `cd <app_name>` Go into the project folder. It's empty now.
4. `npm init` Step by step to create a *package.json* configuration file. 
5. `npm install <other_lib> --save` 
	- `<other_module>` ie. *express*. 
	- `--save` would make the module written in the *package.json* file as a dependency. It benefits for version controlling (ie. Git). After clones the repository, just excute `npm install`, and then all the dependecies libs would be downloaded.
6. `touch [<file_name>]`
	- `<file_name>` ie. *server.js*.
	- Create any numbers of file with your naming. Like `touch server.js dispatcher.js`.

### Git & .gitignore
1. Folder `node_module` needs to be ignore by git.
2. `touch .gitignore` Create a *.gitigonre* file in the project **root** folder. **NOT** in the *.git* folder!
3. Copy *Node.gitignore* content from [GitHub](https://github.com/github/gitignore).
4. Git add & commit the *.gitignore* file, the dir *node_module/* & files under it would be ignore!


## <span id='2'>2. Creating our First Server<span>

### server.js
1. Import module: `http`
2. Handle requests/respones
3. Response: Return string. (or html file...)
4. Create the server
5. Start server & listen on port xxx

## <span id='3'>3. Using Express and Nodemon<span>
(Remove all the contents from *server.js* and re-write it.)

### module 1: *express*
An important lib. Makes routing easier!

1. Require module *express*
2. Create `var app = express();` 
	- Initialize an object of express? (Excute the constructor of express?)
3. `app.listen(<port>, [callback])` Start server with a specific port. ([Link](http://expressjs.com/en/4x/api.html#app.listen))
4. `app.get(<path>, <handler(request, response)>)` Route our app. Set a handler for GET requests.

### module 2: *nodemon*
A good tool! Makes live changes without server restarted! (Only for development, so **DO NOT** install with `--save`!)

1. Giving cmd `npm install -g --force nodemon`. Install module *nodemon* forcely and globally. ([Link](https://teamtreehouse.com/community/nodemon-command-not-found))
2. `nodemon server.js` Use *nodemon* instead of *node* to start server. It will automatically restart server when code changed (Seems like live change!).  

## <span id='4'>4. Node Directory Structure<span>
### Directory Structure

- app/
	- routes.js
- public/
	- js/
	- css/
	- img/
	- ...
- server.js
- index.html
- ...

### Steps
1. server.js += routes.js
	- Separate routes from *server.js* to *routes.js*. Clean up the codes.
2. routes.js
	1. Require module *express*
		- `var express = require('express');`
	2. Create a router object
		- `var router = express.Router();`
	3. Export the router object as a module (for server.js using)
		- `module.export = router;`

## <span id='5'>5. Creating our Views<span>
### route.js
1. `require('path');` 
	- Require another module *path*.
2. `res.sendFile( path.join( __dirname, '../index.html') );` 
	- Set `.sendFile()` instead of `.send()`. To send a html file or other files.
	- Use `path.join()` to set the file path.
	- `__dirname` ?? 
### server.js
1. `app.use(express.static(__dirname + '/public'));`
	- Set the location of stactic directory by `app.use()`
	- Give the **static** directory path by `express.static()`
	- `__dirname` ??

### index.html
- Implement the homepage with Bootstrap CSS.

## <span id='6'>6. Templating with EJS<span>
### Use Templating Tools: EJS / Express Layouts
#### npm cmd
1. `npm install ejs --save`: 
	- Install EJS by npm.
2. `npm install express-ejs-layouts --save`
	- Install Express EJS Layout**s** by npm.
#### server.js
1. `require('express-ejs-layouts')`
	- Require EJS & express layouts
2. `app.set()` & `app.use()`
	- Use the installed modules
#### .html => .ejs
1. Change all `.html` files extension to `.ejs`. 
2. Move all `.ejs` files to `/views/pages`.
3. Create a layoute file `layout.ejs` as a template for common elements between pages, and put the layout file under `/views`. => **Without any setting??**
	
	**Directory structure**
	
		/views
			/pages
		  		index.ejs
		  		about.ejs
		  		contact.ejs
			layout.ejs

4. Set template commone content. Define where should be filled with customized tags. 
	- ie. `layout.ejs`
	- Reusable content keep in `layout.ejs`.
	- `<%- defineContent(<block_name>) %>` => use `defineContet()`
	- `<%- <block_name_after_1st_one> %>` => name it directly. ie. `<%- body %>`
5. Set page customizing content. 
 	- ie. `index.ejs`
	- `<%- contentFor(<block_name>) %>` => Codes after this syntax will fill into where the block defined.

## <span id='7'>7. Passing Data to Views<span>
### Pass Data Through the Router
1. Pass data (JS object) from router.js to pages through `res.render(<file_path>, <data>)`.

		res.render('/pages/about', { users: users });

2. Represent data by using EJS functions. Note that there are different notations between `<%`, `<%=` and `<%-`.
	
		<% for (user of users) { %> 
		<h2><%= user.name %></h2>
		<% } %> 

## <span id='8'>8. Form Routing<span>
### Use Data Parsing Tool: body-parser

#### npm cmd
1. `npm install body-parser --save`
	- Install module *body-parser* by using npm.

#### server.js
1. `require('body-parser')`
	- Require module body-parser
2. `app.use(bodyParser.urlencoded())`
	- Use the body-parser's function `.urlencoded()` to parse the encoded files.

#### router.js
1. For testing: `console.log(req.body.message)`
	- Will receive data from contact page. Try to log messages from POST request of contact page.
2. For real: check `req.body` and respond.
	- Get data from `req.body`, like `req.body.name`, `req.body.email`, `req.body.message`.
	- Respond something to user, ie. giving some flash messages. ([How to send flash messages in nodejs? [SOLVED]](https://school.scotch.io/lounge/node/how-to-send-flash-messages-in-nodejs?page=1#post-4))	-


## <span id="credit">Credit<span>
### Photo
1. `public/img/background-green.jpg`
	- Source: [PEXELS](https://www.pexels.com/photo/brick-wall-bricks-bright-leaves-227396/)
	- Photographer: [Dom J](https://www.pexels.com/u/dom-j-7304/)
	- License: [CC0](https://www.pexels.com/photo-license/)
