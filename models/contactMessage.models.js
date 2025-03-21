import mongoose from "mongoose";


const ContactMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require:true
    },
    referenceCode: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    status: {
        type: String,
        default: false
        // false = pendiente, true = atendido
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    }
})

const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);
export default ContactMessage