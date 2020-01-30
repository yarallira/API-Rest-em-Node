const express = require('express');
const Product = require('../models/product')

const router = express.Router();

router.get('/', async (req, res) => {
    const id = req.params.id;
    try{
        const product = await Product.find();
        console.log(product);
        return res.send(product);

    } catch (error){
        return res.status(400).send({error: "Erro ao encontrar produto"})
    }
});

router.post('/', async (req, res) =>{
    try{
        const product = await Product.create(req.body);

      return res.send({product})
      
    } catch(error) {
        return res.status(400).send({error: "Erro ao cadastrar produto"})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
   
    try{
        const product = await Product.findById(id);
        //console.log(product);
        return res.send({product});

    } catch (error){
        return res.status(400).send({error: "Erro ao encontrar produto"})
    }
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id;
    const {name , price } = req.body;
    
    try{
        const product = await Product.findByIdAndUpdate(id, {$set: {name, price} }, {new : true});

        console.log(product)

        return res.send({product});
    }catch (error){
        return res.status(400).send({error: "Erro ao atualizar produto"})

    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    try{

        const product = await Product.findByIdAndRemove(id);
console.log(product);
        return res.send({message : "Deletado com sucesso!"})

    } catch (error) {
        return res.status(400).send({error: "Erro ao deletar produto"})
    }
})

module.exports = app => app.use('/product', router);