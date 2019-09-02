The Psychometrics Centre - Front end developer task
---------------------------------------------------

Overview
========

In this repository there is a service that deals with basic operations on users. 
The goal is to design and implement a front-end app using the latest version of [Angular](https://angular.io/) and 
[Angular Material](https://material.angular.io/) 

The requirements of the app are:

- allow browsing the list of users
- allow adding a new user
- allow updating existing user
- allow deleting existing user
- make it work equally well on mobile devices and high resolution displays
- use SCSS for writing styles


Steps to do
===========

1. Fork this GIT repository

2. Run the service:
        
        cd ./service
        npm i
        npm start
        
3. The service listens for requests on http://localhost:8080 and expects and returns `application/json` content type from 
its methods, which are:

    - `GET http://localhost:8080/users`
    To get a [Users](./service/src/page/page.ts) of [Users](./service/src/user/user.ts). This method supports the following optional query parameters:
        
        * page - page number
        * size - how many users per page
        * sort - comma separated sorting field and direction, e.g. id,desc or firstName,asc  

    - `POST http://localhost:8080/users`
    To create a new user. Expects [User](./service/src/user/user.ts) object in a request body.
        
    - `PUT http://localhost:8080/users/{userId}`
    To update existing user, expects [User](./service/src/user/user.ts) object in a request body, returns updated User.        
        
    - `DELETE http://localhost:8080/users/{userId}`
    To delete existing user, returns deleted [User](./service/src/user/user.ts).        

4. Create your angular app in `./website` directory in the project 

5. After you are done push your changes to your forked repository and create a pull request to master branch on 
https://github.com/campsych/campsych-task-frontend 

6. You can report issues/questions on https://github.com/campsych/campsych-task-frontend/issues


Evaluation criteria
===================

This task is more about the effort taken to deliver a working solution rather than ticking all the boxes. 
Having less prior experience with Angular and Material is taken into account if indicated so in the resume 
although there is plenty of tutorials and example code online which could help with learning or catching up. 

1. Use of Angular/TypeScript
    - [Style guide](https://angular.io/guide/styleguide) was followed.
    - Services are used for all not explicitly view-related logic
    - Things are named in a way that makes sense
    - Code adheres at minimum to [single responsibility principle](https://en.wikipedia.org/wiki/SOLID).
    - Forms are validated on client-side
    - User module is used to group user-related things and is lazily loaded in the app for future extensibility
    - Application updates website metadata (title and description) when performing actions
    - Application uses router to store some state in the url (e.g. to allow bookmarking specific users)
    - Application handles errors well - broken connectivity to the service, unexpected errors coming from the service, 
    wrong user-typed urls etc.
    - Application uses [service worker](https://angular.io/guide/service-worker-intro)
    - Application uses [server-side rendering](https://angular.io/guide/universal])

2. Use of HTML5
    - Conforms to HTML5 spec w/o using depreciated tags/attributes 
    - There are no unnecessary tags and nesting is not too deep
    - Is only semantic and does not contain presentation elements
    
3. Use of SCSS
    - There are no unnecessary selectors
    - Selector names are semantic or just make common sense
    - No vendor prefixes, no [BEM](http://getbem.com/)   
    - Variables and other SCSS features used where needed
    - Resulting CSS works on mobile devices, 4k screens or ultrawide displays as well as on standard desktop
    - The design is pleasing
    
4. Use of GIT
    - Actual pull-request was made to this repo  
    - Commits are descriptive of actual changes made
    - Commits are sufficiently granulated
    - Commit history could be understood
    - There are no unneeded files committed - IDE files, system files, generated artifacts from build process.
    
5. General
    - Application builds
    - Application passes lint checks
    - Page runs quickly and there are no heavy assets used (e.g. non-optimized images)
    - There was an additional effort going beyond the requirements - e.g. proposed search or filtering, 
     alternative presentation of user list, modifications to the provided backend service to fix possible bugs or 
     improve it 

Disclaimer
==========
The user database that comes with the service is randomly generated and doesn't contain information about any 
existing persons.
