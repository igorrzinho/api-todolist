import { openDb } from '../configDB.js';

export async function createTableUsuarios() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS usuarios( id integer PRIMARY KEY, email varchar(90), senha varchar(90),nomeUsuario varchar(90), token varchar(50));'
    );
  });
}

// essa função recebe o objeto usuario e vai criar um novo usuario no sql
export async function insertUser(email, senha, nomeUsuario, token) {
  openDb().then((db) => {
    db.run('INSERT INTO usuarios (email, senha, nomeUsuario) VALUES (?,?,?)', [
      email,
      senha,
      nomeUsuario,
      token,
    ]);
  });
}

//essa recebe o id e vai alterar a pessoa na base de dados
export async function updatePessoa(nomeUsuario, senha, id) {
  openDb().then((db) => {
    db.run('UPDATE usuarios SET nomeUsuario=?, senha=? WHERE id=?', [
      nomeUsuario,
      senha,
      id,
    ]);
  });
}

export async function deleteUser(id) {
  return openDb().then((db) => {
    return db.get('DELETE FROM usuarios WHERE id=?', [id]).then((res) => res);
  });
}

export async function allUsers() {
  return openDb().then((db) => {
    return db.all('SELECT * FROM usuarios');
  });
}

export async function Token(username, password) {
  return openDb().then((db) => {
    return db
      .all(`SELECT token FROM users WHERE username = ? AND password = ?`, [
        username,
        password,
      ])
      .then((res) => res);
  });
}

export async function tokenValid(token) {
  return openDb().then((db) => {
    return db
      .all(`SELECT * FROM users WHERE token = ?`, [token])
      .then((res) => res);
  });
}
