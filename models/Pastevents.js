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
        societies:
        [
            { 
                name: { type: String } ,
                logo: { type: String }
            }
        ],
        sliderImage:
        [
            { 
                img: { type: String } ,
            }
        ],
        reportpdf:{
            type:String,
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
        winners:
        [
            { 
                positionname: { type: String } ,
                positionholder: { type: String }
            }
        ],
    },
    { timestamps: true }
);

export default mongoose.models.Past ||
    mongoose.model("Past", PastSchema);