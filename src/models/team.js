class Team {
    constructor(id, encrypt_code, pick_content, is_picked, update_time) {
        this.id = id;
        this.encrypt_code = encrypt_code;
        this.pick_content = pick_content;
        this.is_picked = is_picked;
        this.update_time = update_time;
    }
}

module.exports = Team;