const {Aplikasi} = require('../models/index')
const { Op } = require("sequelize");

class Controller{
    static post(req,res,next){
        let payload = req.body
        Aplikasi.create(payload)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static get(req,res,next){
        let pendiri = req.query.pendiri
        if (pendiri) {
            Aplikasi.findAll({where: { pendiri: {[Op.like]: `${pendiri}%`}}})
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                next(err)
            })
        } else {
            Aplikasi.findAll()
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                next(err)
            })
        }
    }

    static getByID(req,res,next){
        let id = req.params.id
        Aplikasi.findOne({where:{id}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static put(req,res,next){
        let id = req.params.id
        Aplikasi.update(req.body,{where:{id}})
        .then(data=>{
            res.status(200).json({message: 'update success'})
        })
        .catch(err=>{
            next(err)
        })
    }

    static delete(req,res,next){
        let id = req.params.id

        Aplikasi.destroy({where:{id}})
        .then(data=>{
            res.status(200).json({message:'delete success'})
        })
        .catch(err=>{
            next(err)
        })
    }

    static getByPendiri(req,res,next){
        let pendiri = req.query.pendiri
        Aplikasi.findOne({where:{pendiri}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }
}
module.exports = Controller