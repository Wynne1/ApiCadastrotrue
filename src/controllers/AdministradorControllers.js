const AdministradorService = require('../services/AdministradorService');
    
module.exports = {

    pegarTodos: async (req, res)=> {
        let json ={error:'', result:[]};

        let administradores = await AdministradorService.pegarTodos();

        for(let i in administradores){
            json.result.push({
                id_funcionarios: administradores[i].id_funcionarios,
                name: administradores[i].nome,
                salario: administradores[i].salario


            })
        }
        
        res.json(json);


    },

    pegarUmapenas: async(req,res) => {

        let json = {error:'', result:{}};
        let id_funcionarios = req.params.id_funcionarios;
        let administrador = await AdministradorService.pegarUmapenas(id_funcionarios);
        
        if(administrador){
            json.result = administrador;
            
        }

        res.json(json);
    },

    inserir: async(req,res) => {
        let json ={error:'', result:{}};

        let nome = req.body.nome
        let salario = req.body.salario;

        if(nome && salario){
            let AdministradorId = await AdministradorService.inserir(nome, salario);
            json.result = {
                id_funcionarios: AdministradorId,
                nome,
                salario

            };
        }else{
            json.error = 'Campos não enviados';
        
        }
        
            res.json(json);

        },

        alterar: async(req, res) => {
            let json = {error:'', result:{}};
    
            let id_funcionarios = req.params.id_funcionarios;
            let nome = req.body.nome;
            let salario = req.body.salario;
    
            if (id_funcionarios && nome && salario){
                await AdministradorService.alterar(id_funcionarios, nome,salario);
                json.result = {
                    id_funcionarios,
                    nome,
                    salario
                };
            }else{
                json.error = 'Campos não enviados';
            }
            res.json(json);
        },

        excluir: async(req, res) => {
            let json = {error:'', result:{}};
    
            await AdministradorService.excluir(req.params.id_funcionarios);
            
            res.json(json);
        }
     

    }

