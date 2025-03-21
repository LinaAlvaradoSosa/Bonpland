import Property from "../models/property.models.js"

export async function newProperty(req, res) {
    try {
        const newProperty = new Property(req.body);
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el inmueble", error });
    }
}

export async function getProperties(req, res) {
    try {
        const getProperties = await Property.find();
        res.status(201).json({ok:true, getProperties})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error: "Error, please contact the admin"})
    }

}

export async function getPropertyById(req, res) {
    try {
        const { id } = req.params;
        const property = await Property.findById({_id:id});
        if(!property) return res.send('The property does not exist');
        res.status(201).json({ok:true, property})  
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error: "Error, please contact the admin"});
    }
    
}

export async function deleteProperty(req, res) {
    const {id } = req.params
    try {
        const findPropety = await Property.findById({_id : id})
        if (!findPropety) return res.send('The propety does not exist')

        const deleteProperty = await Property.findByIdAndDelete({_id : id})
        res.status(201).json({ok: true, deleteProperty})
    } catch (error) {
        console.log(error.message);
        res.status(500),send({error: " Error, pease contact the admin"})
    }
}

export async function updateProperty(req, res) {
    try {
        const data = req.body
        const { id } = req.params

        const findPropety = await Property.findById({_id : id});
        if (!findPropety) return res.send('The property does not exist')
        
        const updateProperty = await Property. findByIdAndUpdate(id, data);
        res.status(201).json({ok:true, updateProperty})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({error: "Error, please constact the admin"})  
    }
}
export async function getAllPropertiesByFilters(req, res) {
    try {
        const filters = {};
        if (req.query.city) filters.city = req.query.city;
        if (req.query.country) filters.country = req.query.country;
        if (req.query.contractType) filters.contractType = req.query.contractType;
        if (req.query.minPrice) filters.price = { $gte: req.query.minPrice };
        if (req.query.maxPrice) filters.price = { ...filters.price, $lte: req.query.maxPrice };
        if (req.query.rooms) filters.rooms = req.query.rooms;
        const properties = await Property.find(filters);
        res.json(properties);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error, please constact the admin", error });
    }
}
export async function getPropertiesByPages (req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10; 
        const skip = (page - 1) * limit;

        const totalProperties = await Property.countDocuments();
        const properties = await Property.find().skip(skip).limit(limit);

        res.json({
            totalPages: Math.ceil(totalProperties / limit),
            currentPage: page,
            hasPrevPage: page > 1,
            hasNextPage: page < Math.ceil(totalProperties / limit),
            properties,
        });
    } catch (error) {
        res.status(500).json({ message: "Error getting properties", error });
    }
}
export async function getDestacados(req, res) {
    try {
        const propiedadesDestacados = await Property.find({ featured: true });
        res.json(propiedadesDestacados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las propiedades destacadas", error });
    }
}