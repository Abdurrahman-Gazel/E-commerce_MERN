import express from "express";
import { getAllProducts } from "../services/productService";



const router = express.Router()


router.get('/', async (req, res) => {
try{
    const prodcuts = await getAllProducts();
    res.status(200).send(prodcuts)
} catch(err) {
    res.status(500).send("Somthing went wrong!")
  }

})

export default router;