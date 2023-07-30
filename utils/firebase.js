// Assuming you have already installed the Firebase SDK
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();
const connectDb = async () => {
  try {
    // Replace these values with your Firebase SDK config
    const firebaseConfig = {
        apiKey: "AIzaSyATurmvdmT4ea1t4cwBCoIkBT4Cr4qbj-w",
        authDomain: "testing-a8752.firebaseapp.com",
        projectId: "testing-a8752",
        storageBucket: "testing-a8752.appspot.com",
        messagingSenderId: "398423276496",
        appId: "1:398423276496:web:c485892c11105acf1bd7d5",
        measurementId: "G-5VTGNLS85W"
      };

  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    ...firebaseConfig,
  });

  console.log('Connected to Firebase Firestore');
} catch (err) {
  console.log(err);
}
};

export default connectDb;
