import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, update, push } from "firebase/database";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function writeUserData(uid) {
    const db = getDatabase(app);
    const reference = ref(db);
    const usersRef = child(reference, "users");
    const newObj = {}
    newObj[uid] = {
        name: "",
        college: "",
        year: "",
        major: "",
        gender: "",
        currentClasses: "",
        interests: "",
        email: "",
        phoneNumber: "",
        bio: "",
        matchedArray: []
    }
    update(usersRef, newObj);
}

export function getUserData(username) {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `users/${username}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                return snapshot.val();
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.log("error");
            console.error(error);
        });
}

export function getAllUserData() {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `users/`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                return snapshot.val();
            } else {
                console.log("No data available");
            }
        }).then((data) => {
            const dblist = Object.keys(data).map((key) => data[key])
            return dblist
        })
        .catch((error) => {
            console.log("error");
            console.error(error);
        });
}



export async function updateUserData(
    username,
    name,
    year,
    major,
    gender,
    interests,
    college,
    currentClasses,
    phoneNumber,
    email,
    bio,
    matchedArray
) {
    const db = getDatabase(app);

    // A post entry.
    const postData = {
        name: name,
        college: college,
        year: year,
        major: major,
        gender: gender,
        currentClasses: currentClasses,
        interests: interests,
        phoneNumber: phoneNumber,
        email: email,
        bio: bio,
        matchedArray: matchedArray
    };

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates["/users/" + username] = postData;
    return await update(ref(db), updates)
}

// export async function updateMatched(uid, userData, other_uid) {
//     const db = getDatabase(app);
//     const updates = {};
//     updates["/users/" + uid] = userData;
//     return await update(ref(db), updates)

// }