import models from "../database/models/index"
import "regenerator-runtime/runtime";

const { Contact } = models;
console.log("check the contact model",Contact)

const { Op } = require("sequelize");

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
   
    static async getContactById(value) {
       
        return await Contact.findOne({ where: { id: value } });
      }
    static async updateContact(updates,id){
       return await Contact.update(updates,{where: { id:id }, returning: true })
        

    }
    static async deleteContact(value){
        return await Contact.destroy({ where: {id: value } });
        

    }
}