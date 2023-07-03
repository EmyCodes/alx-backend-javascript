import { uploadPhoto, createUser} from "./utils"

function handleProfileSignup() {
    const uploadPhoto_ = uploadPhoto();
    const createUser_ = createUser();
    const myPromise = Promise.all([uploadPhoto_, createUser_])
    // console.log(myPromise);
    myPromise.then((result) => {
        console.log(result[0].body, result[1].firstName, result[1].lastName)
    });
}


export default handleProfileSignup();
