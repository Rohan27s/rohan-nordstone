import mongoose from "mongoose";
/*
title: 'MAQ Software Hiring',
        content: "BCA Placement Cell",
        societies: [{Name:'BCA Placement Cell',Logo:'https://res.cloudinary.com/rohangotwal/image/upload/v1671559670/Blog/131210953_905343756870234_1122747852493756031_n_zb7gvd.jpg'}],
        description:
            "We are a team of software experts who accelerate data-driven transformations for Global 2000 companies. Using data analytics, cloud technology, and data science, we accelerate software initiatives that enable our customers to transform their industries. We are committed to customer growth and meeting client objectives. 90% of our clients are repeat customers. We are awarded as 2021 Microsoft partner of the year for delivering innovative business intelligence and analytics solutions using Microsoft Power BI. We are hiring for 2023 passing out batch and would like to interact with your students.",
       
        date: '5-01-2023',
        venue: 'Online',
        time: '10:00 AM',
        img: "https://res.cloudinary.com/rohangotwal/image/upload/v1671707376/WhatsApp_Image_2022-12-22_at_14.26.09_p0btnr.jpg",
        registerLink:"https://qml7rtuomnw.typeform.com/to/coUgcJpa",
        questions:[{
            question: "Designation",
            answer:
              "Software Engineer 1",
            open: false
          },
            {
            question: "Eligible Branches",
            answer: "B.Tech (CSE/ IT) and BCA",
            open: false
          },
          {
            question:"Eligibility criteria",
            answer: "60% plus or equivalent in Computer Science/Information Technology, 60% plus in 10th and 12th and No active backlogs",
            open: false
*/
const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
        societies: [
            {
               Name: {
                type:String,
               } ,
               Logo:{
                type:String,
               }
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
        img: {
            type: String,
        },
        registerLink: {
            type: String,
        },
        questions:  [
            {
               question: {
                type:String,
               } ,
               answer:{
                type:String,
               },
               open:{
                type:Boolean,
               }
            }
        ],
    },
    { timestamps: true }
);

export default mongoose.models.Event ||
    mongoose.model("Event", EventSchema);