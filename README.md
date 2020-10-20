![logo](https://user-images.githubusercontent.com/61850850/96558584-87c57500-12d9-11eb-9edc-3b9b07e843e2.png)

# FSHN - an E-Commerce Platform for apparel
> Project 1 for [CS-1202] Advanced Programming. This is a MERN stack e-commerce (clothing store) website. 

## Quick Start
Open up a CLI, and execute the following commands:
```
$ git clone https://github.com/tanviroy/ap-project1.git
$ cd ap-project1

$ npm install
$ npm start

$ cd frontend
$ npm install
$ npm start
```
This should get your server to run at localhost:5000 and frontend to run at localhost:3000

## Project Details
This project was built using the MERN stack of technologies.

### Major Technologies Used
![techstack](https://user-images.githubusercontent.com/61850850/96565848-8482b700-12e2-11eb-8e6c-3e0f04c98289.png)

<br/>
<table>
<thead>
<tr>
<th>Area</th>
<th>Technology</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Front-End</td>
		<td>React, React-Bootstrap, CSS3</td>
	</tr>
	<tr>
		<td>Authentication</td>
		<td>Passport.js, bcrypt.js</td>
	</tr>
	<tr>
		<td>Back-End</td>
		<td>Node.js, Express, Mongoose</td>
	</tr>
	<tr>
		<td>Cookie/Database Management</td>
		<td>CookieParser, MongoDB, Mongoose</td>
	</tr>
</tbody>
</table>
<br/>

### Database
<table>
<thead>
<tr>
<th>Defined Schemas</th>
<th>Schema fields</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Users</td>
		<td>username: String,<br/>
  		googleId: String,<br/>
  		email: String,<br/>
  		password: String,<br/>
  		address: { type: String, default: "home" },<br/>
  		mobile: Number,<br/>
  		orders: [{ type: String }],<br/>
  		cart: [{ type: String }],<br/>
  		wishlist: [{ type: String }],</td><br/>
	</tr>
	<tr>
		<td>Products</td>
		<td>name: String,<br/>
  		description: String,<br/>
 		category: [{ type: String }],<br/>
 		color: [{type: String}],<br/>
 		gender: [{type: String}],<br/>
  		imageurl: String,<br/>
  		price: Number,<br/>
 		rating: [{ type: Number }],<br/>
  		reviews: [{ body: String, user: String, verified: String }],<br/>
  		buyers: [{ type: String }],<br/>
  		wishers: [{ type: String }],</td><br/>
	</tr>
	
</tbody>
</table>
<br/>

### Codebase Structure 
```
.
├── backend/
│   ├── data.js
│   ├── passportConfig.js
│   ├── product.js
│   ├── server.js
│   └── user.js
├── frontend/
│   ├── public/
│   │   └── imgs/
│   └── src/
│       ├── components/
│       ├── Pages/
│       ├── App.css
│       ├── App.js
│       ├── font.ttf
│       ├── index.css
│       └── index.js
├── .babelrc
├── .gitignore
├── helper.txt
├── package-lock.json
├── package.json
└── README.md
```

### Code Documentation
For a more detailed documentation of our code and the complete list of project dependencies see [Helper.txt](helper.txt).

### Design
Logo design and concept banners can be viewed [here](https://www.canva.com/design/DAEJ2_HNt70/EwHMzzYoWlaoPhGUtJx-Dw/view?utm_content=DAEJ2_HNt70&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent)

## Demo
<Insert Demo GIF files here>

### Home Page

### Shop - Search, Filter, Products

### Product Page - Details and Reviews 

### Login Page - Register, Login with FSHN account or Google OAuth

### Cart Page - Add/Remove to Cart

### User Profile - Update Info, View User Insights

## Team Members
Ruthu Rooparaghunath
Soham De
Tanvi Roy 
