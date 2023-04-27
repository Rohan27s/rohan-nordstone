import EventModel from '../models/Event.js';

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
                question1, answer1,
                question2, answer2

            } = req.body

            const newEvent = new EventModel({
                title: title,
                content: content,
                societies: societies,
                description: description,
                date: date,
                venue: venue,
                time: time,
                img: img,
                registerLink: registerLink,
                question1: question1,
                answer1: answer1,
                question2: question2,
                answer2: answer2
            })
            const result = await newEvent.save()
            res.status(201).send({result})
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }
    static allevent = async (req, res) => {
        try {
            const result = await EventModel.find()
            res.send(result)

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }

    static eventfind = async (req, res) => {
        try {
            const result = await EventModel.findById(req.params.id)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }

}
export default EventController