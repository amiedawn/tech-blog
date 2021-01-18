# Tech Blog

![License](https://img.shields.io/badge/License-MIT-green.svg)

# Table of Contents:
- [Tech Blog](#tech-blog)
- [Table of Contents:](#table-of-contents)
  - [Description:](#description)
  - [Installation Instructions:](#installation-instructions)
  - [Usage Information:](#usage-information)
  - [License:](#license)
  - [Tests:](#tests)
  - [Questions?](#questions)

## Description: 

This is a CMS-style blog site where users can publish their blog posts and comment and upvote on other user's posts. The application follows the MVC paradigm, uses Handlebars.js for templating, Sequelize as the ORM, bcrypt for password security, Bulma for styling, and express-session npm package for authentication.

## Installation Instructions:

This application is remotely deployed at https://morning-wave-37012.herokuapp.com . However, if you would like to clone it, you may do so at https://github.com/amiedawn/tech-blog . You will need to add a .env file to connect to the tech_blog_db database and then install several dependencies: Node.js, express, sequelize, MySQL2, dotenv, bcrypt, express-handlebars, express-session, connect-session-sequelize, and jest. Once dependencies have been installed, you may run the application in the terminal by typing “node start”. If you choose to have some sample data in the blog to start with, you may load the test data by running "npm run seeds" before starting the server.

## Usage Information:

Follow the installation instructions.<br><br>From the homepage, if you have loaded sample data, you will see the list of posts that are already loaded. You can click on a post and see the content and read comments about the post. For further functionality, you will need to click on either Dashboard or Login in the main menu to enter the site. As a first time user, you need to sign up for an account; otherwise, you can simply log in with your username and password. Now you have the ability to create, update, and delete any posts you have created (they are displayed on your Dashboard). You can view your posts on your Dashboard or view all posts on the site by visiting the homepage. When visiting someone else's post, you can view it, comment on it, and upvote it to show you like it. If you have been inactive on the site for 10 minutes, you will automatically be signed out. Simply log back in to continue.<br><br>Here is a picture of the homepage:<br><br>![Screenshot](/images/homepage.png)

## License:

This site is under this license: MIT

For details on this license, please follow: https://opensource.org/licenses/MIT

## Tests:

API routes were tested using Insomnia Core and helpers were tested using Jest.

## Questions?

Please feel free to contact the author of this project at the following:

GitHub: <https://github.com/amiedawn>

Email:  <amiedawn@hotmail.com>