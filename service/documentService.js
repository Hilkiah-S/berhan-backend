import DocumentSchema from "../models/docmentModel.js";

async function createDoc(doctitle,address){

    const docresponse=DocumentSchema.create({
        documentTitle: doctitle,address
    });

    if(!docresponse){
        return false;
    }
    return docresponse;



} 
async function getAllBooks() {
    const result = await DocumentSchema.find({});
    console.log("here", result.map(e => e.toJSON()));
    return result.map(e => e.toJSON())
}


export default {createDoc,getAllBooks};