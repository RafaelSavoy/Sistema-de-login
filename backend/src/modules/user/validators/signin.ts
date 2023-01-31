import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

export async function signinValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bodyValidator = joi.object({
    email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required()
      .messages({ 'email.required': 'O email precisa ser preenchido' }),
    password: joi
      .string()
      .required()
      .messages({
        'password.required': 'A senha precisa ser preenchida',
      }),
  });

  if (!req.body) return res.status(400).json({ message: 'Body necessário' });

  const { error } = bodyValidator.validate(req.body);

  if (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
  req.body.email = req.body.email.toLowerCase();
  next();
}
