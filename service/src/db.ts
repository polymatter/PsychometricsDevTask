import fs from 'fs';
import { RunResult, verbose } from 'sqlite3';

const sqlite3 = verbose();
const db = new sqlite3.Database(':memory:');

export async function init() {
  return readFixture(__dirname + '/data/fixture.sql').then((sql) => runScript(sql));
}

function readFixture(file: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (e, data: Buffer) => {
      if (e) {
        reject(e);
      }
      resolve(data.toString());
    });
  });
}

async function runScript(sql: string): Promise<number> {
  return new Promise((resolve, reject) => {
    db.exec(sql, (e) => {
      if (e) {
        reject(e);
      }
      resolve();
    });
  });
}

export async function exec(sql: string, params: any): Promise<RunResult> {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (e) {
      if (e) {
        reject(e);
      }
      resolve(this);
    });
  });
}

export async function query<T>(sql: string, params?: any): Promise<T[]> {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (e, rows: T[]) => {
      if (e) {
        reject(e);
      }
      resolve(rows);
    });
  });
}

export function close() {
  db.close();
}
