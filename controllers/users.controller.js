import administrator from "../models/administrator.models.js";
import jwt from "jsonwebtoken";
import ContactMessage from "../models/contactMessage.models.js";
import { configDotenv } from "dotenv";
configDotenv();

export async function register(req, res) {
    try {
        const {email, password} = req.body
        if(!email) return res.send('The name is required')
        if(!password) return res.send('The password is required')

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if(!emailRegex.test(email)) return res.send('Email is no valid')
        if(!passwordRegex.test(password)) return res.send('The password must contain uppercase, lowercase, a number and a character.')
        
        const newAdmi = await administrator.create(req.body);
        return res.status(201).json({ok:true, newAdmi})  

    } catch (error) {
        console.log(error.message);
        res.status(500).send({error: "Error, please contact the admin"});  
    }
    
}

export async function login(req, res) {
    try {
        let infoUser = req.body;
        let user = await administrator.findOne({email: infoUser.email})
        if (user) {
            let pass = infoUser.password
            if (user.password == pass) {
                let payload = {
                    id: user._id,
                    roll: user.roll
                }
                let KEY = process.env.KEY
                let token = jwt.sign(payload, KEY, {expiresIn:"2h"})
                res.status(200).json({token:token, id:user._id})
                
            } else {
                res.status(400).send({msj:"Invalid credentials"})
            }
            
        } else {
            res.status(400).send({msj:"Invalid credentials"})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error: "Error, please contact the admin"});      
    }
    
}

export async function contactMessage(req, res) {
    try {
        const { name, message, referenceCode, email } = req.body;
        if (!name || !message || !referenceCode || !email) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        const newMessage = new ContactMessage({ name, message, referenceCode, email });
        await newMessage.save();
        res.status(201).json({ message: "Solicitud enviada con éxito", data: newMessage });
    } catch (error) {
        res.status(500).json({ error: "Error al guardar la solicitud" });
    }
}

