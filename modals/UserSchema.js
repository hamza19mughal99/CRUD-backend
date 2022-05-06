import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true
    },
});

const users = new mongoose.model("usersInfo",userSchema);

export default users;