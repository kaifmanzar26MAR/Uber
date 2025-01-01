const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
    if (
      !firstname ||
      !email ||
      !password ||
      firstname.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      throw new Error("All fields are required");
    }

    const user = await userModel.create({
      fullname: { firstname, lastname },
      email,
      password,
    });

    return user;
};
