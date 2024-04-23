const { PrismaClient } = require('@prisma/client')
const { ERROR_INTERNAL_SERVER_DB } = require('../../modulo/config')

/**
 * $queryRawUnsafe(sql) --encaminha uma variavel
 * $queryRaw('select * from tbl_filme') -- encaminha o script direto
 */

const prisma = new PrismaClient()


const getListarNacionalidade = async function(){
    try {

        let sql = `select * from nacionalidade order by id desc`

        let rsNacionalidade = await prisma.$queryRawUnsafe(sql)
        return rsNacionalidade
    } catch (error) {
        return false
    }
}

const getListarPorIDNacionalidade = async function(id){
    try {

        let sql = `select * from nacionalidade where id = ${id}`

        let rsNacionalidade = await prisma.$queryRawUnsafe(sql)
        return rsNacionalidade
    } catch (error) {
        return false
    }
}


module.exports = {
    getListarNacionalidade,
    getListarPorIDNacionalidade
}