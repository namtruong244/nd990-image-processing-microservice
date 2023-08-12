# Image Processing Microservice on AWS
nd990-image-processing-microservice
You have been hired as a software engineer to develop an application that will help the FBI find missing people. The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Project Details

### Engineering Process and Quality

* The project demonstrates an understanding of a good cloud git process

All project code is stored in a GitHub repository. There are two branches - one for development (develop) and one master.

### Development Server

* The project demonstrates the ability to develop using the Express framework

Open a new terminal within the project directory and run:
  1. Initialize a new project: `npm i`
  2. run the development server with `npm run dev`

* The project demonstrates an understanding of RESTFUL design

The image filtering microservice is available at http://localhost:{{PORT}}/filteredimage?image_url=<url_to_image>

Example: http://localhost:{{PORT}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

* The project demonstrates an understanding of HTTP status codes

Successful responses have a 200 code, at least one error code for caught errors (i.e. 422)

### AWS Elastic Beanstalk Deployment

* The project demonstrates the ability to create functional cloud deployments

Endpoint URL: TODO

Example: TODO

Requires: Authorization Header with Bearer Token. Token is included in the Postman collection in a resource/postman_collection directory.

* The project demonstrates an understanding of AWS Elastic Beanstalk’s CLI and Console Dashboard

The project was deployed using the AWS Elastic Beanstalk CLI eb init, eb create, and eb deploy commands.
A screenshot of the elastic beanstalk application dashboard is included in a resource/deployment_screenshot directory.
