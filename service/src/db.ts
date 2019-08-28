import fs from 'fs';
import { verbose } from 'sqlite3';

const sqlite3 = verbose();
const db = new sqlite3.Database(':memory:');

export const init = () => {

  fs.readFile(__dirname + '/data/schema.sql', (err: NodeJS.ErrnoException, data: Buffer) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });

};

db.serialize(() => {
  db.run('CREATE TABLE lorem (info TEXT)');

  const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
  for (let i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i);
  }
  stmt.finalize();

  db.each('SELECT rowid AS id, info FROM lorem', (err: Error, row: any) => {
    console.log(row.id + ': ' + row.info);
  });
});


export const close = () => {
  db.close();
};
