//6. Crea un endpoint POST /productos que 
// permita registrar un nuevo producto 
// enviando nombre, precio, stock y categoria_id 
// para asociarlo a una categoría existente. 

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

app.post('/productos',(req, res)=>{
    
    const valores = [req.body.nombre, req.body.precio, req.body.stock, req.body.categoria_id]
    const q = "INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?)"
    
    db.query(q,[valores],(err, datos)=>{
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