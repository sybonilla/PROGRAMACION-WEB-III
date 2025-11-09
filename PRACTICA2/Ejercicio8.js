//8. Crea un endpoint GET /productos/:id que 
// devuelva la información de un producto por 
// su ID, incluyendo el nombre de la categoría 
// asociada. 

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

app.get('/productos/:id',(req, res)=>{
    
    const idC = parseInt(req.params.id)
    const q = "SELECT p.nombre, p.precio, p.stock, c.nombre AS Nombre_categoria FROM productos p, categorias c WHERE p.categoria_id = c.id AND p.id = (?)"
    
    db.query(q,[idC],(err, datos)=>{
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