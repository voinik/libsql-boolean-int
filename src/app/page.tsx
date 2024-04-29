import { kyselyDb, edgeDb, regularDb } from "@/server/db";

type Product = {
    id: string;
    isActive: boolean;
};

export default async function Home() {
  const kyselyProducts = await kyselyDb
    .selectFrom("baseProduct")
    .selectAll()
    .execute();
  const edgeProducts = (await regularDb.execute("SELECT * from baseProduct")).rows as unknown as Product[];
  const regularProducts = (await edgeDb.execute("SELECT * from baseProduct")).rows as unknown as Product[];

  return (
    <div className="flex flex-col items-center p-4 gap-12">
      <div>
        <h1>Kysely client products</h1>
        <div className="pt-4">
          {kyselyProducts.map((p) => (
            <div key={p.id} className="flex flex-col gap-2">
              <span>Id: {p.id}</span>
              <span>isActive: {p.isActive}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1>Regular client products</h1>
        <div className="pt-4">
          {regularProducts.map((p) => (
            <div key={p.id} className="flex flex-col gap-2">
              <span>Id: {p.id}</span>
              <span>isActive: {p.isActive}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1>Edge client products</h1>
        <div className="pt-4">
          {edgeProducts.map((p) => (
            <div key={p.id} className="flex flex-col gap-2">
              <span>Id: {p.id}</span>
              <span>isActive: {p.isActive}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
