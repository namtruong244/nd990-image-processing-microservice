import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';
import {requiresAuth} from './middleware/requiresAuthMiddleware.js'
import 'dotenv/config'


// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file
/**************************************************************************** */
app.get('/filteredimage', requiresAuth(), async (req, res) => {
    const { image_url } = req.query

    // Validate query param required
    if (!image_url) {
        res.status(400).json({message: '`image_url` query is required!'})
    }

    try {
        const filteredImagePath = await filterImageFromURL(image_url)
        res.status(200).sendFile(filteredImagePath, error => {
            if (error) {
                return res.status(500).json({message: `Error send file ${error}`})
            }

            // delete local file after sent response
            deleteLocalFiles([filteredImagePath])
        })
    } catch (error) {
        // return message when error occurred
        res.status(422).json({message: `Error occurred ${error}`})
    }

})

// Root Endpoint
// Displays a simple message to the user
app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
} );


// Start the Server
app.listen( port, () => {
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
} );
