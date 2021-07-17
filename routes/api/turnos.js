const router = require('express').Router();
const { Turnos } = require('../../db');

router.get('/', async (req, res) => {
    try {
        const turnos = await Turnos.findAll();
        res.status(200).json(turnos);
    } catch (error) {
        res.status(400);
    }
});

module.exports = router;