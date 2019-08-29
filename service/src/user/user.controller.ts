import { Request, Response } from 'express';
import * as userRepository from './user.repository';

export async function getUsers(req: Request, res: Response) {
  const users = await userRepository.getUsers();
  res.json(users);
}
