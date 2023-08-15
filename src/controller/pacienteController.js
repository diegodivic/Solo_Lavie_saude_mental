const { Pacientes } = require('../models');
const pacienteController = {
    
    async listarPaciente(req, res){
        const listaPacientes = await Pacientes.findAll();

        if (!listaPacientes) return res.status(200).json({});

        res.status(200).json(listaPacientes);
    },

    /*listarPacienteById(req, res){

    },*/

    async cadastrarPaciente(req, res){
        const { nome, email, nascimento } =  req.body;

        const novoPaciente = await Pacientes.create({
            nome,
            email,
            nascimento,
        });

        res.status(201).json(novoPaciente);
    },

    

    async atualizarPaciente(req, res){
        const { id } = req.params;
        const { nome, email, nascimento } = req.body;

        const pacienteAtualizado = await Pacientes.update(
            {
                nome,
                email,
                nascimento,
            },
            {
                where:{
                    id,
                },
            }
        );

        res.status(200).json(pacienteAtualizado)
    },

    async deletarPaciente(req, res){
        try{
        const { id } = req.params;

        if (!id) return res.status(404).json("Id não encontrado");

        await Pacientes.destroy({
            where:{
                id,
            },
        });

        res.status(204);
    } catch(error){
        return res.status(500).json("Ocorreu algum erro")
    }

},
};

module.exports = pacienteController;