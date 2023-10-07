const express = require("express");
const router = express.Router();
const user = require("../modals/userSchama");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secToken = "dnyanankurmadebydwtechpvtlmtpathrotamravati";

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email is already registered",
        alert: true,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = new user({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await userData.save();

    res.status(201).json({
      message: "Account Created Successfully",
      alert: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in Register",
      alert: false,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userLogin = await user.findOne({ email: email });

    if (!userLogin) {
      return res.status(401).json({
        message: "Email not Registered!",
        alert: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, userLogin.password);

    if (isPasswordValid) {

      //token part
      
    const data = {
      student: {
        id: userLogin._id,
      },
    };
    const authToken = jwt.sign(data, secToken);

      //token end


      return res.status(200).json({
        message: "Login Successfully",
        alert: true,
        authToken: authToken,
      });
    } else {
      return res.status(401).json({
        message: "Invalid email or Password",
        alert: false,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "An Unexpected error Occurred",
      alert: false,
    });
  }
});

module.exports = router;
