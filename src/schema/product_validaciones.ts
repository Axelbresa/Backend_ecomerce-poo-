// src/middlewares/validations.js
import { body } from 'express-validator';

export const productCreateValidations = [
  body('name')
    .notEmpty().withMessage('El nombre del producto no puede estar vacío')
    .isLength({ min: 1, max: 255 }).withMessage('El nombre del producto debe tener entre 1 y 255 caracteres'),
  body('description')
    .optional()
    .isLength({ max: 500 }).withMessage('La descripción no puede exceder los 500 caracteres'),
  body('price')
    .isDecimal({ decimal_digits: '2' }).withMessage('El precio debe ser un número decimal válido')
    .custom(value => value > 0).withMessage('El precio debe ser mayor que 0'),
  body('stock')
    .isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
  body('userId')
    .isInt().withMessage('El ID del usuario debe ser un número entero'),
];

export const productUpdateValidations = [
    body('name')
      .notEmpty().withMessage('El nombre del producto no puede estar vacío')
      .isLength({ min: 1, max: 255 }).withMessage('El nombre del producto debe tener entre 1 y 255 caracteres'),
    body('description')
      .optional()
      .isLength({ max: 500 }).withMessage('La descripción no puede exceder los 500 caracteres'),
    body('price')
      .isDecimal({ decimal_digits: '2' }).withMessage('El precio debe ser un número decimal válido')
      .custom(value => value > 0).withMessage('El precio debe ser mayor que 0'),
    body('stock')
      .isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
    body('userId')
      .isInt().withMessage('El ID del usuario debe ser un número entero'),
  ];

