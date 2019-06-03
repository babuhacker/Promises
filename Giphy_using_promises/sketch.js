var http = "http://api.giphy.com/v1/gifs/search?";
var apikey="&api_key=9jKmhOnFzeEkMCj3llWmyGzvx9e5YB8x";
var query = "&q=rainbow";
var giphyApi = http+apikey+query;
console.log(giphyApi);
function setup() {

	noCanvas();
	//fetch return promise
	fetch(giphyApi)
	.then(response=>response.json())//convert into json and json also return a promise
	.then(json => {
		
		createImg(json.data[0].images['fixed_height_small'].url);
		return fetch(giphyApi);
		})
	.then(response=>response.json())
	.then(json => createImg(json.data[1].images['fixed_height_small'].url))
	.catch(err=>console.log(err));
	
}

