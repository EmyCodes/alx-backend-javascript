const myFunc = function signUpUser(firstName, lastName) {
  // return new Promise(resolve, reject).resolve({firstName, lastName})
  return Promise.resolve({ firstName, lastName });
};

export default myFunc;
