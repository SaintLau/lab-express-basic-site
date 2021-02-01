const { response } = require('express');
const express = require('express'); 
const app = express(); 

app.use(express.static('public'));

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/photo-gallery', (request, response) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.get('/achievements', (request, response) => {
    response.sendFile(__dirname + '/views/works-page.html');
});

app.listen(3000, () => {
    console.log('My app is listening');
});