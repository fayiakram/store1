const UserModel = require("../model/user.model");

class UserService {
    constructor() {
        this.userModel = new UserModel;
    }

    async findByEmail() {
        const email = await this.userModel.findByEmail(inputEmail);
        if (email) {


        }
    }
}

module.exports = UserService;