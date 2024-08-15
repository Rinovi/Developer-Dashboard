# Developer Dashboard

## Description

a CMS-style blog site where developers can publish and view posts. The application follows the MVC paradigm, utilizes Handlebars.js for templating, Sequelize for ORM, and express-session for authentication.

## Installation

If you'd like to run the application locally, you'll first need to go through a few steps.  
* Run `npm install`
* Connect to postgres and run `\i db/schema.sql;`
* Add `DB_NAME`, `DB_USER`, and `DB_PASSWORD` variables to an env file so you can connect with the DB.
* Lastly, open a new terminal and run `npm start`, then visit `localhost:3001` to view the application in your web browser.

## Usage

Once you've reached the homepage, check out instructions on how you can use the website, as well an array of posts created by other users. In order to actually create or manage your own posts, however, you'll first need to create an account / login. After doing so, you'll be able to view your dashboard, which allows you to create posts, view posts, and delete posts.   

The following image is an example of what the homepage looks like: 

![dashboard1](https://github.com/user-attachments/assets/275d7994-8ac0-4b63-936b-c5fe57f401f4)

Also, here's an image of what the Dashboard page looks like :

![dashboard2](https://github.com/user-attachments/assets/1140e82c-578f-4bbf-acd2-a034eee6024c)

Lastly, here's a link to the deployed application: 
* https://developer-dashboard-2.onrender.com
