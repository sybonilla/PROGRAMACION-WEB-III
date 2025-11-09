//5. Crea un endpoint DELETE /categorias/:id 
// que elimine la categoría indicada y, 
// al mismo tiempo, elimine automáticamente 
// todos los productos que pertenecen a esa categoría. 

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

app.delete('/categorias/:id',(req, res)=>{
    
    const idC = parseInt(req.params.id) 
    const q = "DELETE c, p FROM categorias c LEFT JOIN productos p ON p.categoria_id = c.id WHERE c.id = (?);"
    
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