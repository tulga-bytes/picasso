import type { Edge, Node } from "@xyflow/react";

const projectNodes: Node[] = [
	// Main Application Structure
	{
		id: "A",
		position: { x: 500, y: 50 },
		data: {
			label: "picasso - React App",
			description: "Main React application built with Vite, TypeScript, and modern tooling for interactive flow diagrams.",
		},
	},
	{
		id: "B",
		position: { x: 500, y: 200 },
		data: {
			label: "src/main.tsx",
			description: "Application entry point that sets up React DOM, router, and query providers with strict mode.",
		},
	},
	{
		id: "C",
		position: { x: 300, y: 350 },
		data: {
			label: "Router Provider",
			description: "TanStack Router provider managing client-side routing with type-safe navigation and code splitting.",
		},
	},
	{
		id: "D",
		position: { x: 700, y: 350 },
		data: {
			label: "TanStack Query Provider",
			description: "Data fetching and caching layer providing server state management with background updates.",
		},
	},

	// Routes Structure
	{
		id: "E",
		position: { x: 300, y: 500 },
		data: {
			label: "Route Tree",
			description: "Auto-generated route tree from file-based routing structure with type safety and lazy loading.",
		},
	},
	{
		id: "F",
		position: { x: 50, y: 650 },
		data: {
			label: "__root.tsx",
			description: "Root layout component with header navigation, outlet for child routes, and developer tools.",
		},
	},
	{
		id: "G",
		position: { x: 300, y: 650 },
		data: {
			label: "index.tsx - Home",
			description: "Landing page with animated React logo and educational links to React and TanStack documentation.",
		},
	},
	{
		id: "H",
		position: { x: 550, y: 650 },
		data: {
			label: "flow.tsx - ReactFlow",
			description: "Interactive flow diagram editor with node creation, editing, and project structure visualization.",
		},
	},
	{
		id: "I",
		position: { x: 800, y: 650 },
		data: {
			label: "demo.store.tsx",
			description: "TanStack Store demonstration with reactive state management for form inputs and computed values.",
		},
	},
	{
		id: "J",
		position: { x: 1050, y: 650 },
		data: {
			label: "demo.tanstack-query.tsx",
			description: "TanStack Query example showing data fetching patterns with loading states and error handling.",
		},
	},

	// Components
	{
		id: "K",
		position: { x: 50, y: 800 },
		data: {
			label: "Header Component",
			description: "Navigation header with sticky positioning and links to all application routes.",
		},
	},
	{
		id: "L",
		position: { x: 300, y: 800 },
		data: {
			label: "Outlet",
			description: "Router outlet where child route components are rendered based on current navigation.",
		},
	},
	{
		id: "M",
		position: { x: 550, y: 800 },
		data: {
			label: "TanStack Router Devtools",
			description: "Development tools for debugging router state, navigation history, and route matching.",
		},
	},
	{
		id: "N",
		position: { x: 800, y: 800 },
		data: {
			label: "TanStack Query Layout",
			description: "Layout component providing query client context and development tools for data fetching.",
		},
	},

	// Dependencies
	{
		id: "O",
		position: { x: 1400, y: 50 },
		data: {
			label: "Dependencies",
			description: "Core libraries and frameworks powering the application's functionality and user interface.",
		},
	},
	{
		id: "P",
		position: { x: 1200, y: 200 },
		data: {
			label: "@xyflow/react",
			description: "React Flow library for building interactive node-based diagrams and flowcharts.",
		},
	},
	{
		id: "Q",
		position: { x: 1450, y: 200 },
		data: {
			label: "@tanstack/react-router",
			description: "Type-safe router with file-based routing, code splitting, and search params.",
		},
	},
	{
		id: "R",
		position: { x: 1700, y: 200 },
		data: {
			label: "@tanstack/react-query",
			description: "Data fetching library with caching, background updates, and optimistic updates.",
		},
	},
	{
		id: "S",
		position: { x: 1200, y: 350 },
		data: {
			label: "@tanstack/react-store",
			description: "Lightweight state management with reactive updates and computed values.",
		},
	},
	{
		id: "T",
		position: { x: 1450, y: 350 },
		data: {
			label: "tailwindcss",
			description: "Utility-first CSS framework for rapid UI development with consistent design system.",
		},
	},
	{
		id: "U",
		position: { x: 1700, y: 350 },
		data: {
			label: "lucide-react",
			description: "Beautiful and consistent icon library with React components for modern interfaces.",
		},
	},
	{
		id: "V",
		position: { x: 1450, y: 500 },
		data: {
			label: "class-variance-authority",
			description: "Utility for creating type-safe component variants with conditional class names.",
		},
	},

	// Flow Component Details
	{
		id: "W",
		position: { x: 550, y: 950 },
		data: {
			label: "ReactFlow Canvas",
			description: "Interactive canvas for rendering nodes and edges with pan, zoom, and selection capabilities.",
		},
	},
	{
		id: "X",
		position: { x: 300, y: 1100 },
		data: {
			label: "Initial Nodes",
			description: "Predefined nodes representing routes and project structure loaded on canvas initialization.",
		},
	},
	{
		id: "Y",
		position: { x: 550, y: 1100 },
		data: {
			label: "Initial Edges",
			description: "Connections between nodes showing relationships and data flow in the application.",
		},
	},
	{
		id: "Z",
		position: { x: 800, y: 1100 },
		data: {
			label: "Background",
			description: "Canvas background with optional grid or dot pattern for visual reference and alignment.",
		},
	},
	{
		id: "AA",
		position: { x: 1050, y: 1100 },
		data: {
			label: "Controls",
			description: "UI controls for zooming, panning, fitting view, and toggling fullscreen mode.",
		},
	},

	// Node Details
	{
		id: "BB",
		position: { x: 200, y: 1250 },
		data: {
			label: "Route Nodes",
			description: "Interactive nodes representing application routes with handles for creating connections.",
		},
	},
	{
		id: "CC",
		position: { x: 450, y: 1250 },
		data: {
			label: "Editable Nodes",
			description: "User-created nodes with inline editing capabilities for title and description.",
		},
	},
	{
		id: "DD",
		position: { x: 700, y: 1250 },
		data: {
			label: "Placeholder Nodes",
			description: "Factory nodes for creating new editable nodes with click-to-create functionality.",
		},
	},

	// Edge Details
	{
		id: "EE",
		position: { x: 950, y: 1250 },
		data: {
			label: "Edge Connections",
			description: "Visual connections between nodes with customizable styling and arrow markers.",
		},
	},

	// Utilities and Lib
	{
		id: "FF",
		position: { x: 1300, y: 650 },
		data: {
			label: "src/lib",
			description: "Utility functions and shared logic including stores, project structure, and helper functions.",
		},
	},
	{
		id: "GG",
		position: { x: 1200, y: 800 },
		data: {
			label: "demo-store.ts",
			description: "TanStack Store configuration with reactive state for first name, last name, and computed full name.",
		},
	},
	{
		id: "HH",
		position: { x: 1400, y: 800 },
		data: {
			label: "utils.ts",
			description: "Common utility functions for class name merging, formatting, and shared application logic.",
		},
	},

	// Integrations
	{
		id: "II",
		position: { x: 1600, y: 650 },
		data: {
			label: "src/integrations",
			description: "Third-party library integrations and configuration for external services and tools.",
		},
	},
	{
		id: "JJ",
		position: { x: 1600, y: 800 },
		data: {
			label: "tanstack-query",
			description: "TanStack Query integration with providers, layouts, and configuration for data fetching.",
		},
	},
	{
		id: "KK",
		position: { x: 1500, y: 950 },
		data: {
			label: "layout.tsx",
			description: "Query layout component providing development tools and query client context.",
		},
	},
	{
		id: "LL",
		position: { x: 1700, y: 950 },
		data: {
			label: "root-provider.tsx",
			description: "Root query provider setup with client configuration and context initialization.",
		},
	},

	// Styling
	{
		id: "MM",
		position: { x: 2000, y: 50 },
		data: {
			label: "Styling",
			description: "CSS and styling configuration including Tailwind CSS and component styles.",
		},
	},
	{
		id: "NN",
		position: { x: 1850, y: 200 },
		data: {
			label: "styles.css",
			description: "Global CSS styles with Tailwind directives and custom component styling.",
		},
	},
	{
		id: "OO",
		position: { x: 2000, y: 200 },
		data: {
			label: "tailwindcss",
			description: "Utility-first CSS framework configuration with custom theme and plugins.",
		},
	},
	{
		id: "PP",
		position: { x: 2150, y: 200 },
		data: {
			label: "@xyflow/react/dist/style.css",
			description: "React Flow default styles for nodes, edges, controls, and canvas components.",
		},
	},

	// Build Tools
	{
		id: "QQ",
		position: { x: 2000, y: 350 },
		data: {
			label: "Build Tools",
			description: "Development and build toolchain for compilation, testing, and code quality.",
		},
	},
	{
		id: "RR",
		position: { x: 1800, y: 500 },
		data: {
			label: "Vite",
			description: "Fast build tool with hot module replacement and optimized production builds.",
		},
	},
	{
		id: "SS",
		position: { x: 1950, y: 500 },
		data: {
			label: "TypeScript",
			description: "Type-safe JavaScript with compile-time error checking and enhanced IDE support.",
		},
	},
	{
		id: "TT",
		position: { x: 2100, y: 500 },
		data: {
			label: "Biome - Linting/Formatting",
			description: "Fast linter and formatter for consistent code style and quality enforcement.",
		},
	},
	{
		id: "UU",
		position: { x: 2250, y: 500 },
		data: {
			label: "Vitest - Testing",
			description: "Fast unit testing framework with TypeScript support and modern testing features.",
		},
	},

	// Configuration Files
	{
		id: "VV",
		position: { x: 2000, y: 650 },
		data: {
			label: "Config Files",
			description: "Project configuration files for dependencies, TypeScript, build tools, and code quality.",
		},
	},
	{
		id: "WW",
		position: { x: 1800, y: 800 },
		data: {
			label: "package.json",
			description: "Project dependencies, scripts, and metadata for npm package management.",
		},
	},
	{
		id: "XX",
		position: { x: 1950, y: 800 },
		data: {
			label: "tsconfig.json",
			description: "TypeScript compiler configuration with strict type checking and module resolution.",
		},
	},
	{
		id: "YY",
		position: { x: 2100, y: 800 },
		data: {
			label: "vite.config.js",
			description: "Vite build configuration with plugins for React, TypeScript, and Tailwind CSS.",
		},
	},
	{
		id: "ZZ",
		position: { x: 2250, y: 800 },
		data: {
			label: "biome.json",
			description: "Biome configuration for code formatting, linting rules, and import organization.",
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
