import express from 'express';
import { login, register } from '../controllers/users.controller.js';
import { deleteProperty, getAllPropertiesByFilters, getProperties, getPropertiesByPages, getPropertyById, newProperty, updateProperty } from '../controllers/property.controller.js';
import tokenverification from "../middleware/jwt.js"


const router = express.Router()

// Admin

router.post('/register', register)
router.post('/login', login)


// inmuebles

router.post('/newProperty',tokenverification, newProperty)
router.get('/getProperties', tokenverification, getProperties)
router.get('/getPropertyById/:id',tokenverification, getPropertyById)
router.delete('/deleteProperty/:id', tokenverification, deleteProperty)
router.put('/updateProperty/:id', tokenverification, updateProperty)
router.get('/getAllProperties', getAllPropertiesByFilters)
router.get('/properties', getPropertiesByPages)
// http://localhost:3000/properties?page=1



export default router 