import { Router } from "express"
import { verifyUser } from "../../middlewares/index.js"
// @import the controller
import * as AuthControllers from "./index.js"

// @define routes
const router = Router()
router.post("/register", AuthControllers.register)
router.post("/login", AuthControllers.login)
router.get("/verify/:token", AuthControllers.verify)
// router.post("/users/verify", AuthControllers.verify)
// router.get("/keep-login", verifyUser, AuthControllers.keepLogin)
router.delete("/account", verifyUser, AuthControllers.deleteAccount)

export default router