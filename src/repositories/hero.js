const Hero = require('../models/hero');

class HeroRepository {
    constructor(pool) {
        this.pool = pool;
    }

    async findAll() {
        const [rows] = await this.pool.query('SELECT * FROM hero');
        return rows.map(row => new Hero(row.id, row.name, row.line, row.is_pick));
    }

    async findById(id) {
        const [rows] = await this.pool.query('SELECT * FROM hero WHERE id = ?', [id]);
        if (rows.length > 0) {
            const row = rows[0];
            return new Hero(row.id, row.name, row.line, row.is_pick);
        }
        return null;
    }

}

module.exports = HeroRepository;
