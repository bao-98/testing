// console.log("Hello Node.js!");

// Use the Express framework to quickly make an application that responds to HTTP requests and sends responses. Our application runs on a server (in this case, a GitHub Codespaces server) and clients can connect to it and request resources, which we will send. 

// We can use NPM to install open-source modules written by other developers
// NPM = Node Packager Manager. Makes it easy to install software packages shared by other developers on the command line.

import express from "express";

// create an express server application:
const app = express();

let server = app.listen(3000, () => {
    console.log('server ready!');
})

app.get('/', (req, res)=>{
    res.send(`<h1>Hello Node.js!</h1>
        <p>Our first Node.js website</p>
        `);
});

app.get('/pets', (req,res)=>{
    res.send("<h1>Welcome to our Pet Website</h1>");
});

let petTypes = {
    dog: "calm and gentle companions",
    bird: "fun but noisy",
    fish: "easy to care for",
    cat: "nice to have around"
}

// route parameter
app.get('/pets/:type', (req,res)=>{
    if(petTypes[req.params.type] == undefined){
        res.status(404).send("Error 404 - the pet type you're looking for was not found");
    }
    else {
        res.status(200).send(`<h1>Pet Information: ${req.params.type}</h1>
            <p>Description: ${petTypes[req.params.type]}</p>
            `);
    }
    
    // CHALLENGE: place the correct description based on the type in the paragraph
    // CHALLENGE: check the requested pet type. if it's NOT included in petTypes, send an error message with status 404. If it is included, send message with 200 as above 

    // When a server sends a response,the response includes a status code with a summary of what happened. For example: 200 means OK, 404 means the requested resources not found, 500 means there was a server error, etc. By default, Exrpresses sets the 200 code
});