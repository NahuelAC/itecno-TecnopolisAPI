import * as express from "express";
import * as bodyParser from "body-parser";
import {querys} from "./querys";
import {doAndSendQuery, putAndSendQuery, postAndSendQuery} from "./db";

const app = express();
const router1 = express.Router();
const router2 = express.Router();
const port = 3000;


//------------------------| Tecnopolis Api |-------------------------------------\\

router1.get("/all", (req, res) => {

    doAndSendQuery(res, querys.getEntradas());
});


router1.get('/bydate/:date', (req, res) => {
    const date = req.params.date;

    doAndSendQuery(res, querys.getEntradasByDate(date));
});


router1.get("/bydni/:dni/:idEvento", (req, res) => {
    const dni = req.params.dni;
    const idEvento = req.params.idEvento;

    doAndSendQuery(res, querys.getEntradasByDni(dni, idEvento));
});


router1.get('/byeventos/:idEventos', (req, res) => {
    const idEventos = req.params.idEventos;

    doAndSendQuery(res, querys.getEntradasByEventos(idEventos));
});


router1.post("/localdatabasebackup/:espectaculo_id/:dni/:fechayhora/:personas/:sala/:device", (req, res) => {
    const data = {
        espectaculo_id: req.params.espectaculo_id,
        dni: req.params.dni,
        fechayhora: req.params.fechayhora,
        personas: req.params.personas,
        sala: req.params.sala,
        device: req.params.device
    }
    postAndSendQuery(res, querys.postCliente(data));
});


router1.put("/show/:idEntradas/:show/:deviceid", (req, res) => {
    const idEntradas = req.params.idEntradas;
    const show = req.params.show;
    const deviceid = req.params.deviceid;

    putAndSendQuery(res, querys.putEntradaShow(idEntradas, show, deviceid));
});


router2.get("/all", (req, res) => {
    doAndSendQuery(res, querys.getEventos());
});

router2.get("/byid/:id", (req, res) => {
    const id = req.params.id;

    doAndSendQuery(res, querys.getEventoById(id));
});


//-------------------------------------------------------------------------------\\


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/tecnopolis/tickets', router1);
app.use('/api/tecnopolis/eventos', router2);


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
});
