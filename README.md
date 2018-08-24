## Full Stack Capstone -- Allergen Search Website

Users can query the open-source database and search a food item. Upon clicking on the listing,ingredients will be shown and a warning will be shown that contains possible allergens in that food item.

Users can also post comments in each listing to add information like other possible allergens that could comtaminate the food item.

Users can enter in a zipcode to search for nearby pharmacies if they find a possible allergen in the food item that they search that they are allergic to. Markers will be rendered and it will show an information window that shows the address and name of the marker.

Users can also sign up to post a new listing to the database by registering. Posting to the database is a protected endpoint as is updating and deleting, which have yet to be implemented but is seen to be used by admins in the future. 

A link to a deployed version

![Front Page](C:/Downloads/screenshot1.png)

React is used on the front-end (with Create React-App) and Node and MongoDB is used on the backend.

NPM Modules used included Zipcodes, React, React-Google-Maps, Mongoose, Request, Redux-Logger, and React-Redux.

The Google Maps API call is being buffered through to my backend because Google does not allow native front-end calling without their Vanilla API. Every time my search is being called, it updates the redux state. Every time I click to expand, a React state is set. Every time I expand a listing as well, it updates the listing immediately via a call to my back-end to do two database calls, one after another, to compare the ingredients to a seeded allergen collection. When I post a comment, it also updates it on the backend where it attempts to re-render on the front-end. 



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).