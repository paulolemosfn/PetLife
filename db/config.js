import sqlite3 from "sqlite3";
import { open } from "sqlite"

export default async function () {
  return open({
    filename: './db/petlife.sqlite',
    driver: sqlite3.Database,
  });
}