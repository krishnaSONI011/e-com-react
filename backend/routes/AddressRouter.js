import express from "express"
import addressModel from "../model/addressModel.js";

const Router = express.Router();

Router.post("/add",async (req,res)=>{
    try{
    const{user,firstname,lastname,addressLine1,addressLine2,company,postal,phone,city,country,state} = req.body;
    
    let  address = new addressModel({
        user,
        firstname,
        lastname,
        addressLine1,
        addressLine2,
        company,
        postal,
        phone,
        city,
        country,
        state
    })
    address.save();
    return res.status(200).json({
        success:true,
        message:"address save" 
    })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:"Internal server Error"
        })
    }
});
Router.post("/get", async (req, res) => {
    try {
      const { user } = req.body;
      const data = await addressModel.find({ user });
  
      if (data) {
        return res.status(200).json({
          success: true,
          data
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Data not found"
        });
      }
    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        error: "Internal error"
      });
    }
  });
  

export default Router;