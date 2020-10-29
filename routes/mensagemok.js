const router = require('express').Router()

router.get('/', (req,res) =>{
    res.render('mensagemok',{title: 'Sucesso!'})
})


module.exports=router;