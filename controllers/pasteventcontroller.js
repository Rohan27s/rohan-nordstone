import PastEvent from '../models/Pastevents.js';

class PastEventController {
    static pasteventadd = async (req, res) => {
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
                winners
            } = req.body

            const newEvent = new PastEvent({
                title: title,
                content: content,
                societies:societies,
                description: description,
                date: date,
                venue: venue,
                time: time,
                img: img,
                winners:winners
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
    static updateDocById = async (req, res) => {
        try {
            const result = await PastEvent.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    static dltDocById = async (req, res) => {
        try {
            const result = await PastEvent.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        }
        catch (error) {
            console.log(error)
        }
    }

}
export default PastEventController