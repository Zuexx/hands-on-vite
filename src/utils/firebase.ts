import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirebaseConfig } from './firebase.config';

const firebaseApp = initializeApp(getFirebaseConfig())
const auth = getAuth(firebaseApp);

if (import.meta.env.DEV)
    connectAuthEmulator(auth, "http://127.0.0.1:9099")

export { firebaseApp, auth }
