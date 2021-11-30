

export default class ContactController{

    static async PostContact(req,res,next){
        try{
            res.status(200).json({message:"post a contact"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async ListContact(req,res,next){
        try{
            res.status(200).json({message:"list all contacts"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async ContactByEmail(req,res,next){
        try{
            res.status(200).json({message:"list a contact by email!!"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async searchContact(req,res,next){
        try{
            res.status(200).json({message:"search a contact!!"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async updateContact(req,res,next){
        try{
            res.status(200).json({message:"update a contact!!"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }

    static async deleteContact(req,res,next){
        try{
            res.status(200).json({message:"delete a contact!!"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }

}