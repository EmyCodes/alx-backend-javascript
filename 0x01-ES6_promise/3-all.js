import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoFunc = uploadPhoto();
  const createUserFunc = createUser();

  const myPromise = Promise.all([uploadPhotoFunc, createUserFunc]);
  // console.log(myPromise);
  myPromise.then((result) => {
    console.log(result[0].body, result[1].firstName, result[1].lastName);
  })
  .catch(() => console.log("Signup system offline"));
  
  return myPromise;
}

// export default myFunc;
