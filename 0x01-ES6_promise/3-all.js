import { uploadPhoto, createUser} from "./utils"

function handleProfileSignup() {
    const uploadPhoto_ = uploadPhoto();
    const createUser_ = createUser();
    const myPromise = Promise.all([uploadPhoto_, createUser_])
    console.log(myPromise);
    myPromise.then((values) => {
        console.log(values)
    });
}


export default handleProfileSignup();
