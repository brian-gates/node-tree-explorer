"use client";
import Link from "next/link";
import { Node as NodeType } from "~/app/data";

export function Node({
  node,
  selectedId,
  expandedIds,
}: {
  node: NodeType;
  selectedId: string;
  expandedIds: string[];
}) {
  const isSelected = selectedId === node.id;
  const isExpanded = expandedIds.includes(node.id);
  const hasChildren = node.children?.length ?? 0 > 0;

  const toggleExpanded = (id: string) => {
    const set = new Set(expandedIds);
    if (set.has(id)) set.delete(id);
    else set.add(id);
    return Array.from(set).join(",");
  };

  return (
    <div
      className={`flex flex-col gap-2 border-2 p-2 rounded bg-blue-950 ${
        isSelected ? "border-blue-600" : "border-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        {hasChildren && (
          <Link
            href={{
              pathname: "/",
              query: {
                id: selectedId,
                expanded: toggleExpanded(node.id),
              },
            }}
            className="px-2 py-1 bg-gray-300 rounded"
          >
            {isExpanded ? "▼" : "▶"}
          </Link>
        )}
        <span>{node.id}</span>
        <span>{node.name}</span>
        <Link
          href={{
            pathname: "/",
            query: {
              id: node.id,
              expanded: expandedIds.join(","),
            },
          }}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Select
        </Link>
      </div>
      {hasChildren && isExpanded && (
        <div className="pl-4">
          {node.children!.map((child) => (
            <Node
              key={child.id}
              node={child}
              selectedId={selectedId}
              expandedIds={expandedIds}
            />
          ))}
        </div>
      )}
    </div>
  );
}
