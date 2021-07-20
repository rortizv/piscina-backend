const router = require('express').Router();
const {
    Reserva,
    con
} = require('../../db');
require('../../asociations');

router.get('/', async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(400);
    }
});

router.get('/:fecha_reserva', async (req, res) => {
    const miFecha = req.params.fecha_reserva;
    const sql = "SELECT RESERVAs.id_reserva, RESERVAs.fecha_reserva, RESERVAs.turno, USERs.torre_apto FROM RESERVAs \
        INNER JOIN USERs ON USERs.username = RESERVAs.username WHERE RESERVAs.fecha_reserva = \'" + miFecha + "\'";
    try {
        const result = await con.promise().query(sql)
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

router.post('/crear-reserva', async (req, res) => {
    try {
        const reserva = await Reserva.create(req.body);
        res.status(200).json(reserva);
    } catch (error) {
        res.status(400);
    }
});

router.put('/:id_reserva', async (req, res) => {
    try {
        await Reserva.update(req.body, {
            where: {
                id_reserva: req.body.id_reserva
            }
        });
        res.status(200).json({
            success: 'Modificado correctamente'
        });
    } catch (error) {
        res.status(400);
    }
});

router.delete('/:id_reserva', async (req, res) => {
    try {
        await Reserva.destroy({
            where: {
                id_reserva: req.body.id_reserva
            }
        });
        res.status(200).json({
            success: 'Eliminado correctamente'
        });
    } catch (error) {
        res.status(400);
    }
});

module.exports = router;