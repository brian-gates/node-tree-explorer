"use client";
import { useState } from "react";
import { Node as NodeType } from "~/app/data";

export function Node({ node }: { node: NodeType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children?.length ?? 0 > 0;

  return (
    <div className="flex flex-col gap-2 border p-2 rounded">
      {hasChildren && (
        <div className="flex items-end">
          <button
            onClick={() => {
              console.log("clicked", { isExpanded });
              setIsExpanded((isExpanded) => !isExpanded);
            }}
          >
            {isExpanded ? "▼" : "▶"}
          </button>
        </div>
      )}
      <div>{node.id}</div>
      <div>{node.name}</div>
      {node.children && isExpanded && (
        <div className="p-2 border rounded flex flex-col gap-2">
          {node.children.map((node) => (
            <Node key={node.id} node={node} />
          ))}
        </div>
      )}
    </div>
  );
}
