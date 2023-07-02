const myFunction = function handleResponseFromAPI(promise) {
    let myPromise = promise
    .then(() => {
        status: 200
        body: "success"
    })
    .catch(() => new Error())
    .finally(() => {console.log("Got a response from the API")});
    return myPromise;
}
export default myFunction;
