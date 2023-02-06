import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

export async function signupValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const strongPasswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const stringPassswordError = new Error(
    'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length'
  );
  const bodyValidator = joi.object({
    firstName: joi.string().required().min(2).messages({
      'firstName.base': 'O primeiro nome precisa ser uma string',
      'firstName.required': 'O primeiro nome é obrigatório',
      'firstName.min': 'O primeiro nome precisa ter pelo menos 2 caracteres'
    }),
    lastName: joi.string().required().min(2).messages({
      'lastName.base': 'O último nome precisa ser uma string',
      'lastName.required': 'O último nome é obrigatório',
      'lastName.min': 'O último nome precisa ter pelo menos 2 caracteres'
    }),
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] }
    }),
    password: joi
      .string()
      .regex(strongPasswordRegex)
      .error(stringPassswordError)
      .required()
      .messages({
        'password.base.pattern':
          'A senha não contém os parametros necessários (letras maiusculas, simbolos e mínimo de 8 a 16 caracteres',
        'password.required': 'A senha é obrigatória'
      })
  });

  if (!req.body) return res.status(400).json({ message: 'Body necessário' });

  const { error } = bodyValidator.validate(req.body);
  if (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message
    });
  }
  req.body.email = req.body.email.toLowerCase();
  next();
}
