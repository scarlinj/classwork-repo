//get api key fromGIPHY.com

var apiKey = '27qGLT95iTZGLxrUKMPoBXH2FlSwpl3F';

var url = `http://api.giphy.com/v1/gifs/search?api_key=?{apiKey}&q=monkey`;

var url = `http://api.giphy.com/v1/gifs/search?api_key=?{apiKey}&q=baby yoda`;

var giphyContainer = document.querySelector('giphyContainer');

var giphyInput = document.querySelector('.#giphyInput');

var submitBtn = document.querySelector('#submitSearch');

submitBtn.addEventListener('click', function (event)) {
event.preventDefault();
var searchQuery = giphyInput.value;
var queryUrl = `http://api.giphy.com/v1/gifs/search?api_key=?{apiKey}&q=${searchQuery}`;
});

// to make an API request to a server-side API, 
// use the fetch function built into the browser
// API requests to server-side APIs are asynchronous
// which means these lines of code will not happen imeediately,
// but that they will take time to complete

fetch(queryUrl)
    .then(function (response) {
        console.log(response);
        return response.json();
    })

    .then(function (giphyResponse) {
        giphyInput.value = '';
        giphyContainer.innerHTML = '';
        console.log(giphyResponse.data);
        for (var i = 0; i < giphyResponse.data.length; i++) {
            var currentGif = giphyResponse.data[i];
            console.log(currentGif);
            var img = document.createElement('img');
            img.setAttribute = currentGif.images.original.url);
        giphyContainer.appendChild(img);
        // Image.setAttribute('src', currentGif.images.original.url));
        console.log(;
        }
    });

fetch(url2)
    .then(function (response) {
        console.log(response);
        return response.json();
    })

    .then(function (giphyResponse) {
        console.log(giphyResponse.data);
        for (var i = 0; i < giphyResponse.data.length; i++) {
            var currentGif = giphyResponse.data[i];
            console.log(currentGif);
            var img = document.createElement('img');
            img.setAttribute = currentGif.images.original.url);
        giphyContainer.appendChild(img);
        // Image.setAttribute('src', currentGif.images.original.url));
        console.log(;
        }
    });