import { SHA1 } from "./SHA1";

const AppId = "A6053788184630";
const AppKey = "8B3F5860-2646-2C47-DC50-39106919B260";
var now = Date.now();
const secureAppKey = SHA1(AppId + "UZ" + AppKey + "UZ" + now) + "." + now;

const headers = new Headers({
    "X-APICloud-AppId": AppId,
    "X-APICloud-AppKey": secureAppKey,
    "Accept": "application/json",
    "Content-Type": "application/json"
});

function get(url) {
    return fetch(url, { method: 'GET', headers: headers })
        .then(response => handleResponse(response))
        .catch(error => console.error('Error:', error));
}

function post(url, data) {
    return fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) })
        .then(response => handleResponse(response))
        .catch(error => console.error('Error: ', error));
}

function put(url, data) {
    return fetch(url, { method: 'PUT', headers: headers, body: JSON.stringify(data) })
        .then(response => handleResponse(response))
        .catch(error => {console.error(`Request failed. url: ${url}, error: ${error}`); return {error: "Request failed."}});
}

function handleResponse(response){
    if(response.status < 500){
        return response.json();
    }else{
        return {error: {message: "Failed: Server error."}}
    }
}

export {
    get, post, put
}