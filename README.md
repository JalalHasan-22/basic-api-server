# basic-api-server

## deployed app link on Heroku :

[app_link](https://advance-js-lab03.herokuapp.com/)

[Pull Request](https://github.com/JalalHasan-22/basic-api-server/pull/2)

In this lab, I have created a basic server dealing with postgres database using sequelize, I have created two models one for clothes and one for food, each model defines a schema for the postgres database.

I installed sequelize, and inside model directory, in the index.js, I emported the sequelize and created a new instance to connect to the databse using the databse link found in the .env file, I also imported the DataTypes to pass it to the models functions as an argument.

- to test getting all the data from the database for a single model, send a get request with the model name in the bath as follows: (/food) or (/clothes).

- to get a single entry, I used sequelize (findOne) method, passing the id from the request.params.
  simply send a get request with an id in the url as a parameter ex: (/food/1).

- to update an entry, I used the sequelize .udpate method, and getting the new updates from the request object body.
  please send a request, with a json object in the body in the following syntax:
  request: put
  path: /clothes
  req.body: {"name":"T-shirt", "size": "Small"}

- to delete an entry from a table, I used the sequelize
