import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema ({
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        country: {
            type: String, 
            required: true,
        },
        city: {
            type: String, 
            required: true,
        },
        address: {
            type: String, 
            required: true,
        },
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number, 
        required: true,
    },
    area: {
        type: Number, 
        required: true,
    },
    images: {
        type: [String], 
        required: true,
    },
    propertyType: {
        type: String, 
        required: true,
    },
    contractType: {
        type: String, 
        required: true,
    },
    propertyStatus: {
        type: String, 
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    isNewProperty: {
        type: Boolean, 
        default: false,
    },
    createdAt: {
        type: Date, 
        default: Date.now, 
    },
});
const Property = mongoose.model('Property', PropertySchema)

export default Property


