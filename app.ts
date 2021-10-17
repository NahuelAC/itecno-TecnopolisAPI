import * as express from "express";
import {querys} from "./querys";
import {doAndSendQuery} from "./db";

const app = express();
const router_t = express.Router();
const router_cck = express.Router();
const port = 3000;


//------------------------| Tecnopolis Api |-------------------------------------\\

router_t.get("/all", (req, res) => {
    doAndSendQuery.t(res, querys.t.getEntradas());
});

router_t.get("/bydni/:dni", (req, res) => {
    const dni = req.params.dni;
    doAndSendQuery.t(res, querys.t.getEntradasByDni(dni));
});

router_t.post("/localdatabasebackup", (req, res) => {
    const data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    }
    doAndSendQuery.t(res, querys.t.postCliente(data));
});

//----------------------| Centro Cultural Kirchner Api |------------------------\\

router_cck.get("/all", (req, res) => {
    doAndSendQuery.cck(res, querys.cck.getEntradas());
});

router_cck.get("/bydni/:dni", (req, res) => {
    const dni = req.params.dni;
    doAndSendQuery.cck(res, querys.cck.getEntradasByDni(dni));
});

router_cck.post("/localdatabasebackup", (req, res) => {
    const data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    }
    doAndSendQuery.cck(res, querys.cck.postCliente(data));
});

//-------------------------------------------------------------------------------\\


app.use('/api/tecnopolis/tickets', router_t);
app.use('/api/cck/tickets', router_cck);


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
});