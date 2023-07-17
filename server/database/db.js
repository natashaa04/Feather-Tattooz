import mongoose from "mongoose";


export const Connection=async(username,password)=>{
    console.log(username ,password ,'jjj')
    const URL=`mongodb+srv://${username}:${password}@cluster0.s7yqupv.mongodb.net/?retryWrites=true&w=majority`
    try{

    await mongoose.connect(URL,{ 
            useUnifiedTopology:true,
            useNewUrlParser:true,
          

        
        
        })
        console.log('database connected succesfully');

    }catch(error){
        console.log('Error while connection database is',error.meassage);
    }
}