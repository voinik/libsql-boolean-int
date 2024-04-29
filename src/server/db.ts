import { createClient } from "@libsql/client";
import { createClient as createEdgeClient } from "@libsql/client/web";

import { LibsqlDialect } from "@libsql/kysely-libsql";
import { Kysely } from "kysely";

type Database = {
  baseProduct: {
    id: string;
    isActive: boolean;
  };
};

export const kyselyDb = new Kysely<Database>({
  dialect: new LibsqlDialect({
    url: process.env.DB_URL,
    authToken: process.env.DB_TOKEN,
  }),
});

export const regularDb = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_TOKEN!,
});

export const edgeDb = createEdgeClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_TOKEN!,
});
