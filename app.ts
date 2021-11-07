import * as express from "express";
import * as bodyParser from "body-parser";
import {querys} from "./querys";
import {doAndSendQuery, putAndSendQuery, postAndSendQuery} from "./db";

const app = express();
const router = express.Router();
const port = 3000;


//------------------------| Tecnopolis Api |-------------------------------------\\

router.get("/all", (req, res) => {
    doAndSendQuery(res, querys.getEntradas());
});

router.get("/bydni/:dni", (req, res) => {
    const dni = req.params.dni;
    doAndSendQuery(res, querys.getEntradasByDni(dni));
});

router.get('/bydate/:date', (req, res) => {
    const date = req.params.date;
    doAndSendQuery(res, querys.getEntradasByDate(date));
});

router.get('/byeventos/:idEventos', (req, res) => {
    const idEventos = req.params.idEventos;
    doAndSendQuery(res, querys.getEntradasByEventos(idEventos));
});

router.post("/localdatabasebackup", (req, res) => {
    const data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    }
    postAndSendQuery(res, querys.postCliente(data));
});

router.put("/show/:idEntradas/:deviceid", (req, res) => {
    const idEntradas = req.params.idEntradas;
    const deviceid = req.params.deviceid;

    putAndSendQuery(res, querys.putEntradaShow(idEntradas, deviceid));
});

router.put("/preshow/:idEntradas/:deviceid", (req, res) => {
    const idEntradas = req.params.idEntradas;
    const deviceid = req.params.deviceid;

    putAndSendQuery(res, querys.putEntradaPreshow(idEntradas, deviceid));
});

//-------------------------------------------------------------------------------\\


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/tecnopolis/tickets', router);


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
});