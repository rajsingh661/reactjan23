const api_url="https://jsonplaceholder.typicode.com/users"

function getApiData(url){

    let result = fetch(url);
    console.log(result)
}

getApiData(api_url)