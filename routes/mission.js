const router = require('express').Router();

router.get('/',(req,res,next) => {
    res.render('missao', {title:'Missão'});
});

module.exports = router;