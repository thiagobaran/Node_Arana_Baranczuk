import config from './dbconfig.js';
import sql from 'mssql';

export class PizzaServices{
    static getAll = async () =>{

    }
    static getById = async (ID) =>{
        let returnEntity = null;
        console.log('Estpy en: PizzaService.GetById(ID)',ID);
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input("pID", sql.Int, ID)
                                    .query('SELECT * FROM Pizza WHERE ID = @pID');
            returnEntity = result.recordsets[0];
        }
        catch(error){
            console.log(error);
        }
        return returnEntity;
    }
    static insert = async (Pizza) =>{

    }
    static update = async (Pizza) =>{

    }
    static deleteById = async (ID) =>{
        let rowsAffected = 0;
        console.log('Estoy en: PizzaServices.deleteById(ID)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input(pID, sql.Int, ID)
                                    .query('DELETE FROM Pizza WHERE ID = @pID');
            rowsAffected = result.rowsAffected;
        }
        catch(error){
            console.log(error);
        }
        return rowsAffected;
    }
}