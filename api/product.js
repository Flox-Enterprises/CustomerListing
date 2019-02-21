const mysql = require('mysql');
const express = require('express');
const router = express.Router();
var db = require('../config')

//get product list
router.get('/getAll', (req, res) => {
    let sql = `select id,name,description,price from tbl_product where isActive = 1 order by id desc`;
    let query = db.query(sql, (err, result) => {
        if (err) res.json({ status: -1, message: "error occured" });
        else res.json({ status: 1, message: "All product fetched successfully", data: result, link:'https://mobilestyler-offshore.appspot.com/api/user/get' });
    });
});

//get product list
router.get('/get/:id', (req, res) => {
    let sql = `select id,name,description,price from tbl_product where isActive = 1 AND id=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) res.json({ status: -1, message: "error occured" });
        else res.json({ status: 1, message: "Single Product data fetched successfully", data: result });
    });
});

//add product
router.post('/addNew', (req, res) => {
    let product = {
        name: req.body.prod_name,
        description: req.body.prod_desc,
        price: req.body.prod_price
    };
    let sql = 'INSERT INTO tbl_product SET ?';
    let query = db.query(sql, product, (err, result) => {
        if (err) throw err;
        res.json({ status: 1, message: 'Product Added' });
    });
});


//Update product
router.put('/update/:id', (req, res) => {
    let product = {
        name: req.body.prod_name,
        description: req.body.prod_desc,
        price: req.body.prod_price
    };
    let sql = `UPDATE tbl_product SET ? where id= ${req.params.id}`;
    let query = db.query(sql, product, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json({ status: 1, message: 'Product Updated' });
    });
});

//Delete product
router.delete('/delete/:id', (req, res) => {
    let sql = `UPDATE tbl_product SET isActive=0 where id= ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.json({ status: 1, message: 'Product deleted' });
    });
});

module.exports = router;