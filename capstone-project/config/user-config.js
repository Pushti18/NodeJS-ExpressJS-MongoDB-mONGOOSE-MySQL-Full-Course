class UserConfig{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

module.exports = new UserConfig('hj@gmail.com','12345678');