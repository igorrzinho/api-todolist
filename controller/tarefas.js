import { openDb } from '../configDB.js';

export async function createTableTodo() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS todo (id integer PRIMARY KEY, task varchar(255) DEFAULT NULL,complete INTEGER CHECK (complete IN (0,1)) id_usuarioFK INT NOT NULL, FOREIGN KEY (id_usuarioFK) REFERENCES usuarios (id));'
    );
  });
}

export async function dropTable() {
  openDb().then((db) => {
    db.exec('DROP TABLE todo');
  });
}

// essa função recebe o objeto usuario e vai criar um novo usuario no sql
export async function insertTask(task, id) {
  openDb().then((db) => {
    db.run('INSERT INTO todo (task, id_usuarioFK) VALUES (?,?)', [task, id]);
  });
}

export async function deleteTask(id) {
  return openDb().then((db) => {
    return db.get('DELETE FROM todo WHERE id=?', [id]).then((res) => res);
  });
}

export async function selectTask(id) {
  return openDb().then((db) => {
    return db
      .all('SELECT * FROM todo WHERE id_usuarioFK=?', [id])
      .then((res) => res);
  });
}

export async function deleteAllTask(id) {
  return openDb().then((db) => {
    return db
      .all('DELETE FROM todo WHERE id_usuarioFK=?', [id])
      .then((res) => res);
  });
}

export async function allTasks() {
  return openDb().then((db) => {
    return db.all('SELECT * FROM todo');
  });
}
