import PastEvent from '../models/Pastevents.js';

class PastEventController {
    static pasteventadd = async (req, res) => {
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
                First,
                Second, Third
            } = req.body

            const newEvent = new PastEvent({
                title: title,
                content: content,
                Name: Name, Logo: Logo,
                description: description,
                date: date,
                venue: venue,
                time: time,
                img: img,
                First: First,
                Second: Second,
                Third: Third
            })
            const result = await newEvent.save()
            res.status(201).send(result)
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }
    static allpastevent = async (req, res) => {
        try {
            const result = await PastEvent.find()
            res.send(result)

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }

    static pasteventfind = async (req, res) => {
        try {
            const result = await PastEvent.findById(req.params.id)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }

}
export default PastEventController