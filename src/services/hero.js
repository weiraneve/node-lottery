class HeroService {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }

    async getAllHeroes() {
        return await this.heroRepository.findAll();
    }

    async getHeroById(id) {
        return await this.heroRepository.findById(id);
    }
}

module.exports = HeroService;
