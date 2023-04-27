import Society from "../models/Society.js";

class SocietyController{
    static societyadd = async (req,res) =>{
        try{
            const { 
                name,
                category,
            description,
            cover,
            members,
            url1,
            url2,
            url3
        } = req.body

        const newSociety = new Society({
            name:name,
            category:category,
            cover:cover,
            description:description,
            members:members,
            url1:url1,
            url2:url2,
            url3:url3
        })
        const result = await newSociety.save()
        res.status(201).send(result)
    }
        catch(err){
            console.log(err);
            res.status(500).json({message:"wrong"});
        }
    }

    static societies = async (req,res) =>{
        try{
            const result = await Society.find()
            res.send(result)

        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"wrong"});
        }
    }
      static societyfind = async (req,res)=>{
        try {
            const result = await Society.findById(req.params.id)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    static updateDocById = async (req, res) => {
        try {
            const result = await Society.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    static dltDocById = async (req, res) => {
        try {
            const result = await Society.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default SocietyController
