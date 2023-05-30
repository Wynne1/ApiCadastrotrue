const db = require('../db');

module.exports = {

    pegarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('Select * FROM clinicas', (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    pegarUmapenas: (id_empresa) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('Select * FROM clinicas WHERE id_empresa = ?', [id_empresa], (error, results) =>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
                });
            });
        }
};