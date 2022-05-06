import UserSchema from "../modals/UserSchema.js";

export const CreateUser = (req, res) => {
    // const {username, email, job, number} = req.body;
    const adduser = new UserSchema(req.body);
    adduser.save();

    res.status(201).send(adduser);
}

export const getAllUser = async (req, res) => {
    const userData = await UserSchema.find();
    res.status(200).send(userData)
}

export const getOneUser = async (req, res) => {
    const {id} = req.params;

    const getOneUser = await UserSchema.findById(id)

    res.status(200).send(getOneUser)
}