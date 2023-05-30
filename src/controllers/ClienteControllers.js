const ClienteService = require('../services/ClienteService');
    
module.exports = {

    pegarTodos: async (req, res)=> {
        let json ={error:'', result:[]};

        let cliente = await ClienteService.pegarTodos();

        for(let i in cliente){
            json.result.push({
                id_cliente: cliente[i].id_cliente,
                name: cliente[i].nome,
                cpf: cliente[i].CPF


            })
        }
        
        res.json(json);


    },

    pegarUmapenas: async(req,res) => {

        let json = {error:'', result:{}};
        let id_cliente = req.params.id_cliente;
        let cliente = await ClienteService.pegarUmapenas(id_cliente);
        
        if(cliente){
            json.result = cliente;
            
        }

        res.json(json);
    },

    inserir: async(req,res) => {
        let json ={error:'', result:{}};

        let nome = req.body.nome
        let CPF = req.body.CPF;

        if(nome && CPF){
            let ClienteId = await ClienteService.inserir(nome, CPF);
            json.result = {
                id_cliente: ClienteId,
                nome,
                CPF

            };
        }else{
            json.error = 'Campos não enviados';
        
        }
        
            res.json(json);

        },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let id_cliente = req.params.id_cliente;
        let nome = req.body.nome;
        let cpf = req.body.CPF;

        if (id_cliente && nome && cpf){
            await ClienteService.alterar(id_cliente, nome,cpf);
            json.result = {
                id_cliente,
                nome,
                cpf
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await ClienteService.excluir(req.params.id_cliente);
        
        res.json(json);
    }


}