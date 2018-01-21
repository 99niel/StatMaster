CONTENTS OF THIS FILE
---------------------
   
 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Maintainers
 * Updates for second review with Vagish

INTRODUCTION
------------

This application uses static data from an array to populate the datapoints. These datapoints are used to generate
a line graph and a bar graph. This application runs on your local server.

REQUIREMENTS
------------

This application is built using

 * html
 * css
 * JavaScript
 * nodejs

This application uses

 * chartjs - JavaScript library(http://www.chartjs.org/)
 * express - Nodejs framework(http://expressjs.com/)

This application reqiures following modules

 * http(https://nodejs.org/api/http.html)
 * path(https://nodejs.org/api/path.html)
 * fs(https://nodejs.org/api/fs.html)

RECOMMENDED MODULES
-------------------

 * nodemon(https://nodemon.io/)
   A utility that will monitor any changes in the code and restarts the server automatically.
   
INSTALLATION
------------

Run "npm install" in the application parent directory. It will install all the necessary modules.
If you are using "nodemon",
 run command "nodemon" in command prompt and navigate to "localhost:3000" in your browser. 
if you are not using "nodemon", 
 rum command "node app.js" in command prompt and navigate to "localhost:3000" in your browser.

MAINTAINERS
-----------

Current maintainers:
 * Karthikeya Subrahmanya H.V - (contact: TEKemail)
 * Nitish Bandagar - (contact: TEKemail)
 * Abhinaya Suresh - (contact: TEKemail)
 * Vinayak Sharannavar - (contact: TEKemail)

UPDATES FOR SECOND REVIEW WITH VAGISH
-------------------------------------

 * nodemon is moved under "Utilities" in the package.json file, since it is not a dependency.
 * CDN references are removed and all files are now referenced from the local storage. 
 * use flag "-g" with package install to install the package globally.
 * code now uses ES6 features
 * Application structure:
	-Master_Test
	  -public
	    -css
	      -style.css
		-data
		  -points.json
	    -images
	      -favicon.ico
	      -logo.png
   	    -script
  	      -Chart.js
		  -getchart.js
        -index.html
	  -views
	  -app.js
	  -package.json
	  -package.lock.json
	  -README.txt