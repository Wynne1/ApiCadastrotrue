const db = require('../db');

module.exports = {

    pegarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('Select * FROM clientes', (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    pegarUmapenas: (id_cliente) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('Select * FROM clientes WHERE id_cliente = ?', [id_cliente], (error, results) =>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
                });
            });
        },

        inserir: (nome, CPF) => {
            return new Promise((aceito, rejeitado)=>{
    
                db.query('Insert into clientes (nome, CPF) values (?, ?)', [nome, CPF], (error, results) =>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.inserirId);
    
    
                  }       
               );
            });
        },

        alterar:(id_cliente, nome, CPF)=> {
            return new Promise((aceito, rejeitado)=> {
                db.query('UPDATE clientes SET nome = ?, CPF = ? WHERE id_cliente = ?',
                    [nome, CPF, id_cliente],
                    (error, results) => {
                        if(error){ rejeitado(error); return; }
                        aceito(results);
                    }
                );
            });
        },


        excluir: (id_cliente)=> {
            return new Promise((aceito, rejeitado)=> {
                db.query('DELETE FROM clientes WHERE id_cliente = ?',[id_cliente], (error, results ) =>{
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                });
            });
        }

    
    };