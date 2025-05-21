import { fetchData } from "./data";
import { Node } from "./lib/node";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, expanded } = await searchParams;
  const selectedId = id?.toString() ?? "";
  const expandedIds = expanded?.toString().split(",").filter(Boolean) ?? [];
  const data = await fetchData();
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            Recursive Tree Navigation Exercise
          </h1>
          <p>
            This exercise demonstrates a stateless, server-driven recursive tree
            UI. You can select any node or expand/collapse branches using the
            controls. The current selection and expanded state are encoded in
            the URL query parameters, so the UI is always in sync with the
            server and can be easily shared or bookmarked.
          </p>
          <ul className="list-disc list-inside text-sm text-blue-200">
            <li>
              Fully server-rendered: no client state, all navigation is via URL.
            </li>
            <li>Recursive tree structure with arbitrary depth.</li>
            <li>Accessible, keyboard-navigable links for all actions.</li>
            <li>Visual selection indicated by a blue border.</li>
          </ul>
        </div>
        <a
          href="https://github.com/brian-gates/node-tree-explorer"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 hover:border-blue-700 text-blue-700 font-semibold shadow transition-colors"
          aria-label="View on GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
          </svg>
          <span className="hidden sm:inline">GitHub</span>
        </a>
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
