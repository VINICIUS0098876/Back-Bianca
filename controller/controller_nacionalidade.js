const nacionalidadeDAO = require('../model/DAO/nacionalidade')
const ERROR_Messages = require('../modulo/config.js')





const getListarClassificacao = async function() {

    let nacionalidadeJSON = {};

    let dadosNacionalidade = await nacionalidadeDAO.getListarNacionalidade()

    if(dadosNacionalidade){
        nacionalidadeJSON.nacionalidade = dadosNacionalidade;
        nacionalidadeJSON.quantidade = dadosNacionalidade.length;
        nacionalidadeJSON.status_code = 200;
        
        return nacionalidadeJSON
    } else{
        return false;
    }
}

const getListarNacionalidadeByID = async function(id){
    try {
        // Recebe o id do filme
     
    let idNacionalidade = id

    //Cria o objeto JSON
    let nacionalidadeJSON = {}

    //Validação para verificar se o id é válido(Vazio, indefinido e não numérico)
    if(idNacionalidade == '' || idNacionalidade == undefined || isNaN(idNacionalidade)){
        return message.ERROR_INVALID_ID // 400
    }else{
        
        //Encaminha para o DAO localizar o id do filme 
        let dadosNacionalidade = await nacionalidadeDAO.getListarPorIDNacionalidade(id)
        
        
        // Validação para verificar se existem dados de retorno
        if(dadosNacionalidade){

            // Validação para verificar a quantidade de itens encontrados.
            if(dadosNacionalidade.length > 0){
                //Criar o JSON de retorno
                nacionalidadeJSON.nacionalidade = dadosNacionalidade
                 nacionalidadeJSON.status_code = 200
    
                
                return nacionalidadeJSON
            }else{
                return message.ERROR_NOT_FOUND // 404
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_DB // 500
        }
    }
   } catch (error) {
       return message.ERROR_INTERNAL_SERVER_DB
   }
}



module.exports = {
    getListarClassificacao,
    getListarNacionalidadeByID
}