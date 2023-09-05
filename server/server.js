import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/api", (req,res) => {
    let question = ["What is my name?","What is your name?", "What is your Mom?", "What is Carl Studying Right Now?"];
    return res.status(200).json({question});
})
app.post("/api/response", (req,res) => {
    let answer = req.body[0];
    console.log(answer);
    if (answer == "Ana")
    {
    return res.status(200).json({message: "This works"})
    }
})
app.listen(5000, () => {console.log("Server listening at 5000")})