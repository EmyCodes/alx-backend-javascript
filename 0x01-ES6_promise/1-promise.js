const myFunction = function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // reject(Error("The fake API is not working currently"))
      reject(new Error('The fake API is not working currently'));
    }
  });
  return myPromise;
};
export default myFunction;
