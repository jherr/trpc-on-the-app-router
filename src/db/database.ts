import { Database } from "./schema"; // this is the Database interface we defined earlier
import { Pool } from "pg"; // this is the Pool interface we defined earlier
import {
  Kysely,
  PostgresDialect,
  Migrator,
  MigrationProvider,
  FileMigrationProvider,
} from "kysely";
import * as path from "path";
import { promises as fs } from "fs";
import {up} from "../db/migrations/migrations"

const dialect = new PostgresDialect({
  pool: new Pool({
    database: "test",
    host: "localhost",
    user: "postgres",
    password: "Aa123456",
    port: 5432,
    max: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
});
// up(db)
// async function migrateToLatest() {


//   const migrator = new Migrator({
//     db,
//     provider: new FileMigrationProvider({
//       fs,
//       path,
//       // This needs to be an absolute path.
//       migrationFolder: path.join(__dirname, '../db/migrations'),
//     }),
//   })

//   const { error, results } = await migrator.migrateToLatest()

//   results?.forEach((it) => {
//     if (it.status === 'Success') {
//       console.log(`migration "${it.migrationName}" was executed successfully`)
//     } else if (it.status === 'Error') {
//       console.error(`failed to execute migration "${it.migrationName}"`)
//     }
//   })

//   if (error) {
//     console.error('failed to migrate')
//     console.error(error)
//     process.exit(1)
//   }

//   await db.destroy()
// }

// migrateToLatest()

