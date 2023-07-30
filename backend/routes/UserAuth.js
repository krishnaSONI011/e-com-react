import express from "express";
import jwt from "jsonwebtoken";
import { hashpass, comparePass } from "../helper/password.js";
import userModel from "../model/userModel.js";

const routes = express.Router();

routes.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !phone) {
      return res
        .status(400)
        .json({ error: "Name, email, password, and phone are required." });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "Already registered. Please login.",
      });
    }

    const hashedPassword = await hashpass(password);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
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
            name: user.name,
            address: user.address,
            phone: user.phone,
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

export default routes;
