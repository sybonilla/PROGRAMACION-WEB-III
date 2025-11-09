//7. Crea un endpoint GET /productos que 
// devuelva todos los productos y muestre 
// el nombre de la categoría a la 
// que pertenece cada uno. 

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

app.get('/productos',(req, res)=>{
    
    const q = "SELECT p.nombre, p.precio, p.stock, c.nombre AS Nombre_categoria FROM productos p, categorias c WHERE p.categoria_id = c.id"
    
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