# Libsql: boolean columns stay ints on the client

### Reproduction
To reproduce this issue do the following:
1. Install the deps (`pnpm i` / `bun i`)
1. Make sure you have a Turso db with a table called "baseProduct" (singular!)
2. Make sure it has an `id` column and an `isActive` column (boolean)
3. Create a record in the table
4. Fill in your DB_URL and DB_TOKEN secrets in the .env file (see .env.example)
5. Run the server (`pnpm dev` / `bun dev`)and notice the output on the screen for the `isActive` value. It'll be 1 or 0 depending what you put in the db

I've added examples for the Kysely client (`@libsql/kysely-libsql`), the regular client (`@libsql/client`) and the edge client (`@libsql/client/web`)

If I run the following query in Turso
```sql
SELECT
  sql
FROM
  sqlite_schema
WHERE
  name = 'baseProduct';
```

Then I get this for the `isActive` column: `isActive boolean not null`, so you can see the column was defined as a boolean.
