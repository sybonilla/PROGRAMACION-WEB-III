//1. Crea un endpoint POST /categorias que 
// permita registrar una nueva categoría enviando 
// nombre y descripcion en el body de la petición. 

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

app.post('/categorias',(req, res)=>{
    const q = "INSERT INTO categorias(nombre, descripcion) VALUES (?)"
    const valores = [req.body.nombre, req.body.descripcion]
    
    db.query(q,[valores],(err,datos)=>{
        if(err){
            return res.send(err)
        }
        return res.json(datos)
    })
})

const puerto = 3001; 
app.listen(puerto, () => {
    console.log(`Servidor en http://localhost:${puerto}`)
});

