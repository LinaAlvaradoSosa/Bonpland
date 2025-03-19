import express from 'express';
import { contactMessage, login, register } from '../controllers/users.controller.js';
import { deleteProperty, getAllPropertiesByFilters, getDestacados, getProperties, getPropertiesByPages, getPropertyById, newProperty, updateProperty } from '../controllers/property.controller.js';
import tokenverification from "../middleware/jwt.js"


const router = express.Router()

// Admin

router.post('/register', register)
router.post('/login', login)
router.post('/contactMessage', contactMessage)
router.get('/getContactMessage', contactMessage)


// inmuebles

router.post('/newProperty',tokenverification, newProperty)
router.get('/getProperties', getProperties)
router.get('/getPropertyById/:id', getPropertyById)
router.delete('/deleteProperty/:id', tokenverification, deleteProperty)
router.put('/updateProperty/:id', tokenverification, updateProperty)
router.get('/getAllProperties', getAllPropertiesByFilters)
router.get('/properties', getPropertiesByPages)
// http://localhost:3000/properties?page=1
router.get('/getDestacados', getDestacados)



export default router 