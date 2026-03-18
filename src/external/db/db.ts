import pgPromise from "pg-promise";

const pgp = pgPromise()
const db = pgp({
   host: process.env.DB_HOST,
   port: Number(process.env.POSTGRES_PORT),
   database: process.env.POSTGRES_DB,
   user: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
})

export default db