//9. Crea un endpoint PUT /productos/:id que 
// permita actualizar todos los datos de un producto, 
// incluyendo la opción de cambiar la categoría a la 
// que pertenece mediante categoria_id. 

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

app.put('/productos/:id',(req, res)=>{
    
    const idC = parseInt(req.params.id)
    const valores = [req.body.nombre, req.body.precio, req.body.stock, req.body.categoria_id]
    const q = "UPDATE productos SET nombre = ?, precio = ?, stock = ?, categoria_id = ? WHERE id = ?"
    
    db.query(q,[...valores, idC],(err, datos)=>{
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