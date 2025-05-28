import type { Edge, Node } from "@xyflow/react";

const projectNodes: Node[] = [
	// Main Application Structure
	{
		id: "A",
		// type: "custom",
		position: { x: 400, y: 0 },
		data: {
			label: "picasso - React App",
			borderColor: "border-blue-300",
			textColor: "text-blue-800",
		},
	},
	{
		id: "B",
		// type: "custom",
		position: { x: 400, y: 80 },
		data: {
			label: "src/main.tsx",
			borderColor: "border-blue-300",
			textColor: "text-blue-800",
		},
	},
	{
		id: "C",
		// type: "custom",
		position: { x: 300, y: 160 },
		data: {
			label: "Router Provider",
			borderColor: "border-blue-300",
			textColor: "text-blue-800",
		},
	},
	{
		id: "D",
		// type: "custom",
		position: { x: 500, y: 160 },
		data: {
			label: "TanStack Query Provider",
			borderColor: "border-blue-300",
			textColor: "text-blue-800",
		},
	},

	// Routes Structure
	{
		id: "E",
		// type: "custom",
		position: { x: 300, y: 240 },
		data: {
			label: "Route Tree",
			borderColor: "border-purple-300",
			textColor: "text-purple-800",
		},
	},
	{
		id: "F",
		// type: "custom",
		position: { x: 100, y: 320 },
		data: {
			label: "__root.tsx",
			borderColor: "border-purple-300",
			textColor: "text-purple-800",
		},
	},
	{
		id: "G",
		// type: "custom",
		position: { x: 220, y: 320 },
		data: {
			label: "index.tsx - Home",
			borderColor: "border-purple-300",
			textColor: "text-purple-800",
		},
	},
	{
		id: "H",
		// type: "custom",
		position: { x: 340, y: 320 },
		data: {
			label: "flow.tsx - ReactFlow",
			borderColor: "border-purple-300",
			textColor: "text-purple-800",
		},
	},
	{
		id: "I",
		// type: "custom",
		position: { x: 460, y: 320 },
		data: {
			label: "demo.store.tsx",
			borderColor: "border-purple-300",
			textColor: "text-purple-800",
		},
	},
	{
		id: "J",
		// type: "custom",
		position: { x: 580, y: 320 },
		data: {
			label: "demo.tanstack-query.tsx",
			borderColor: "border-purple-300",
			textColor: "text-purple-800",
		},
	},

	// Components
	{
		id: "K",
		// type: "custom",
		position: { x: 20, y: 400 },
		data: {
			label: "Header Component",
			borderColor: "border-green-300",
			textColor: "text-green-800",
		},
	},
	{
		id: "L",
		// type: "custom",
		position: { x: 140, y: 400 },
		data: {
			label: "Outlet",
			borderColor: "border-green-300",
			textColor: "text-green-800",
		},
	},
	{
		id: "M",
		// type: "custom",
		position: { x: 20, y: 480 },
		data: {
			label: "TanStack Router Devtools",
			borderColor: "border-green-300",
			textColor: "text-green-800",
		},
	},
	{
		id: "N",
		// type: "custom",
		position: { x: 140, y: 480 },
		data: {
			label: "TanStack Query Layout",
			borderColor: "border-green-300",
			textColor: "text-green-800",
		},
	},

	// Dependencies
	{
		id: "O",
		// type: "custom",
		position: { x: 800, y: 0 },
		data: {
			label: "Dependencies",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},
	{
		id: "P",
		// type: "custom",
		position: { x: 700, y: 80 },
		data: {
			label: "@xyflow/react",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},
	{
		id: "Q",
		// type: "custom",
		position: { x: 820, y: 80 },
		data: {
			label: "@tanstack/react-router",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},
	{
		id: "R",
		// type: "custom",
		position: { x: 940, y: 80 },
		data: {
			label: "@tanstack/react-query",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},
	{
		id: "S",
		// type: "custom",
		position: { x: 700, y: 160 },
		data: {
			label: "@tanstack/react-store",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},
	{
		id: "T",
		// type: "custom",
		position: { x: 820, y: 160 },
		data: {
			label: "tailwindcss",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},
	{
		id: "U",
		// type: "custom",
		position: { x: 940, y: 160 },
		data: {
			label: "lucide-react",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},
	{
		id: "V",
		// type: "custom",
		position: { x: 820, y: 240 },
		data: {
			label: "class-variance-authority",
			borderColor: "border-orange-300",
			textColor: "text-orange-800",
		},
	},

	// Flow Component Details
	{
		id: "W",
		// type: "custom",
		position: { x: 340, y: 400 },
		data: {
			label: "ReactFlow Canvas",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},
	{
		id: "X",
		// type: "custom",
		position: { x: 260, y: 480 },
		data: {
			label: "Initial Nodes",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},
	{
		id: "Y",
		// type: "custom",
		position: { x: 360, y: 480 },
		data: {
			label: "Initial Edges",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},
	{
		id: "Z",
		// type: "custom",
		position: { x: 460, y: 480 },
		data: {
			label: "Background",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},
	{
		id: "AA",
		// type: "custom",
		position: { x: 560, y: 480 },
		data: {
			label: "Controls",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},

	// Node Details
	{
		id: "BB",
		// type: "custom",
		position: { x: 180, y: 560 },
		data: {
			label: "Node 1: Hello - Input",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},
	{
		id: "CC",
		// type: "custom",
		position: { x: 280, y: 560 },
		data: {
			label: "Node 2: World",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},
	{
		id: "DD",
		// type: "custom",
		position: { x: 380, y: 560 },
		data: {
			label: "Node 3: World",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},

	// Edge Details
	{
		id: "EE",
		// type: "custom",
		position: { x: 480, y: 560 },
		data: {
			label: "Edge 1-2: smoothstep",
			borderColor: "border-pink-300",
			textColor: "text-pink-800",
		},
	},

	// Utilities and Lib
	{
		id: "FF",
		// type: "custom",
		position: { x: 700, y: 320 },
		data: {
			label: "src/lib",
			borderColor: "border-gray-300",
			textColor: "text-gray-800",
		},
	},
	{
		id: "GG",
		// type: "custom",
		position: { x: 640, y: 400 },
		data: {
			label: "demo-store.ts",
			borderColor: "border-gray-300",
			textColor: "text-gray-800",
		},
	},
	{
		id: "HH",
		// type: "custom",
		position: { x: 760, y: 400 },
		data: {
			label: "utils.ts",
			borderColor: "border-gray-300",
			textColor: "text-gray-800",
		},
	},

	// Integrations
	{
		id: "II",
		// type: "custom",
		position: { x: 880, y: 320 },
		data: {
			label: "src/integrations",
			borderColor: "border-gray-300",
			textColor: "text-gray-800",
		},
	},
	{
		id: "JJ",
		// type: "custom",
		position: { x: 880, y: 400 },
		data: {
			label: "tanstack-query",
			borderColor: "border-gray-300",
			textColor: "text-gray-800",
		},
	},
	{
		id: "KK",
		// type: "custom",
		position: { x: 820, y: 480 },
		data: {
			label: "layout.tsx",
			borderColor: "border-gray-300",
			textColor: "text-gray-800",
		},
	},
	{
		id: "LL",
		// type: "custom",
		position: { x: 940, y: 480 },
		data: {
			label: "root-provider.tsx",
			borderColor: "border-gray-300",
			textColor: "text-gray-800",
		},
	},

	// Styling
	{
		id: "MM",
		// type: "custom",
		position: { x: 1100, y: 0 },
		data: {
			label: "Styling",
			borderColor: "border-indigo-300",
			textColor: "text-indigo-800",
		},
	},
	{
		id: "NN",
		// type: "custom",
		position: { x: 1020, y: 80 },
		data: {
			label: "styles.css",
			borderColor: "border-indigo-300",
			textColor: "text-indigo-800",
		},
	},
	{
		id: "OO",
		// type: "custom",
		position: { x: 1120, y: 80 },
		data: {
			label: "tailwindcss",
			borderColor: "border-indigo-300",
			textColor: "text-indigo-800",
		},
	},
	{
		id: "PP",
		// type: "custom",
		position: { x: 1220, y: 80 },
		data: {
			label: "@xyflow/react/dist/style.css",
			borderColor: "border-indigo-300",
			textColor: "text-indigo-800",
		},
	},

	// Build Tools
	{
		id: "QQ",
		// type: "custom",
		position: { x: 1100, y: 160 },
		data: {
			label: "Build Tools",
			borderColor: "border-yellow-300",
			textColor: "text-yellow-800",
		},
	},
	{
		id: "RR",
		// type: "custom",
		position: { x: 1000, y: 240 },
		data: {
			label: "Vite",
			borderColor: "border-yellow-300",
			textColor: "text-yellow-800",
		},
	},
	{
		id: "SS",
		// type: "custom",
		position: { x: 1080, y: 240 },
		data: {
			label: "TypeScript",
			borderColor: "border-yellow-300",
			textColor: "text-yellow-800",
		},
	},
	{
		id: "TT",
		// type: "custom",
		position: { x: 1160, y: 240 },
		data: {
			label: "Biome - Linting/Formatting",
			borderColor: "border-yellow-300",
			textColor: "text-yellow-800",
		},
	},
	{
		id: "UU",
		// type: "custom",
		position: { x: 1280, y: 240 },
		data: {
			label: "Vitest - Testing",
			borderColor: "border-yellow-300",
			textColor: "text-yellow-800",
		},
	},

	// Configuration Files
	{
		id: "VV",
		// type: "custom",
		position: { x: 1100, y: 320 },
		data: {
			label: "Config Files",
			borderColor: "border-lime-300",
			textColor: "text-lime-800",
		},
	},
	{
		id: "WW",
		// type: "custom",
		position: { x: 1000, y: 400 },
		data: {
			label: "package.json",
			borderColor: "border-lime-300",
			textColor: "text-lime-800",
		},
	},
	{
		id: "XX",
		// type: "custom",
		position: { x: 1100, y: 400 },
		data: {
			label: "tsconfig.json",
			borderColor: "border-lime-300",
			textColor: "text-lime-800",
		},
	},
	{
		id: "YY",
		// type: "custom",
		position: { x: 1200, y: 400 },
		data: {
			label: "vite.config.js",
			borderColor: "border-lime-300",
			textColor: "text-lime-800",
		},
	},
	{
		id: "ZZ",
		// type: "custom",
		position: { x: 1300, y: 400 },
		data: {
			label: "biome.json",
			borderColor: "border-lime-300",
			textColor: "text-lime-800",
		},
	},
];

const projectEdges: Edge[] = [
	// Main flow
	{
		id: "e-A-B",
		source: "A",
		target: "B",
		type: "smoothstep",
	},
	{
		id: "e-B-C",
		source: "B",
		target: "C",
		type: "smoothstep",
	},
	{
		id: "e-B-D",
		source: "B",
		target: "D",
		type: "smoothstep",
	},

	// Routes
	{
		id: "e-C-E",
		source: "C",
		target: "E",
		type: "smoothstep",
	},
	{
		id: "e-E-F",
		source: "E",
		target: "F",
		type: "smoothstep",
	},
	{
		id: "e-E-G",
		source: "E",
		target: "G",
		type: "smoothstep",
	},
	{
		id: "e-E-H",
		source: "E",
		target: "H",
		type: "smoothstep",
	},
	{
		id: "e-E-I",
		source: "E",
		target: "I",
		type: "smoothstep",
	},
	{
		id: "e-E-J",
		source: "E",
		target: "J",
		type: "smoothstep",
	},

	// Components
	{
		id: "e-F-K",
		source: "F",
		target: "K",
		type: "smoothstep",
	},
	{
		id: "e-F-L",
		source: "F",
		target: "L",
		type: "smoothstep",
	},
	{
		id: "e-F-M",
		source: "F",
		target: "M",
		type: "smoothstep",
	},
	{
		id: "e-F-N",
		source: "F",
		target: "N",
		type: "smoothstep",
	},

	// Navigation Links
	{
		id: "e-K-G",
		source: "K",
		target: "G",
		type: "smoothstep",
	},
	{
		id: "e-K-H",
		source: "K",
		target: "H",
		type: "smoothstep",
	},
	{
		id: "e-K-I",
		source: "K",
		target: "I",
		type: "smoothstep",
	},
	{
		id: "e-K-J",
		source: "K",
		target: "J",
		type: "smoothstep",
	},

	// Dependencies
	{
		id: "e-O-P",
		source: "O",
		target: "P",
		type: "smoothstep",
	},
	{
		id: "e-O-Q",
		source: "O",
		target: "Q",
		type: "smoothstep",
	},
	{
		id: "e-O-R",
		source: "O",
		target: "R",
		type: "smoothstep",
	},
	{
		id: "e-O-S",
		source: "O",
		target: "S",
		type: "smoothstep",
	},
	{
		id: "e-O-T",
		source: "O",
		target: "T",
		type: "smoothstep",
	},
	{
		id: "e-O-U",
		source: "O",
		target: "U",
		type: "smoothstep",
	},
	{
		id: "e-O-V",
		source: "O",
		target: "V",
		type: "smoothstep",
	},

	// Flow Details
	{
		id: "e-H-W",
		source: "H",
		target: "W",
		type: "smoothstep",
	},
	{
		id: "e-W-X",
		source: "W",
		target: "X",
		type: "smoothstep",
	},
	{
		id: "e-W-Y",
		source: "W",
		target: "Y",
		type: "smoothstep",
	},
	{
		id: "e-W-Z",
		source: "W",
		target: "Z",
		type: "smoothstep",
	},
	{
		id: "e-W-AA",
		source: "W",
		target: "AA",
		type: "smoothstep",
	},

	// Node Details
	{
		id: "e-X-BB",
		source: "X",
		target: "BB",
		type: "smoothstep",
	},
	{
		id: "e-X-CC",
		source: "X",
		target: "CC",
		type: "smoothstep",
	},
	{
		id: "e-X-DD",
		source: "X",
		target: "DD",
		type: "smoothstep",
	},

	// Edge Details
	{
		id: "e-Y-EE",
		source: "Y",
		target: "EE",
		type: "smoothstep",
	},

	// Utilities
	{
		id: "e-FF-GG",
		source: "FF",
		target: "GG",
		type: "smoothstep",
	},
	{
		id: "e-FF-HH",
		source: "FF",
		target: "HH",
		type: "smoothstep",
	},

	// Integrations
	{
		id: "e-II-JJ",
		source: "II",
		target: "JJ",
		type: "smoothstep",
	},
	{
		id: "e-JJ-KK",
		source: "JJ",
		target: "KK",
		type: "smoothstep",
	},
	{
		id: "e-JJ-LL",
		source: "JJ",
		target: "LL",
		type: "smoothstep",
	},

	// Styling
	{
		id: "e-MM-NN",
		source: "MM",
		target: "NN",
		type: "smoothstep",
	},
	{
		id: "e-MM-OO",
		source: "MM",
		target: "OO",
		type: "smoothstep",
	},
	{
		id: "e-MM-PP",
		source: "MM",
		target: "PP",
		type: "smoothstep",
	},

	// Build Tools
	{
		id: "e-QQ-RR",
		source: "QQ",
		target: "RR",
		type: "smoothstep",
	},
	{
		id: "e-QQ-SS",
		source: "QQ",
		target: "SS",
		type: "smoothstep",
	},
	{
		id: "e-QQ-TT",
		source: "QQ",
		target: "TT",
		type: "smoothstep",
	},
	{
		id: "e-QQ-UU",
		source: "QQ",
		target: "UU",
		type: "smoothstep",
	},

	// Config Files
	{
		id: "e-VV-WW",
		source: "VV",
		target: "WW",
		type: "smoothstep",
	},
	{
		id: "e-VV-XX",
		source: "VV",
		target: "XX",
		type: "smoothstep",
	},
	{
		id: "e-VV-YY",
		source: "VV",
		target: "YY",
		type: "smoothstep",
	},
	{
		id: "e-VV-ZZ",
		source: "VV",
		target: "ZZ",
		type: "smoothstep",
	},
];

export { projectNodes, projectEdges };
