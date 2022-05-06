import UserSchema from "../modals/UserSchema.js";

export const CreateUser = (req, res) => {
    // const {username, email, job, number} = req.body;
    const adduser = new UserSchema(req.body);
    adduser.save();

    res.status(201).send(adduser);
}

export const getAllUser = (req, res) => {
    const userData = UserSchema.find();
    res.status(200).json(userData)
}