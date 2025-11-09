//10. Crea un endpoint PATCH /productos/:id/stock 
// que permita incrementar o decrementar el stock 
// de un producto enviando al body la cantidad que 
// se desea sumar o restar.  

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

app.patch('/productos/:id/stock', (req, res) => {
    const idC = req.params.id;
    const { cantidad } = req.body;

    const q = 'UPDATE productos SET stock = stock + ? WHERE id = ?';
    
    db.query(q, [cantidad, idC], (err, datos) => {
        if (err) {
            return res.json(err);
        }
        res.json(datos);
    });
});

const puerto = 3001; 
app.listen(puerto, () => {
    console.log(`Servidor en http://localhost:${puerto}`)
});