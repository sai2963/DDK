const bcrypt = require('bcrypt');
const db = require('../data/database');

class User {
    constructor(email, password, fullname, street, postal, city) {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.address = {
            street: street,
            postal: postal,
            city: city
        };
    }
getUSerWithSameEmail(){
    return db.getDb().collection('users').findOne({email:this.email})
}
    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);
        await db.getDb().collection('users').insertOne({
            email: this.email,
            password: hashedPassword,
            name: this.fullname,
            address: this.address
        });
    }

    hasMatchingPassword(){
        bcrypt.compare(this.password,hashedPassword)
    }

}

module.exports = User;
