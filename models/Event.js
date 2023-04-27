import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
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
        description: {
            type: String,
        },
        date: {
            type: String,
        },
        venue: {
            type: String,
        },
        time: {
            type: String,
        },
        img: {
            type: String,
        },
        registerLink: {
            type: String,
        },
        faq:
        [
            { 
                ques: { type: String } ,
                ans: { type: String }
            }
        ],
    },
    { timestamps: true }
);
mongoose.models = {}
const EventModel = mongoose.model("Event", EventSchema);

export default EventModel