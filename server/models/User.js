import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    profilePic: {type: String, default: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"},
    isAdmin: {type: Boolean, default: false},

},{timestamps: true})



export default mongoose.model("User", UserSchema);