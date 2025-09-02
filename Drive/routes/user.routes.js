const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isLength({ min: 11 }).isEmail(),
  body("firstname").trim().isLength({ min: 2 }),
  body("lastname").trim().isLength({ min: 2 }),
  body("password").trim().isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: "invalid data",
      });
    }
    return errors;
  }
);

module.exports = router;
