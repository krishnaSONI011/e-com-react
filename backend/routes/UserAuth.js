import express from "express";
import jwt from "jsonwebtoken";
import { hashpass, comparePass } from "../helper/password.js";
import userModel from "../model/userModel.js";

const routes = express.Router();

routes.post("/register", async (req, res) => {
  try {
    const { firstname, email, password, phone, lastname } = req.body;

 
    // eslint-disable-next-line default-case
    switch(true){
      case !firstname:return res.status(400).json({
        type:"fname",
        error:"First Name is required"
      })
      case !email:return res.status(400).json({
        type:"email",
        error:"Email is required"
      })
      case !password: return res.status(400).json({
        type:"password",
        error:"Password is required"
      })
      case !phone:return res.status(400).json({
        type:"phone",
        error:"Phone number is required"
      })
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Already registered. Please login.",
      });
    }

    const hashedPassword = await hashpass(password);

    const user = new userModel({
      firstname,
      email,
      password: hashedPassword,
      phone,
      lastname,
    });
    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        firstname: user.firstname,
        email: user.email,
        phone: user.phone,
        lastname: user.lastname,
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
});

// login
routes.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({
        success: false,
        message: "Please fill the all data for login",
      });
    }
    let user = await userModel.findOne({ email });
    if (user) {
      let Hpassword = await comparePass(password, user.password);
      if (Hpassword) {
        let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRETE, {
          expiresIn: "1d",
        });
        res.status(200).send({
          success: true,
          message: "Login",
          user: {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            email:user.email
          },
          token,
        });
      } else {
        return res.status(400).send({
          success: false,
          message: "Invaild password",
        });
      }
    } else {
      return res.status(400).send({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `somthing went worng ${error}`,
    });
  }
});

// update user data as given.



routes.post("/update", async (req, res) => {
  try {
    const { firstname, lastname, phone, email, id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "User ID is required",
      });
    }

    // Check if the user with the given ID exists
    const existingUser = await userModel.findById(id);

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    // Update user data
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        phone,
        email,
      },
      {
        new: true, // To return the updated user document
      }
    );

    return res.json({
      success: true,
      user: {
        id: updatedUser._id,
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        phone: updatedUser.phone,
        email:updatedUser.email
      },
    });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
});


export default routes;
