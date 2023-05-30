const FichaService = require('../services/FichaService');
    
module.exports = {

    pegarTodos: async (req, res)=> {
        let json ={error:'', result:[]};

        let fichas = await FichaService.pegarTodos();

        for(let i in fichas){
            json.result.push({
                id_fichas: fichas[i].id_ficha,
                historico: fichas[i].historico_medico,
                clienteid: fichas[i].id_cliente


            })
        }
        
        res.json(json);


    },

    pegarUmapenas: async(req,res) => {

        let json = {error:'', result:{}};
        let id_ficha = req.params.id_ficha;
        let ficha = await FichaService.pegarUmapenas(id_ficha);
        
        if(ficha){
            json.result = ficha;
            
        }

        res.json(json);
    }
}