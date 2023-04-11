import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./users.db');
import { open } from 'sqlite';
import { randomUUID } from 'crypto';
// you would have to import / invoke this in another file
async function openDb() {
  return open({
    filename: './users.db',
    driver: sqlite3.Database,
  });
}

export function createTable() {
  db.run(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, token TEXT)'
  );
}

export async function Login(username, password) {
  return openDb().then((db) => {
    return db
      .all(`SELECT * FROM users WHERE username = ? AND password = ?`, [
        username,
        password,
      ])
      .then((res) => res);
  });
}

export async function Register(username, password) {
  db.run(`INSERT INTO users (username, password, token) VALUES (?, ?,?)`, [
    username,
    password,
    randomUUID(),
  ]);
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
        .all(`SELECT * FROM users WHERE token = ?`, [
          token,
        ])
        .then((res) => res);
    });
}