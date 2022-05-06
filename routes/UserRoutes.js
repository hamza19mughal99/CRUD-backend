import express from "express";
const router = express.Router();
import {CreateUser, getAllUser, getOneUser} from "../Controller/index.js";


router.post('/register', CreateUser);
router.get('/all-users', getAllUser);
router.get('/all-users/:id', getOneUser)

export default router;