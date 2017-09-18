# MyReads Project

This is my project for React Fundamentals course (a first part of React Nanodegree Program in Udacity). It's a [React](https://facebook.github.io/react/) based web application that allows user to select and categorize books user have read, is currently reading, or wants to read.

## Installation

To start the project locally:

* clone the github repository
* install all project dependencies with `npm install`
* start the development server with `npm start`

The application connects to the backend server provided by Udacity, so there's no need to start it.


## Usage

### Main Page

When you start the app locally it'll automatically open the browser on the main page and show the user library:

![myreads](https://user-images.githubusercontent.com/611602/30558221-fca1c024-9cb0-11e7-84b2-4148a8afc58a.jpg)

It already has some content, as the backend prepopulates all the section with some examples.
As visible on the screenshot, for each book you can click on the green arrow button and change the book shelf. The change will be immediately applied and the book will move to a new shelf (or disappear if _None_ is selected)

### Search Page

Selecting green + on the main page takes the user to a search page. User can search for books and add them to his library (in the same way as changing the shelf for books already in the library):

![myreads_search](https://user-images.githubusercontent.com/611602/30558290-3d546400-9cb1-11e7-8e36-414eede4f9ec.jpg)



### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
