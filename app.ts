import * as express from "express";
import {query} from "./querys";

const app = express();
const router = express.Router();
const port = 3000;


router.get("/all", (req, res) => {
    query.getEntradas(res);
});

router.get("/bydni/:dni", (req, res) => {
    const dni = req.params.dni;
    query.getEntradasByDni(res, dni);
});

router.post("/ldb", (req, res) => {
    const data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    }
    query.postCliente(res, data);
});


//-------------------------------------------------------------------------------\\


app.use('/api/tickets', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});