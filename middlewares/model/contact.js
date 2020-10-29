const fs = require('fs');
const db = require('../../public/config/config');

function registerContact(contact) {
    let {email,mensagem} = contact;
    db('contacts').insert({'email':email,'mensagem':mensagem}).then();
    console.log(contact.email);
}

module.exports = {registerContact};