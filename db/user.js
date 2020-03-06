const knex = require('./connection');
module.exports = {

    getAll(){
        return knex('users');
    },

    getOne(email){

        return knex('users').where('email', email.email);
    },

    create(user){
        return knex('users').insert(user, '*');
    },
    
}