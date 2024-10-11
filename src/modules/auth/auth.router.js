import { Router } from "express";

const router=Router();

router.get('/auth',(req,res)=>{
    return res.json({message:"success"})
})
export default router;