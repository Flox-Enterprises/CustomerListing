const mysql = require('mysql');
const express = require('express');
const router = express.Router();
var db = require('../config')

//get product list
router.get('/getAll', (req, res) => {
    let sql = `select id,name,address from tbl_customers where isActive = 1 order by id desc`;
    let query = db.query(sql, (err, result) => {
        if (err) res.json({ status: -1, message: "error occured" });
        else res.json({ status: 1, message: "All customer data fetched successfully", data: result });
    });
});

//get product list
router.get('/get/:id', (req, res) => {
    let sql = `select id,name,address from tbl_customers where isActive = 1 AND id=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) res.json({ status: -1, message: "error occured" });
        else res.json({ status: 1, message: "All customer data fetched successfully", data: result });
    });
});


//add product
router.post('/addNew', (req, res) => {
    let user = {
        name: req.body.cust_name,
        address: req.body.cust_address
    };
    // console.log(user)
    let sql = 'INSERT INTO tbl_customers SET ?';
    let query = db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.json({ status: 1, message: 'Customer Added' });
    });
});


//Update product
router.put('/update/:id', (req, res) => {
    let customer = {
        name: req.body.cust_name,
        address: req.body.cust_address
    };
    let sql = `UPDATE tbl_customers SET ? where id= ${req.params.id}`;
    let query = db.query(sql, customer, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json({ status: 1, message: 'Customer Data Updated' });
    });
});
//Delete product
router.delete('/delete/:id', (req, res) => {
    let sql = `UPDATE tbl_customers SET isActive=0 where id= ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.json({ status: 1, message: 'Customer deleted' });
    });
});

module.exports = router;


// CREATE TABLE`mydb`.`tbl_product`(
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` VARCHAR(255) NOT NULL,
//     `description` VARCHAR(255) NOT NULL,
//     `price` INT NOT NULL,
//     `isActive` TINYINT(1) NOT NULL DEFAULT 1,
//     `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
//     PRIMARY KEY(`id`));
