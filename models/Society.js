import mongoose from "mongoose";
// // id: "",
// category: "",
// description: "",
// President: "",
// VicePresident: "",
// GeneralSecretary: "",
// EventsHead: "",
// DesignHead: "",
// PRandOutreachHead: "",
// ContentHead: ""
const SocietySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
        },
        President: {
            type: String,
        },
        VicePresident: {
            type: String,
        },
        GeneralSecretary: {
            type: String,
        },
        EventsHead: {
            type: String,
        },
        DesignHead: {
            type: String,
        },
        PRandOutreachHead: {
            type: String,
        },
        ContentHead: {
            type: String,
        },
        url1: {
            type: String,
        }
        , url2: {
            type: String,
        }, url3: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Society ||
    mongoose.model("Society", SocietySchema);