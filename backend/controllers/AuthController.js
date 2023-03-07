const AuthController = {};

AuthController.signin = (req, res) => {
  res.json({
    message: "Login",
  });
};

AuthController.signup = (req, res) => {
  res.json({
    message: "Signup",
  });
};

AuthController.signout = (req, res) => {
  res.json({
    message: "Signout",
  });
};

module.exports = AuthController;
