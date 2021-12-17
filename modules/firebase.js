import { initializeApp } from "@firebase/app";
// import { getAnalytics } from "@firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";

const config = {
  apiKey: "AIzaSyBeueae09BMoF-lVXOL-lEjKlTVDc64owE",
  authDomain: "sunnyblisss.firebaseapp.com",
  projectId: "sunnyblisss",
  storageBucket: "sunnyblisss.appspot.com",
  messagingSenderId: "234166756116",
  appId: "1:234166756116:web:471caca9bd5a400d381801",
};

const app = initializeApp(config);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { config, app, firestore, auth, storage };
