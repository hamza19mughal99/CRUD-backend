import express from "express";
const router = express.Router();
import {CreateUser, getAllUser} from "../Controller/index.js";


router.post('/register', CreateUser);
router.get('/all-users', getAllUser)

export default router;