import mongoose from "mongoose";


const MovieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    desc: {type: String},
    image: {type: String},
    trailer: {type: String},
    video: {type: String},
    year: {type: String},
    duration: {type: String},
    ageLimit: {type: String},
    genre: {type: String},
    isSeries: {type: Boolean, default: false}

},{timestamps: true})



export default mongoose.model("Movie", MovieSchema);