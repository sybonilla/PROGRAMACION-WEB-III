//4. Crea un endpoint PUT /categorias/:id 
// que permita actualizar todos los datos de la 
// categoría con el ID especificado. 

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

app.put('/categorias/:id',(req, res)=>{
    
    const idC = parseInt(req.params.id) 
    const q = "UPDATE categorias SET nombre = (?), descripcion = (?) WHERE id = (?)"
    const valores = [req.body.nombre, req.body.descripcion]
    
    db.query(q,[...valores,idC],(err, datos)=>{
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