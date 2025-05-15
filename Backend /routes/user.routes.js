const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const { verifyToken } = require("../middlewares/auth.middleware");
const { allowRoles } = require("../middlewares/role.middleware");


router.get("/", verifyToken, allowRoles("ADMIN", "SUPER_ADMIN"), getUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, allowRoles("ADMIN", "SUPER_ADMIN"), updateUser);
router.delete("/:id", verifyToken, allowRoles("SUPER_ADMIN"), deleteUser);

module.exports = router;

