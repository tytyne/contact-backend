
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
    static async searchContact(req,res,next){
        try{
            const {contact}=req.query
            const data= await ContactService.searchContact(contact)
            res.status(200).json({message:"search a contact!!",data})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async PostContact(req,res,next){
        try{
            const formData = req.body;
            const data = await ContactService.createContact(formData)
            res.status(200).json({message:"contact created succesfully",data})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
  
   
    static async updateContact(req,res,next){
        try{
            const {contactId}=req.params.id
            const data=await ContactService.ContactById(contactId)
            console.log("check data",data)
            const newContactInfo = req.body
            if (req.body.firstname) newContactInfo.firstname = req.body.firstname
            if (req.body.lastname) newContactInfo.lastname = req.body.lastname    
            if (req.body.email) newContactInfo.gender = req.body.email
            if (req.body.phone) newContactInfo.gender = req.body.phone
            const dbResponse = await updateUserInfo(newContactInfo, req.user.userId)
            res.status(200).json({message:"update a contact!!",dbResponse})

        }
        catch(e){
            return next(new(Error(e)))
        }
    }

    static async deleteContact(req,res,next){
        try{
            const {contactId}=req.params.id
            const data=await ContactService.ContactById(contactId)
            console.log("check data",data)
            res.status(200).json({message:"delete a contact!!"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }

}