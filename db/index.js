import Database from './config'
const database = {

  select: async (query, params) => {
    const db = await Database();
    console.log(db);
    const result = await db.all(query, params);
    await db.close();
    return result;
  },

  close: async () => {
    await this.db.close();
  }

}

export default database;