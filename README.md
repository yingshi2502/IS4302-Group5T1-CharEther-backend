### IS4302 Group 5 Tutorial 1, CharEther, NodeJS backend
### Installation Guide

If you already have MySQL server installed in your local machine, you can skip this step.
__1. Install mySQL server__
Follow instructions here. https://dev.mysql.com/doc/mysql-getting-started/en/
Keep track of your “user” and “password” values.
Because you will need these later to login your profile.
Make sure to set your host as “localhost”

__2. Create database__
  * __host__: localhost
  * __user__: “root” or your username
  * __password__: the password you provided during installation
  * Create a database named __charether__
  
  You can use MySQL workbench or use SQL command line client by running `CREATE DATABASE charether`.
  
__3. Refresh previlleges__
One very important thing to here is to type the following,

`ALTER USER '<username>'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>'`

, with your own username and password

Then run this query to refresh privileges:

`flush privileges`

what happened above is we set a specific authentication protocol for the mysql
server on your local machine. The reason behind this is because we are using SQL 8.0, which express js library package is not designed to use its authentication protocol. This is named “caching_sha6_password”, which involves encryption and a lot of steps.
Hence we downgrade the SQL 8.0 authentication protocol to that of SQL 5.7, which uses “mysql_native_password” protocol. To read more and understand, view this
https://stackoverflow.com/questions/50373427/node-js-cant-authenticate-to-mysql-8-0
https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server/56752560#56752560


From here onwards, you should be able to connect to the DB via express JS and create all tables,insert records and whatever you wish. To view if the changes you tried really worked, should view via MySQL WorkBench.


## Running the backend server

Clone the following git repository in your local machine:

`git clone https://github.com/yingshi2502/IS4302-Group5T1-CharEther-backend.git`

In the directory, run  `npm install` to install node modules.


To connect this server to the SQL “charether” DB you just created in the previous steps, you need to edit `./app/config/env.js` file to change it to your MySQL server username & password which you had set during installation.
![ENVJS](/evnJs.png)


Run  `nodemon server.js` at root directory to start server. Default port is 8081. If you have followed all the steps till here correctly you should see the following line in the command line:
![StartUpPrintout](/StartUpPrintOut.png)

The backend server is now running and you can use the frontend to query and work with it.

