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
    userName: joi.string().required().min(2).messages({
      'userName.base': 'O nome de usuário precisa ser uma string',
      'userName.required': 'O nome de usuário é obrigatório',
      'userName.min': 'O nome de usuário precisa ter pelo menos 2 caracteres'
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
