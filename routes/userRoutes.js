const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.get("/users", auth, userController.getAll);        
router.get("/users/:id", auth, userController.getById);
router.get("/users/:id/posts", auth, userController.getPosts);
router.post("/auth/signup", userController.createUser);
router.post("/auth/login", userController.loginUser);
router.post("/auth/logout", userController.logoutUser);

module.exports = router;