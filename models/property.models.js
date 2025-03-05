import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String,
        required: true
    },
    country: { 
        type: String,
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    squareMetersMin: { 
        type: String, 
        required: true 
    },
    squareMetersMax: { 
        type: String, 
        required: true 
    },
    rooms: { 
        type: String, 
        required: true 
    },
    contractType: { 
        type: String, 
        enum: ["alquiler", "compra"],
        required: true
    },
    status: {
        type: String, 
        enum: ["Disponible", "Reservado", "Alquilado", "Vendido"],
        default: "Disponible" 
    },
    images: { 
        type: String
    }
})

const Property = mongoose.model('Property', PropertySchema)

export default Property


// {
// "name": "",
// "description": "",
// "country": "",
// "city": "",
// "address": "",
// "price": "",
// "squareMetersMin": "",
// "squareMetersMax": "",
// "rooms": "",
// "contractType": "",
// "status": "",
// "images": ""
// }
