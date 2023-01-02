import Event from '../models/Event.js';

class EventController {
    static eventadd = async (req, res) => {
        try {
            const {
                title,
                content,
                Name,
                Logo,
                description,
                date,
                venue,
                time,
                img,
                registerLink,
                question1, answer1,
                question2, answer2

            } = req.body

            const newEvent = new Event({
                title: title,
                content: content,
                Name: Name, Logo: Logo,
                description: description,
                date: date,
                venue: venue,
                time: time,
                img: img,
                registerLink: registerLink,
                questions1: question1,
                answer1: answer1,
                question2: question2,
                answer2: answer2
            })
            const result = await newEvent.save()
            res.status(201).send(result)
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }
    static allevent = async (req, res) => {
        try {
            const result = await Event.find()
            res.send(result)

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }

    static eventfind = async (req, res) => {
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