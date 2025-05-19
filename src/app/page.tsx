import { fetchData } from "./data";
import { Node } from "./lib/node";

export default async function Home() {
  const data = await fetchData();
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {data.map((node) => (
          <Node key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}
