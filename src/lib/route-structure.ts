import type { Edge, Node } from "@xyflow/react";

const routeNodes: Node[] = [
	// Root Route
	{
		id: "root",
		type: "route",
		position: { x: 500, y: 50 },
		data: {
			label: "__root.tsx",
			description: "Root layout component that wraps all routes. Contains the header navigation and outlet for child routes.",
		},
	},

	// Main Routes
	{
		id: "index",
		type: "route",
		position: { x: 50, y: 250 },
		data: {
			label: "index.tsx - Home (/)",
			description: "Landing page with React logo animation and links to learn React and TanStack. Entry point for users.",
		},
	},
	{
		id: "flow",
		type: "route",
		position: { x: 150, y: 550 },
		data: {
			label: "flow.tsx - ReactFlow (/flow)",
			description: "Interactive flow diagram showing project structure and routes. Features node creation, editing, and export functionality.",
		},
	},
	{
		id: "fifth",
		type: "route",
		position: { x: 550, y: 400 },
		data: {
			label: "fifth.tsx - Fifth Page (/fifth)",
			description: "Scrolling test page with sticky header. Demonstrates vertical scrolling behavior with 50 content sections.",
		},
	},
	{
		id: "demo-store",
		type: "route",
		position: { x: 800, y: 250 },
		data: {
			label: "demo.store.tsx (/demo/store)",
			description: "TanStack Store demonstration with reactive state management. Shows first name, last name, and computed full name.",
		},
	},
	{
		id: "demo-query",
		type: "route",
		position: { x: 1050, y: 550 },
		data: {
			label: "demo.tanstack-query.tsx (/demo/tanstack-query)",
			description: "TanStack Query example showing data fetching and caching. Displays a list of people with query state management.",
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
