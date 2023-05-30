const db = require('../db');

module.exports = {

    pegarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('Select * FROM fichas', (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    pegarUmapenas: (id_ficha) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('Select * FROM fichas WHERE id_ficha = ?', [id_ficha], (error, results) =>{
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