const router = require('express').Router();
const { Roles } = require('../../db');

router.get('/', async (req, res) => {
    try {
        const roles = await Roles.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(400);
    }
});

module.exports = router;