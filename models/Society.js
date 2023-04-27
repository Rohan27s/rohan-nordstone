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
        members:
        [
            { 
                designame: { type: String } ,
                desigholder: { type: String },
                number: { type: String },
                rank: { type: Number }
            }
        ],
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