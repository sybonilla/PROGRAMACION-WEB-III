//2. Crea un endpoint GET /categorias que 
// devuelva todas las categorías registradas 
// en la base de datos.

import express from "express";
import mysql from 'mysql2';

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_p2w3'
})

app.get('/categorias',(req, res)=>{
    const q = "SELECT * FROM categorias"

    db.query(q,(err, datos)=>{
        if(err){
            return res.json(err)
        }
        return res.json(datos)
    })
})


const puerto = 3001; 
app.listen(puerto, () => {
    console.log(`Servidor en http://localhost:${puerto}`)
});
