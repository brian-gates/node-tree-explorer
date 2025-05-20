import { fetchData } from "./data";
import { Node } from "./lib/node";

export default async function Home({
  searchParams,
}: {
  searchParams: { id?: string; expanded?: string };
}) {
  const data = await fetchData();
  const selectedId = searchParams.id ?? "";
  const expandedIds = searchParams.expanded?.split(",").filter(Boolean) ?? [];
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {data.map((node) => (
          <Node
            key={node.id}
            node={node}
            selectedId={selectedId}
            expandedIds={expandedIds}
          />
        ))}
      </div>
    </div>
  );
}
