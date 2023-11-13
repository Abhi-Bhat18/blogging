import express, { Request, Response } from "express";
import dotnev from 'dotenv'

dotnev.config()

console.log("Env",process.env.NODE_ENV)
const port = process.env.PORT || 1337;

const app = express();



app.get("/", (req: Request, res: Response) => {
  console.log(req.url);

  return res.send("Hello world server is up and running");
});
app.get('/check',(req : Request,res : Response) => {
  try {

    return res.json({
      success : true
    })
    
  } catch (error) {
    console.log("Err",error);

    return res.status(500).json( {
      success : false,
      message : "something went wrong"
     })
  }
})
app.listen(1337, () => console.log("Server is listening at port 1337"));
