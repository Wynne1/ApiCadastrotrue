const db = require('../db');

module.exports = {

    pegarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('Select * FROM administradores', (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    pegarUmapenas: (id_funcionarios) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('Select * FROM administradores WHERE id_funcionarios = ?', [id_funcionarios], (error, results) =>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
                });
            });
        },


    inserir: (nome, salario) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('Insert into administradores (nome, salario) values (?, ?)', [nome, salario], (error, results) =>{
                if(error) { rejeitado(error); return; }
                aceito(results.inserirId);


              }       
           );
        });
    },

    alterar:(id_funcionarios, nome, salario)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE administradores SET nome = ?, salario = ? where id_funcionarios = ?',
                [nome, salario, id_funcionarios],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (id_funcionarios)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM administradores WHERE id_funcionarios = ?',[id_funcionarios], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }

};