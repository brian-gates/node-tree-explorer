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
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold">
          Recursive Tree Navigation Exercise
        </h1>
        <p>
          This exercise demonstrates a stateless, server-driven recursive tree
          UI. You can select any node or expand/collapse branches using the
          controls. The current selection and expanded state are encoded in the
          URL query parameters, so the UI is always in sync with the server and
          can be easily shared or bookmarked.
        </p>
        <ul className="list-disc list-inside text-sm text-blue-200">
          <li>
            Fully server-rendered: no client state, all navigation is via URL.
          </li>
          <li>Recursive tree structure with arbitrary depth.</li>
          <li>
            Selection and expand/collapse state are stateless and encoded in the
            URL.
          </li>
          <li>Accessible, keyboard-navigable links for all actions.</li>
          <li>Visual selection indicated by a blue border.</li>
        </ul>
      </div>
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
