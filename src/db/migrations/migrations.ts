import { Kysely ,sql} from 'kysely'
import {db} from '../database'

export async function up(db: Kysely<any>): Promise<void> {
        await db.schema
        .createTable('todo')
        .addColumn('id','serial',(col)=>col.primaryKey())
        .addColumn('done','boolean',(col)=>col.notNull())
        .addColumn('name','varchar',(col)=>col.notNull())
        .addColumn('created_at','timestamp',(col)=>col.defaultTo(sql`now()`).notNull())
        .execute()
}
export async function down(db: Kysely<any>): Promise<void> {
  // Migration code
}