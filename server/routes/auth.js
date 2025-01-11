import { register, login } from "../controller/usersController.js";
import { Router } from "express";

/*Define routes*/
const router = Router();

router.post("/", register);
router.post("/login", login);


export default router;
