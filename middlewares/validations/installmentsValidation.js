const { body } = require("express-validator");

exports.productsValidation = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Name cannot be empty")
      .isString()
      .withMessage("Name must be a string"),
    body("email")
      .notEmpty()
      .withMessage("Email cannot be empty")
      .isEmail()
      .withMessage("Invalid email format"),
    body("phone")
      .notEmpty()
      .withMessage("Phone cannot be empty")
      .isMobilePhone()
      .withMessage("Invalid phone number"),
    body("have_family")
      .notEmpty()
      .withMessage("Family information is required")
      .isBoolean()
      .withMessage("Have family should be a boolean"),
    body("salary")
      .notEmpty()
      .withMessage("Salary cannot be empty")
      .isNumeric()
      .withMessage("Salary must be numeric"),
    body("nationality")
      .notEmpty()
      .withMessage("Nationality cannot be empty")
      .isString()
      .withMessage("Nationality must be a string"),
    body("type")
      .notEmpty()
      .withMessage("Type cannot be empty")
      .isInt()
      .withMessage("Type must be an integer"),
    body("ads_number")
      .notEmpty()
      .withMessage("Ads number cannot be empty")
      .isInt()
      .withMessage("Ads number must be an integer"),
    body("gender")
      .notEmpty()
      .withMessage("Gender cannot be empty")
      .isInt()
      .withMessage("Gender must be an integer"),
    body("city")
      .notEmpty()
      .withMessage("City cannot be empty")
      .isString()
      .withMessage("City must be a string"),
    body("more_info")
      .notEmpty()
      .withMessage("More info cannot be empty")
      .isString()
      .withMessage("More info must be a string"),
    body("owner_name")
      .notEmpty()
      .withMessage("Owner name cannot be empty")
      .isString()
      .withMessage("Owner name must be a string"),
    body("owner_phone")
      .notEmpty()
      .withMessage("Owner phone cannot be empty")
      .isMobilePhone()
      .withMessage("Invalid owner phone number"),
    body("expect_rent_date")
      .notEmpty()
      .withMessage("Rent date cannot be empty")
      .isISO8601()
      .toDate()
      .withMessage("Invalid date format (ISO8601)"),
  ];
};
