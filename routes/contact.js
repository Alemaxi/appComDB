const router = require('express').Router();

const ControllerContact = require('../middlewares/controllers/contact');

router.get('/', ControllerContact.getContact);

router.post('/add', ControllerContact.postContact);

module.exports = router;