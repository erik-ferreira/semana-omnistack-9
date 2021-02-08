const Spot = require('../models/Spot')
const User = require('../models/User')
const { show } = require('./ProfileController')

module.exports = {
    async index(req, res) {
        const { tech } = req.query

        const spots = await Spot.find({ techs: tech })
        
        if(spots.length == 0) return res.json({ error: 'Não foi encontrado nenhum spot com essa tecnologia!' })

        return res.json(spots)
    },
    async show(req, res) {
        const spots = await Spot.find()

        return res.json(spots)
    },
    async store(req, res) {
        const { filename } = req.file
        const { company, price, techs } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if(!user) {
            return res.status(400).json({ error: 'O usuário não existe!'})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim())
        })

        return res.json(spot)
    }
}