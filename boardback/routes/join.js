const express = require("express");
const router = express.Router();
const mysql = require('mysql2'); 
const db = require('.././models/join.js');
    router.post('/joinform', function(req, res){    
        db.content.create({                       
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }).then(function(){
        return res.status(200).json({
            message: '회원가입 완료!',
        })
        }).catch(function(err){
            console.log(err);
            return res.status(404).json({message: '이미 가입 완료된 계정입니다.!'});
        })
    });

module.exports = Router