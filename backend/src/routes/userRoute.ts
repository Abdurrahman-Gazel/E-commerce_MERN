import express, { request, response } from "express";
import { login, register } from "../services/userService";


const router = express.Router();


router.post("/register" , async (request , response) =>{

    try{
        const {firstName, lastName , password , email} = request.body;
        const {statusCode, data} = await register({firstName, lastName, password, email});
        response.status(statusCode).send(data)

    }catch(err) {
    response.status(500).send("Somthing went wrong!")
  }


});

router.post('/login', async (request, response) => {
    try {
        const {email, password} = request.body;
        const {statusCode, data} = await login ({email, password})
        response.status(statusCode).send(data)
    }
    catch(err) {
        response.status(500).send("Somthing went wrong!")
      }

}
)

export default router;