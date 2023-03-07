const SignupRequest = {};

SignupRequest.validate = (req, res, next) => {
  const { first_name, last_name, email, password, confirmPassword } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }

  next();
};

module.exports = SignupRequest;
