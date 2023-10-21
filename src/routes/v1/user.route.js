const express = require("express");
const { uservalidtion } = require("../../validations")
const { userController } = require("../../controllers")
const validate = require("../../middlewares/validate")
const router = express.Router();

router.post(
  "/create-user",
  validate(uservalidtion.createUser),
  userController.createUser
)

/** Get user list */
router.get(
  "/list",
  validate(uservalidtion.getUserList),
  userController.getUserList
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  validate(uservalidtion.getDetails),
  userController.deleteUser
);
router.put(
  "/update-details/:userId",
  validate(uservalidtion.updateDetails),
  userController.updateDetails
);


module.exports = router;