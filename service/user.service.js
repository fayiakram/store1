const UserModel = require("../model/user.model");

class UserService {
    constructor() {
        this.userModel = new UserModel;
    }

    async findByEmail(inputEmail) {
        const email = await this.userModel.findByEmail(inputEmail);
        return email;

    }

    async registration(payload) {
        // validasi user terdaftar atau belum
        try {
            const { email } = payload;
            const user = await this.findByEmail(email);

            if (user) {
                throw new Error("User sudah terdaftar");
            }

            // store data to db
            const userNew = new UserModel(payload.id, payload.email, payload.password);
            await this.userModel.save(userNew);

            return "User berhasil disimpan"

        } catch (error) {
            throw error;

        }
    }

    /**
  * ini service login
  * @param {*} payload 
  */
    async login(payload) {
        // 1 validasi email, email terdaftar atau tidak, kalau tidak errorkan user tidak terdaftar.
        // 2 check password, kalau sama sukses kalau beda trow error password tidak sesuai
        // 3 kasih message berhasil login ketika email dan password berhasil. 
    }
}

module.exports = UserService;