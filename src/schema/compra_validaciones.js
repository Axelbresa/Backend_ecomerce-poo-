// src/middlewares/compraValidations.js
import { check } from 'express-validator';

export const createCompraValidation = [
  check('quantity')
    .isInt({ min: 1 })
    .withMessage('La cantidad debe ser un número entero positivo'),
  check('totalAmount')
    .isDecimal()
    .withMessage('El monto total debe ser un número decimal válido'),
];

export const updateCompraValidation = [
  check('quantity')
    .optional()
    .isInt({ min: 1 })
    .withMessage('La cantidad debe ser un número entero positivo'),
  check('totalAmount')
    .optional()
    .isDecimal()
    .withMessage('El monto total debe ser un número decimal válido'),
];
