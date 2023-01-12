import mongoose from "mongoose";
const PastSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
        },
        Logo: {
            type: String,
        },
        description: {
            type: String,
        },
        time:{
            type:String,
        },
        date: {
            type: String,
        },
        venue: {
            type: String,
        },
        img: {
            type: String,
        },
        First: {
            type: String,
        },
        Second: {
            type: String,
        },
        Third: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Past ||
    mongoose.model("Past", PastSchema);