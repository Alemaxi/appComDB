const modelContact = require('../model/contact');


function getContact(req,res) {
    res.render('contato',{title:'Contato'});
}

function postContact(req,res) {
    modelContact.registerContact(req.body);
    res.redirect('../mensagemok');
}

module.exports = {getContact,postContact};