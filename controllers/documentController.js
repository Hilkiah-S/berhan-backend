import docService from '../service/documentService.js';

async function createDoc(req, res) {
    console.log("house Controller create Entered salesmager");
    try {
        const { 
            doctitle,address
            } = req.body;
            
      
            const result = await docService.createDoc(doctitle,address)
            if (!result)
                return res.json({ "success": false, "msg": "Creating a document failed" }, 400)
            return res.json({ "success": true, "data": result })
        } catch (e) {
            return res.json({ "success": false, "msg": e.toString() }, 500)
        }
}

async function getAllBooks(req, res) {
    try {

        const result = await docService.getAllCustomers();
        if (!result)
            return res.json({ "success": false, "msg": "Can't fetch books" }, 401)
        return res.json({ "success": true, "data": result })
    } catch (e) {
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }

}


export default {createDoc,getAllBooks};