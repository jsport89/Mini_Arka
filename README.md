# Mini Arka
## Arka Programming Assignment
### By Jules Sulpico
Live site:
```
https://immense-hamlet-42746.herokuapp.com
```

### About:
Mini Arka is a webapp intended to emulate a subset of Arka's business to business software platform. The most basic features of the webapp have been incorporated and are as follows:

● A UI with an order form for customers
● A UI with 2 admin features
  ○ Feature 1: Assign a manufacturer name to that order
  ○ Feature 2: Update the order status to “order processed”
● Server(s) for your UI’s
● A database that persists the orders
● Styling so your UI’s aren’t complete eyesores

The MEAN stack was used to build Mini Arka.   

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
- Implement session ID's with user authentication
- Use GULP for testing
- Sorting of orders
- Add support for browsers on mobile devices
