const express = require("express")
const router = express.Router()

const Auth = require("./middlewares/Auth")

const AuthValidator = require('./validators/AuthValidator');

const AuthController = require("./controllers/AuthController")
const UserController = require("./controllers/UserController")
const AdController = require("./controllers/AdController")

router.get("/ping", (req, res) => {
  res.json({ pong: true })
})

router.post("/user/signin", AuthController.signin)
router.post("/user/signup", AuthValidator.signup, AuthController.signup)

router.get("/states", UserController.getStates)
router.get("/user/me", Auth.private, UserController.info)
router.put("/user/me", Auth.private, UserController.editAction)

router.get("/categories", AdController.getCategories)
router.post("/ad/add", Auth.private, AdController.addAction)
router.get("/ad/list", AdController.getList)
router.get("/ad/item", AdController.getItem)
router.post("/ad/:id", Auth.private, AdController.editAction)

module.exports = router
