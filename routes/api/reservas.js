const router = require('express').Router();
const middlewares = require('../middlewares');
const { Reserva, User, Turnos } = require('../../db');

router.get('/', async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(400);
    }
});

router.get('/:fecha_reserva', middlewares.checkToken, async (req, res) => {
    try {
        console.log(req.params)     

        const reservas = await Reserva.findAll({
            where: {
                fecha_reserva: req.params.fecha_reserva
            },
            attributes: [
                'id_reserva',
                'fecha_reserva',
                'id_turno',
                'username'
            ],
            include: {
                model: User,
                attributes:['username']
            },
            include: {
                model: Turnos,
                attributes:['id_turno']
            }
        });
        console.log(reservas);
        if (reservas) {
            res.status(200).json(reservas);
        } else {
            res.status(400);
        }
    } catch (error) {
        res.status(400);
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