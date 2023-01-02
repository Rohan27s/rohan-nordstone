import Event from '../models/Event.js';

class EventController {
    static eventadd = async (req, res) => {
        try {
            const {
                title,
                content,
                societies,
                description,
                date,
                venue,
                time,
                img,
                registerLink,
                questions

            } = req.body

            const newEvent = new Event({
                title: title,
                content:content,
                societies:societies,
                description:description,
                date:date,
                venue:venue,
                time:time,
                img:img,
                registerLink:registerLink,
                questions:questions
            })
            const result = await newEvent.save()
            res.status(201).send(result)
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }
    static allevent= async (req,res) =>{
        try{
            const result = await Event.find()
            res.send(result)

        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"wrong"});
        }
    }

    static eventfind = async (req,res)=>{
        try {
            const result = await Event.findById(req.params.id)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }

}
export default EventController