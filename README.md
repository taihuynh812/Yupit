# README

Welcome to [Yupit](https://yupit.herokuapp.com/#/), a full-stack clone of Yelp!

Yupit includes many functionality/features that are similar to Yelp, such as User Authentication, visiting Businesses pages, searching for Businesses, Businesses locations through Google Maps, Users can create, read, update and delete Reviews 

The technologies that were used in Yupit are:

### Frontend
* React.js
* Redux
* SCSS
* Javascript
* Google Maps API

### Backend
* Ruby on Rails

### Database
* PostrgreSQL
* AWS for photos

### Deployment
* Heroku

## Features
1. User Authentication
* Users can log in with their own accounts or as a demo user to gain access to full functionalities of the site
* Login page validates and renders error messages when users input incorrect credential
* Sign up page validates and renders error messages when users do not provide information on all required fields
![Yupit login](https://github.com/taihuynh812/Yupit/blob/main/app/assets/images/Login%20screen.png?raw=true)

2. Busiess Page
* Business show page contains useful information that users can see about a business on Yupit. 
* The page includes: 
> Photos, hosted on `AWS`, that belong to the business 
> `Google Maps API` which shows exact location of the business 
> Reviews that users posted about the business
> other useful information such as schedules, amenities, categories
![Yupit business page](https://github.com/taihuynh812/Yupit/blob/main/app/assets/images/Business_show.png?raw=true)

3. Reviews/ratings
* Users are able to read reviews other users have posted for businesses without being logged in
* Users are required to log in if they want to post a review
* To post a review, a rating and description are required 
* Only the owner of the review is able to update and delete the review
![Yupit review page](https://github.com/taihuynh812/Yupit/blob/main/app/assets/images/new_review.png?raw=true)

4. Search
* Users can search for businesses, an amenity, a cateogry on Yupit through the searchbar
* Search result page will also into a Google Maps that locate all the businesses that returned through search results
![Yupit search page](https://github.com/taihuynh812/Yupit/blob/main/app/assets/images/Search.png?raw=true)

5. Maps
* `Google Maps` is included in both the Search page and Business page that pinpoints the location of the business(es) that user is viewing

## Upcoming features:
* Implement searching by location
* Filter functionality on the search page
* Users can mark reviews as funny, useful and cool
* Profile page to show user's comments
