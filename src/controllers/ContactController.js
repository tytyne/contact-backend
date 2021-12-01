
import ContactService from "../services/contact.service"
export default class ContactController{
    static async ListContact(req,res,next){
        try{
            const data= await ContactService.listContact()
            res.status(200).json({message:"list all contacts",data})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
 
    static async PostContact(req,res,next){
        try{
            const formData = req.body;
            console.log("formadaaaa",formData)
            const data = await ContactService.createContact(formData)
            res.status(200).json({message:"contact created succesfully",data})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async searchContact(req,res,next){
        try{
            const input = req.query.input;
            const data = await ContactService.searchContact(input)
            res.status(200).json({message:"contact created succesfully",data})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async getContact(req,res,next){
        try{
            const id=req.params.id
            console.log("check idd",id)
            const data = await ContactService.getContactById(id)
            res.status(200).json({message:"contact",data})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async updatingContact(req,res,next){
        try{
            const id=req.params.id
            // const data=await ContactService.ContactById(id)
            console.log("check data",id)
            const newContactInfo = req.body
            console.log("check contact",newContactInfo)
            if (req.body.firstname) newContactInfo.firstname = req.body.firstname
            if (req.body.lastname) newContactInfo.lastname = req.body.lastname    
            if (req.body.email) newContactInfo.gender = req.body.email
            if (req.body.phone) newContactInfo.gender = req.body.phone
            const dbResponse = await ContactService.updateContact(newContactInfo,id)
            res.status(200).json({message:"update a contact!!",dbResponse})

        }
        catch(e){
            return next(new(Error(e)))
        }
    }

    static async deleteContact(req,res,next){
        try{
            const id=req.params.id
            console.log("check idd",id)
            const data = await ContactService.getContactById(id)
            if(!data) return res.status(400).json({message:"contact no found"})
           else
            await ContactService.deleteContact(id)
            console.log("check data",data)
            res.status(200).json({message:"delete a contact!!"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }

}