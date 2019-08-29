import fs from 'fs';
import { verbose } from 'sqlite3';

const sqlite3 = verbose();
const db = new sqlite3.Database(':memory:');

export async function init() {
  return readFixture(__dirname + '/data/fixture.sql').then((sql) => exec(sql));
}

function readFixture(file: string): Promise<string> {
  return new Promise(resolve => {
    fs.readFile(file, (e, data: Buffer) => {
      if (e) {
        throw e;
      }
      resolve(data.toString());
    });
  });
}

export async function exec(sql: string): Promise<number> {
  return new Promise(resolve => {
    db.exec(sql, (e) => {
      if (e) {
        throw e;
      }
      resolve();
    });
  });
}

export async function query<T>(sql: string, params?: any[]): Promise<T[]> {
  return new Promise(resolve => {
    db.all(sql, params, (err, rows: T[]) => {
      if (err) {
        throw err;
      }
      resolve(rows);
    });
  });
}

export function close() {
  db.close();
}
