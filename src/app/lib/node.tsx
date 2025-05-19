import { Node as NodeType } from "~/app/data";

export function Node({ node }: { node: NodeType }) {
  return (
    <div className="flex flex-col gap-2 border p-2 rounded">
      <div>{node.id}</div>
      <div>{node.name}</div>
      {node.children && (
        <div className="p-2 border rounded flex flex-col gap-2">
          {node.children.map((node) => (
            <Node key={node.id} node={node} />
          ))}
        </div>
      )}
    </div>
  );
}
