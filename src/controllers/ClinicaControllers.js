const ClinicaService = require('../services/ClinicaService');
    
module.exports = {

    pegarTodos: async (req, res)=> {
        let json ={error:'', result:[]};

        let clinicas = await ClinicaService.pegarTodos();

        for(let i in clinicas){
            json.result.push({
                id_empresa: clinicas[i].id_empresa,
                name: clinicas[i].nome,
                cnpj: clinicas[i].CNPJ


            })
        }
        
        res.json(json);


    },

    pegarUmapenas: async(req,res) => {

        let json = {error:'', result:{}};
        let id_empresa = req.params.id_empresa;
        let clinica = await ClinicaService.pegarUmapenas(id_empresa);
        
        if(clinica){
            json.result = clinica;
            
        }

        res.json(json);
    }
}