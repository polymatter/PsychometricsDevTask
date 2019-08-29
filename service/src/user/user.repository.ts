import * as db from '../db';
import { User } from './user';

export function getUsers(): Promise<User[]> {
  return db.query<User>(
    'SELECT id, birth_date birthDate, first_name firstName, last_name lastName, gender, created FROM `user`');
}
