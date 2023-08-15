const { Psicologos } = require('../models');
const bcrypt = require("bcryptjs");
const psicologoController = {
    
    async listarPsicologo(req, res){
        const listaPsicologo = await Psicologos.findAll();

        if (!listaPsicologo) return res.status(200).json({});

        res.status(200).json(listaPsicologo);
    },

    async listarPsicologoById(req, res){
        const { id } = req.params
        const psicologosById = await Psicologos.findByPk(id);

        res.status(200).json(psicologosById);


    },

    async cadastrarPsicologo(req, res){
        const { nome, email, senha, apresentacao } =  req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha: newSenha,
            apresentacao,
        });

        res.status(201).json(novoPsicologo);
    },

    async atualizarPsicologo(req, res){
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;

        const psicologoAtualizado = await Psicologos.update(
            {
                nome,
                email,
                senha,
                apresentacao,
            },
            {
                where:{
                    id,
                },
            }
        );

        res.status(200).json(psicologoAtualizado)
    },

    async deletarPsicologo(req, res){
        const { id } = req.params;

        if (!id) return res.status(404).json("Id não encontrado");

        await Psicologos.destroy({
            where:{
                id,
            },
        });

        res.status(204)
    },

};

module.exports = psicologoController;