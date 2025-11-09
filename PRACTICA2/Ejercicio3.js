//3. Crea un endpoint GET /categorias/:id que 
// devuelva la categoría con el ID especificado y 
// además, incluya todos los productos que 
// pertenecen a esa categoría. 

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

app.get('/categorias/:id',(req, res)=>{
    const q = "SELECT c.id, c.nombre AS nombre_categoria, c.descripcion, p.nombre, p.precio, p.stock FROM categorias c, productos p WHERE c.id = p.categoria_id AND c.id = (?)"

    const idC = parseInt(req.params.id) 
    db.query(q,idC,(err, datos)=>{
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