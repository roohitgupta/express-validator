const express = require("express");
const {body, validationResult} = require("express-validator");

const User = require("../module/user.model");

const router = express.Router();

router.post("/",

body("first_name").trim().not().isEmpty().isLength({min:3}).withMessage("first name is required"),
body("last_name").trim().not().isEmpty().isLength({min:3}).withMessage("last name is required"),
body("email").isEmail().withMessage("Email is required"),
body("pincode").isLength({min:6, max:6}).withMessage("pincode is required"),
body("gender").isLength.withMessage("gender is required"),
body("age").custom((val)=>{
    if(val < 1 || val > 100){
        throw new Error("Incorrect age provided");
    }
    return true;
}).withMessage("age is required"),

async(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({data: errors.array()});
    }
    const user = await User.creat(req.body);
    res.status(201).json({data: user});
});

module.exports = router;