To use this application,
Copy the folders to your local machine and cd into the below directories

1. Type " npm install " inside the server root directory ( Download Server Dependencies )
2. Type "npm start" in order to start back-end
3. Type " npm install " inside the client directory ( Download Front-end Dependencies )
4. Type "npm start" in order to start front-end

In the event of any MongoDB errors such please amend the "dev.js" file in the server/config directory by adding your mongoDB cluster URI. For assitance on obtaining your cluster URI, please following this link https://www.mongodb.com/docs/guides/server/drivers/

How to use this Application

1. On the first visit to the application, the user should "Sign Up" by entering their name and email address on the registration page.
2. Then the user can login to the application by entering the chose email address and password
3. This application allows a user to view the latest movie releases available and includes various information about the move similiar to IMDB.
4. The user is able to add a movie title to the favourites section.
5. A user can also provide their thoughts on the movie by leaving a comment or clicking the like or dislike button.

Third-party API

1. This application uses an api from https://www.themoviedb.org/ website. An API key can be obtained from this website https://www.themoviedb.org/login however it should not be required.

System architecture

1. This application will run on the MERN stack of technologies which are MongoDB, Express.js, React.js and Node.js.
2. The following are the main reasons for using the MERN stack of technologies for this application:
   - due to MERN utilising one programming language (Javascript) on both the frontend and backend of the application.
   - the MERN stack comprises open source technologies which are more cost-effective.
   - the same programming language is used between client and server hence it is easy to switch between the two.
   - MongoDB is an easy to use and effective non-relational database. It is also flexible and scale-able
   - Express.js is a server-side framework that allows the development of applications quickly and is easy to configure and customize.
   - React.js is a front-end Javascript library which can be used for both web and mobile app development. It is fast and easy to learn
   - Node.js is a server-side programming framework, built on Chrome’s JavaScript engine and uses asynchronous programming.
3. The create-react-app feature will be used as it facilitate quick development of the application.
4. The application will be deployed on Heroku due to its stability and its freemium option for deploying applications.

System requirements

1. This application will be aimed at the general public who would like to check out new movies.

   Functional Requirements:

   - User Login: This requirement will enable a user to login to the app.
   - Add a movie to favourites: A user can browser the latest movies and add titles to the favourites section.
   - Create a comment: A user can add a comment to any movie title.
   - Like or dislike button: A user can choose to like or dislike a title with the click of a button
   - Reply to comments: A user can reply on the comments of other users

   Non-Functional Requirements:

   - Security: The application will ensure authentication of each user by applying JWT (json web tokens) as it is a effective authentication method because it is a way of representing data that does not allow tampering during transit, and that can be validated using encryption keys. Each user will choose a unique password which will have to meet the unique password requirements listed below:

   * minium 6 characters,

   - Performance: The app will utilise IaaS (infrastructure as a service) platform in order to ensure that performance levels remain at optimal levels as this will not require the purchase or maintenance of their own computer infrastructure assets such as servers.
   - Reliability: In order to avoid loss of data due to processing errors or downtime due to unforeseen issues, the app will automatically backup all data every 30 minutes automatically. The application will utilise IaaS (infrastructure as a service) platform in order to prevent or minimise reliability issues.
   - Usablity: The user interface should be very basic and clean with limited to no graphics in order to minimise required bandwith. It should request the username and password. Also there should be a forgot password link which would enable the user to send an email and reset their password.

   Value proposition
   There are various applications similiar to this one on the market however we will focus on the below factors to ensure competitiveness.

   - Focus on client needs: In order to distinguish our application from competitors we will focus on understanding and solving the evolving needs of our clients
     by ensuring that we meet their requirements through consultations and client feedback.
   - Simplicity and Functionality: We will strive to keep our application easy to use and understand as this will foster quick adoption of and changes made to
     the application. It is also important to ensure that our application always functions as expected or exceeds expectations so that client satisfaction can
     be maintained.

App deployed to Heroku
https://morning-brushlands-09929.herokuapp.com/
