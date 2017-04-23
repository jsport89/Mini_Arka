# Mini Arka
## Arka Programming Assignment
### By Jules Sulpico
Live site:
```
https://immense-hamlet-42746.herokuapp.com
```

### About:
Mini Arka is a webapp intended to emulate a subset of Arka's business to business software platform. The most basic features of the webapp have been incorporated and are as follows:
<br /> &nbsp;&nbsp;&nbsp;
● A UI with an order form for customers
<br /> &nbsp;&nbsp;&nbsp;
● A UI with 2 admin features
<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ○ Feature 1: Assign a manufacturer name to that order
<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ○ Feature 2: Update the order status to “order processed”
<br /> &nbsp;&nbsp;&nbsp;
● Server(s) for your UI’s
<br /> &nbsp;&nbsp;&nbsp;
● A database that persists the orders
<br /> &nbsp;&nbsp;&nbsp;
● Styling so your UI’s aren’t complete eyesores

The MEAN stack was used to build Mini Arka and was deployed on Heroku for live functional testing with Postman.

### Key Folders In File Structure:
```
  Arka_Challenge
    ├── app_api
    |   ├── controllers
    |   │   ├── (API to access db)
    |   ├── models
    |   │   ├── (schemes)
    |   ├── routes
    |   │   ├── (routes from webapp to db)
    ├── app_server
    |   ├── controllers
    │   ├── routes
    │   │   ├── (routes from views to webapp)
    |   ├── views
    │   │   ├── (jade templates of views)
    ├── public
    │   ├── angular
    │   │   ├── MiniArka.js (angular controller)
```

### How To Run:
Install dependencies:
```
npm install
```

To run webapp and db locally run:
```
nodemon
```

To run webapp locally but use offsite db run:
```
NODE_ENV=production nodemon
```

### TODO:
- Require fields in User Form
- Implement session ID's with user authentication
- Use GULP for testing
- Sorting of orders
- Add support for browsers on mobile devices
