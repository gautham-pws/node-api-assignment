import express from 'express';
import cors from 'cors';
import db from './models/index.js'
import tutorialRoutes from './routes/tutorial.routes.js';

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

tutorialRoutes(app);

app.listen(PORT,()=>{
    console.log("Port is running in: ", PORT)
})

app.get("/",(req,res)=>{
    res.json({message: "welcome user"})
})