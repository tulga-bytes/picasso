import type { Edge, Node } from "@xyflow/react";

const routeNodes: Node[] = [
	// Root Route
	{
		id: "root",
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
		position: { x: 200, y: 150 },
		data: {
			label: "index.tsx - Home",
			borderColor: "border-blue-400",
			textColor: "text-blue-800",
		},
	},
	{
		id: "flow",
		position: { x: 400, y: 150 },
		data: {
			label: "flow.tsx - ReactFlow",
			borderColor: "border-blue-400",
			textColor: "text-blue-800",
		},
	},
	{
		id: "demo-store",
		position: { x: 600, y: 150 },
		data: {
			label: "demo.store.tsx",
			borderColor: "border-blue-400",
			textColor: "text-blue-800",
		},
	},
	{
		id: "demo-query",
		position: { x: 800, y: 150 },
		data: {
			label: "demo.tanstack-query.tsx",
			borderColor: "border-blue-400",
			textColor: "text-blue-800",
		},
	},

	// Route Details
	{
		id: "root-components",
		position: { x: 400, y: 250 },
		data: {
			label: "Root Components",
			borderColor: "border-green-400",
			textColor: "text-green-800",
		},
	},
	{
		id: "header",
		position: { x: 250, y: 350 },
		data: {
			label: "Header",
			borderColor: "border-green-300",
			textColor: "text-green-800",
		},
	},
	{
		id: "outlet",
		position: { x: 400, y: 350 },
		data: {
			label: "Outlet",
			borderColor: "border-green-300",
			textColor: "text-green-800",
		},
	},
	{
		id: "router-devtools",
		position: { x: 550, y: 350 },
		data: {
			label: "Router Devtools",
			borderColor: "border-green-300",
			textColor: "text-green-800",
		},
	},
	{
		id: "query-layout",
		position: { x: 700, y: 350 },
		data: {
			label: "Query Devtools",
			borderColor: "border-green-300",
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

	// Root to components
	{
		id: "e-root-components",
		source: "root",
		target: "root-components",
		// type: "bezier",
	},

	// Components breakdown
	{
		id: "e-components-header",
		source: "root-components",
		target: "header",
		// type: "bezier",
	},
	{
		id: "e-components-outlet",
		source: "root-components",
		target: "outlet",
		// type: "bezier",
	},
	{
		id: "e-components-router-devtools",
		source: "root-components",
		target: "router-devtools",
		// type: "bezier",
	},
	{
		id: "e-components-query-layout",
		source: "root-components",
		target: "query-layout",
		// type: "bezier",
	},
];

export { routeNodes, routeEdges };
