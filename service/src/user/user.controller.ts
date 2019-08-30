import { NextFunction, Request, Response } from 'express';
import { User } from './user';
import * as userRepository from './user.repository';
import { UserNotFoundException } from './user.repository';

export async function getPage(req: Request, res: Response) {
  const page = Number(req.query.page) || 0;
  const size = Number(req.query.size) || 20;
  const users = await userRepository.getPage(page, size);
  res.json(users);
}

export async function get(req: Request, res: Response, next: NextFunction) {
  handleErrors(res, next, async () => {
    const userId = Number(req.params.userId);
    const user = await userRepository.getExistingById(userId);
    res.json(user);
  });
}

export async function save(req: Request, res: Response, next: NextFunction) {
  handleErrors(res, next, async () => {
    const user = req.body as User;
    const updated = await userRepository.save(user);
    res.json(updated);
  });
}

export async function deleteOne(userId: number, req: Request, res: Response, next: NextFunction) {
  handleErrors(res, next, async () => {
    const userId = Number(req.params.userId);
    const deleted = await userRepository.deleteById(userId);
    res.json(deleted);
  });
}

function handleErrors(res: Response, next: NextFunction, action: () => void) {
  try {
    action();
  } catch (e) {
    if (e instanceof UserNotFoundException) {
      res.status(404);
      res.json({ error: e.message });
    } else {
      next(e);
    }
  }
}
