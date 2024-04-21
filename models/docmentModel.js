import mongoose from 'mongoose';

const DocumentSchema=new mongoose.Schema({
    documentTitle: { type: String, required: true },  
    address: { type: String, required: true, unique: true },  
    

    
},{
    timestamps:{createdAt:'created_at',modifiedAt:'modified_at'}
}

)

export default mongoose.model('document',DocumentSchema);