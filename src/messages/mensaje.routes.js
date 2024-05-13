import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import { createMessage } from "./mensaje.controller.js";

const router = Router();

router.post(
  "/",
  [
    check("name", "no tienes un nombre?").not().isEmpty(),
    check("message", "el campo no puede estar vacio").not().isEmpty(),
    validateFields,
  ],
  createMessage
);

export default router;
