import { NextFunction, Request, Response } from 'express';
import { User } from './user';
import * as userRepository from './user.repository';
import { UserNotFoundException } from './user.repository';

export async function getPage(req: Request, res: Response, next: NextFunction) {
  const page = Number(req.query.page) || 0;
  const size = Number(req.query.size) || 20;
  userRepository.getPage(page, size)
    .then((page) => res.json(page))
    .catch((e) => handleErrors(e, res, next));
}

export async function get(req: Request, res: Response, next: NextFunction) {
  const userId = Number(req.params.userId);
  userRepository.getExistingById(userId)
    .then((user) => res.json(user))
    .catch((e) => handleErrors(e, res, next))
}

export async function save(req: Request, res: Response, next: NextFunction) {
  const user = req.body as User;
  userRepository.save(user)
    .then((updated) => res.json(updated))
    .catch((e) => handleErrors(e, res, next))
}

export async function deleteOne(req: Request, res: Response, next: NextFunction) {
  const userId = Number(req.params.userId);
  userRepository.deleteById(userId)
    .then((deleted) => res.json(deleted))
    .catch((e) => handleErrors(e, res, next))
}

function handleErrors(e: Error, res: Response, next: NextFunction) {
  if (e instanceof UserNotFoundException) {
    res.status(404);
    res.json({ error: e.name, status: 404, cause: e.message });
  } else {
    next(e);
  }
}
