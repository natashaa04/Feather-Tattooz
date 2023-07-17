import  express  from "express";

const router=express.Router();




router.get('/',()=>{
    console.log('hello')
})
export default router;