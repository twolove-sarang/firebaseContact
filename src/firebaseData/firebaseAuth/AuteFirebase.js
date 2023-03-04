import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { get, getDatabase, ref, remove, set } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider) //
    .then((result) => {
      const user = result.user;
      return user;
    });
}

export async function logout() {
  return signOut(auth);
}

export async function loginObserver(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function updateContact(contact) {
  const userId = uuid();
  const { first, last, number, email, memo } = contact;
  return set(ref(database, `user/${userId}`), {
    first: first,
    last: last,
    number: number,
    email: email,
    memo: memo,
    id: userId,
  });
}

export async function viewContact() {
  return get(ref(database, `user`)) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
}

export async function deleteContact(userId) {
  return remove(ref(database, `user/${userId}`));
}
