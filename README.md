# Getting Started with Getir code challange

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app is developed to show the following features
1> Show the Products details from json data
2> Add or remove products from the Cart
3> Show products by Product type here we have two type shirts and mugs
4> Sort the product by new to old, old to new etc..
5> Get Products by Brands
6> Get products by tags
7> Pagination


## Dependency 

React
Redux toolkits
Json-Server
css modules


## Available Scripts

In the project directory, you can run:
### `npm install`

json is hosted on json server to run it follow the following command.
navigate to data folder run 
### `npm install -g json-server`
### `json-server items.json `

host the json in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

after setting json data to run the project run

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Folder structure

We have the folder structure as follows

#### data 
data folder has json data

#### public 
public folder has index.html file this folder get created by react-app when we build the app. Do not touch this folder

#### src
src folder has all the source code

assets - this folder has all the images/svg
hooks - this folder have custome hook for pagination logic
store - this folder is used for redux. Here we have creaed two seperate slice one for cart and one for products related filters or sorting

 product slice have logic for filters and sorting and finding the item types like mugs or shirts

 Cart slice is used showing cart items when added to removed from cart.

components - this folder has sub folders like 
UI - consist simple UI elements like radio button, checkbox or cards which are reusable

Layout - this folder like header footer which will be used across projects

Cart - this folder have components related to cart

Pagination - this folder has pagination components

Products - this folder has products items and filters components







