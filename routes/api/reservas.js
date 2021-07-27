const router = require('express').Router();
const { Reserva, con } = require('../../db');
const middlewares = require('../middlewares');
//const { Op } = require('sequelize');

router.get('/', middlewares.checkToken, async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(400);
    }
});

router.get('/:fecha_reserva', middlewares.checkToken, async (req, res) => {
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

router.post('/crear-reserva', middlewares.checkToken, async (req, res) => {
    try {
        const reserva = await Reserva.create(req.body);
        res.status(200).json(reserva);
    } catch (error) {
        res.status(400);
    }
});

router.delete('/:id_reserva', middlewares.checkToken, async (req, res) => {
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


//router.post('/crear-reserva', async (req, res) => {
        // console.log(req.body);
    // try {
    //     const reserva = await Reserva.findOrCreate({ 
    //         where: { [Op.and]: [
    //             { fecha_reserva: req.body.fecha_reserva }, 
    //             { turno: req.body.turno }
    //         ],
    //         defaults: {
    //             username: req.body.username
    //         }
    //     }});
    //     console.log(reserva);
    //     res.status(200).json(reserva);
    // } catch (error) {
    //     res.status(400);
    // }
//});