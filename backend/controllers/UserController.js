const UserModel = require("../models/UserModel");

exports.registerUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        message: "Please fill all fileds",
        success: false,
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        message: "User already exists",
        success: false,
      });
    }
    const user = new UserModel({ name, password, email });
    await user.save();
    return res.status(201).send({
      message: "User registered succesfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error creating user",
      success: false,
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        message: "Please fill all fields",
        success: false,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(500).send({
        message: "User dosent exists",
        success: false,
      });
    }

    if (password != user.password) {
      return res.status(500).send({
        message: "Password do not match",
        success: false,
      });
    }
    return res.status(200).send({
      message: "User login succesfull",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).send({
      message: "User login failed",
      success: false,
      error,
    });
  }
};
