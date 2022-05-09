import UserSchema from "../modals/UserSchema.js";

export const CreateUser = (req, res) => {
    // const {username, email, job, number} = req.body;
    const adduser = new UserSchema(req.body);
    adduser.save();

    res.status(201).send(adduser);
}

export const getAllUser = async (req, res) => {
    if(req.query.keyword){
        const userData = await UserSchema.find({email: req.query.keyword})
        res.status(200).send(userData)
    }
    else{
        const userData = await UserSchema.find();
        res.status(200).send(userData)
    }

}

export const getOneUser = async (req, res) => {
    const {id} = req.params;

    const getOneUser = await UserSchema.findById(id)

    res.status(200).send(getOneUser)
}

export const deleteOneUser = async (req, res) => {
    const {id} = req.params;

    const deletedUser = await UserSchema.findByIdAndDelete(id)

    res.status(200).send(deletedUser)
}

export const updateOneUser = async (req, res) => {
    const {id} = req.params;

    const updatedUser = await UserSchema.findByIdAndUpdate(id, req.body, {
        new: true
    })

    res.status(200).send(updatedUser)
}