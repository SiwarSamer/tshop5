import { Router } from "express";

const router=Router();

router.get('/user',(req,res)=>{
    return res.json({message:"success"})
})
export default router;