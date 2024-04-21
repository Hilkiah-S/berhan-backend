import DocumentSchema from "../models/docmentModel.js";

async function createDoc(doctitle,address){

    const docresponse=DocumentSchema.create({
        DocumentTitle:doctitle,address
    });

    if(!docresponse){
        return false;
    }
    return docresponse;



} 


export default {createDoc};