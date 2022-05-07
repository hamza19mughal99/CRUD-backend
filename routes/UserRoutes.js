import express from "express";
const router = express.Router();
import {CreateUser, getAllUser, getOneUser, deleteOneUser, updateOneUser} from "../Controller/index.js";


router.post('/register', CreateUser);
router.get('/all-users', getAllUser);
router.get('/all-users/:id', getOneUser)
router.delete('/all-users/:id', deleteOneUser)
router.patch('/all-users/:id', updateOneUser)

export default router;