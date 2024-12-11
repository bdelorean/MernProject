import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import menuRoutes from "./Routes/menuRoutes.js";
import multer from 'multer';
import path from 'path';


//Laad variabelen uit het .env-bestand
dotenv.config();

//Aanmaken express app
const app = express();

//verzoeken alleen accepteren vanuit frontend
//dit omdat de frontend op een andere port draait
app.use(cors());

// Configurăm storage-ul pentru Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Locația în care vor fi stocate fișierele încărcate
    cb(null, 'public/images');  // Asigură-te că folderul există
  },
  filename: (req, file, cb) => {
    // Numele fișierului, adăugăm un timestamp pentru a preveni conflictele
    cb(null, Date.now() + path.extname(file.originalname));  // Adaugă extensia fișierului
  }
});

const upload = multer({ storage: storage });
// Middleware pentru a servi fișierele statice din folderul public
app.use('/images', express.static('public/images'));

// Ruta de încărcare imagine
app.post('/upload', upload.single('image'), (req, res) => {
  try {
    // După ce imaginea este încărcată, returnează URL-ul acesteia
    res.status(200).json({ imageUrl: `/images/${req.file.filename}` });
  } catch (error) {
    res.status(500).send('Error uploading file');
  }
});

// Middleware om JSON-verzoeken te parsen
app.use(express.json());

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Routes definieren!
app.use("/api/menu", menuRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});
