import mongoose from "mongoose";

const AdministratorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        default: "administrador"
    }
})

const Administrator = mongoose.model('Administrator', AdministratorSchema)

export default Administrator

// {
//     "email": "juanito@gmail.com",
//     "password": "12345678Li"
// }