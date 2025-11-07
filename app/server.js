import express from 'express';
import cors from 'cors'

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log("Port is running in: ", PORT)
})

app.get("/",(req,res)=>{
    res.json({message: "welcome user"})
})