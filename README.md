# is4302-server

Clone repo: `git clone https://github.com/yingshi2502/is4302-server.git`

Run `npm install` to install node modules

Run `nodemon server.js` at root directory to start server.

Default port is __8081__

### Database setup

Table definitions are already in ./app/models, 

Create database __charether__ in your local MySQL server:
You can read more details about this step here
https://docs.google.com/document/d/1Xn1u2D8Bhdqk0GRsD1XNbaYHQG7Q4UUl4U5GOBk7zG8/edit

Edit `./app/config/env.js` to change your MySQL server username & password.
This file (app.config.env.js) has been transferred to gitignore. so that everyone can login with their individual mySQL db details and wont commit any of it permanently in the config file.

