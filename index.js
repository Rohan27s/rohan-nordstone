import express from 'express';
import cors from 'cors';
import calculate from './routes/calculate.js';
import connectDb from './utils/firebase.js';

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

// Connect to Firebase Firestore
connectDb();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("It's Working👌");
});

app.use('/api', calculate);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
