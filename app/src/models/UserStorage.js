"use strict";

class UserStorage {
    static #users = {
        id: ["ahshss903"],
        psword: ["1234"],
        name: ["0331",]
    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers
        }, {});
        return newUsers;
    };
};

module.exports = UserStorage