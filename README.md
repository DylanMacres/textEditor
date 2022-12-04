# Text-Editor

[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
My Task for this activity was to create an app that allows the user to make notes!

The technologies used in this application are:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/) to run the web server
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store the data
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) also to store the data
- [idb](https://www.npmjs.com/package/idb) as a wrapper around the IndexedDB API
- [WebPack](https://webpack.js.org/) as a static module bundler
- [Workbox](https://developer.chrome.com/docs/workbox/) for service worker libraries
- [concurrently](https://www.npmjs.com/package/concurrently) to run multiple commands concurrently
- [Babel](https://www.npmjs.com/package/Babel) for backward compatibility with older browsers


### User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

### Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)


## Installation
After Downloading the code run the following commands.

```bash
npm i and then npm start
```


### URL

- [https://justanothertexteditor12.herokuapp.com/]https://justanothertexteditor12.herokuapp.com/)


## License

[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contributing

This activity was given to me from the University of Denver bootcamp and help was provided from tudors Kirtley and George, with Dan as my instructor.


