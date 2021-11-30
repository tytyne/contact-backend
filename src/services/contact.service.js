import models from "../database/models/index"
import "regenerator-runtime/runtime";
const { Op } = require("sequelize");
const{Contact}=models
/**
 * @description deals with contact 
 */

export default class ContactService{
    static async listContact(){
        const contacts = await Contact.findAll()
        return contacts

    }
    static async searchContact(value){
        const contacts = await Contact.findAll({
            where: {
              [Op.or]: [
                { firstname:value },
                { lastname:value }
              ]
            }
          });

        return contacts
    }
    static async createContact(contact){
        const contacts=await Contact.create(contact)
        return contacts

    }
    static async ContactById(id){
        const contacts=await Contact.findOne(id)
        return contacts

    }
    static async updateContact(updates,id){
        const contacts= await Contact.update(updates,{where: { id:id }, returning: true })
        return contacts

    }
    static async deleteContact(id){
        const contacts= await Contact.delete({
            where: { id:id },
            returning: true,
            plain: true,
            })
            await Contact.update(updates,{where: { id:id }, returning: true })
        return contacts

    }
}