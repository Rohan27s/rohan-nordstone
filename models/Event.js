import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
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
        date: {
            type: String,
        },
        venue: {
            type: String,
        },
        time:{
            type:String,
        },
        img: {
            type: String,
        },
        registerLink: {
            type: String,
        },
        question1: {
            type: String,
        },
        answer1: {
            type: String,
        },
        question2: {
            type: String,
        },
        answer2: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Event ||
    mongoose.model("Event", EventSchema);