const express = require('express');
const pool = require('../config/database');
const HeroRepository = require('../repositories/hero');
const HeroService = require('../services/hero');

const router = express.Router();
const heroRepository = new HeroRepository(pool);
const heroService = new HeroService(heroRepository);

router.get('/heroes', async (req, res) => {
    const heroes = await heroService.getAllHeroes();
    res.json(heroes);
});

router.get('/heroes/:id', async (req, res) => {
    const hero = await heroService.getHeroById(req.params.id);
    if (hero) {
        res.json(hero);
    } else {
        res.status(404).send('Hero not found');
    }
});

module.exports = router;
