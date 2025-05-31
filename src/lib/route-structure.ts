import type { Edge, Node } from "@xyflow/react";

const routeNodes: Node[] = [
	// Root Route
	{
		id: "root",
		type: "route",
		position: { x: 400, y: 50 },
		data: {
			label: "__root.tsx",
			borderColor: "border-purple-500",
			textColor: "text-purple-800",
		},
	},

	// Main Routes
	{
		id: "index",
		type: "route",
		position: { x: 150, y: 150 },
		data: {
			label: "index.tsx - Home (/)",
			borderColor: "border-blue-400",
			textColor: "text-blue-800",
		},
	},
	{
		id: "flow",
		type: "route",
		position: { x: 350, y: 150 },
		data: {
			label: "flow.tsx - ReactFlow (/flow)",
			borderColor: "border-blue-400",
			textColor: "text-blue-800",
		},
	},
	{
		id: "fifth",
		type: "route",
		position: { x: 550, y: 150 },
		data: {
			label: "fifth.tsx - Fifth Page (/fifth)",
			borderColor: "border-blue-400",
			textColor: "text-blue-800",
		},
	},
	{
		id: "demo-store",
		type: "route",
		position: { x: 750, y: 150 },
		data: {
			label: "demo.store.tsx (/demo/store)",
			borderColor: "border-green-400",
			textColor: "text-green-800",
		},
	},
	{
		id: "demo-query",
		type: "route",
		position: { x: 950, y: 150 },
		data: {
			label: "demo.tanstack-query.tsx (/demo/tanstack-query)",
			borderColor: "border-green-400",
			textColor: "text-green-800",
		},
	},
];

const routeEdges: Edge[] = [
	// Root to routes
	{
		id: "e-root-index",
		source: "root",
		target: "index",
		// type: "bezier",
	},
	{
		id: "e-root-flow",
		source: "root",
		target: "flow",
		// type: "bezier",
	},
	{
		id: "e-root-fifth",
		source: "root",
		target: "fifth",
		// type: "bezier",
	},
	{
		id: "e-root-demo-store",
		source: "root",
		target: "demo-store",
		// type: "bezier",
	},
	{
		id: "e-root-demo-query",
		source: "root",
		target: "demo-query",
		// type: "bezier",
	},
];

export { routeNodes, routeEdges };
