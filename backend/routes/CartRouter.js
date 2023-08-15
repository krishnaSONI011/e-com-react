import express from 'express'
import cartModel from '../model/cartModel.js';


let Router = express.Router()

Router.post('/add-cart', async (req,res)=>{
    try{
        let {user,product,qty,size} = req.body;
        // eslint-disable-next-line default-case
        switch(true){
            case !user:return res.status(400).json({message:"User not found"});
            case !product:return res.status(400).json({message:"Product not found"});
            case !qty:return res.status(400).json({message:"Quantity is  required"});
                }
        let cart = new cartModel({
            user,
            product,
            qty,
            size
        })
        await cart.save()
        return res.status(200).json({
            success:true,
            message:"Add to Cart"
        })
    }catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
            message:"somehting went wrong"
        })
    }
})
Router.post('/get-item', async (req, res) => {
    try {
        let { user } = req.body;
        let data = await cartModel.find({ user });
        if (data) {
            return res.status(200).json({
                success: true,
                data
            })
          
        }
        else {
            return res.status(200).json({
                success: true,
                message:"Sorry nothing in the cart"
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            success: false,
            message: "error in the cart",
            err
        })
    }
})
Router.delete('/delete-item', async (req, res) => {
    try {
        let { id } = req.body;
        await cartModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message:"item deleted "
        })
    } catch (err) {
        console.log("error")
        return res.status(400).json({
            success: false,
            message:"somthing went wrong"
        })
    }
})
export default Router;