import mongoose from "mongoose";

const CalculateSchema = new mongoose.Schema(
    {
        FirstNo: {
            type: Number,
            required: true,
        }, SecondNo: {
            type: Number,
            required: true,
        },
        Operation: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Calculate ||
    mongoose.model("Calculate", CalculateSchema);