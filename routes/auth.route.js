import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import {validationResultExpress} from "../middlewares/validationResultExpress.js"

const router = express.Router()

router.post(
    '/register', 
    [
        body('email', "formatio incorrecto de email")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "formato incorrecto de password")
            .isLength({min: 6})
            .custom((value, {req}) => {
                if(value !== req.body.repassword){
                    throw new Error("no coinciden las contrasenas")
                }
                return value
            })
    ], 
    validationResultExpress,
     register)

router.post(
    '/login',
    [
        body('email', "formatio incorrecto de email")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "formato incorrecto de password")
            .isLength({min: 6})
    ],
    validationResultExpress,
     login)

export default router;