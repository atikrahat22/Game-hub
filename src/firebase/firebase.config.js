import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || "demo.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || "demo.appspot.com",
  messagingSenderId: import.meta.env.VITE_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_APP_ID || "1:123456789:web:abc123",
};

let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} catch (error) {
  console.warn('Firebase initialization failed. Please configure .env file with your Firebase credentials.');
  console.warn('See .env.example for required variables.');
}

export { auth };
export default app;
