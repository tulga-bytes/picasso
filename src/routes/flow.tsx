import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createFileRoute } from "@tanstack/react-router";
import JsonView from "@uiw/react-json-view";
import {
	Background,
	type Connection,
	Controls,
	type Edge,
	MarkerType,
	type Node,
	type NodeProps,
	ReactFlow,
	addEdge,
	useEdgesState,
	useNodesState,
} from "@xyflow/react";
import { useCallback, useState } from "react";
import { projectEdges, projectNodes } from "../lib/project-structure";
import { routeEdges, routeNodes } from "../lib/route-structure";

export const Route = createFileRoute("/flow")({
	component: RouteComponent,
});

const initialNodes: Node[] = routeNodes;
const initialEdges: Edge[] = routeEdges;

const NewNode = ({ data }: NodeProps) => {
	return (
		<div
			className="px-3 py-2 shadow-md rounded-md bg-white border-2 border-pink-300"
			style={{ width: 200, height: 100 }}
		>
			<Label>{data.label as string}</Label>
		</div>
	);
};

const nodeTypes = {
	new: NewNode,
};

function RouteComponent() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [showDebugView, setShowDebugView] = useState(false);
	const onConnect = useCallback(
		(params: Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	const edgesCustomized = edges.map((edge) => ({
		...edge,
		markerEnd: {
			type: MarkerType.Arrow,
			width: 10,
			height: 10,
			color: "#FF0072",
			strokeWidth: 2,
		},
		style: {
			strokeWidth: 2,
			stroke: "#FF0072",
		},
	}));
	return (
		<div className="p-1 flex flex-col" style={{ height: "calc(100vh - 50px)" }}>
			<div className="flex gap-2 flex-shrink-0">
				<Button
					variant="outline"
					onClick={() => {
						setNodes(routeNodes);
						setEdges(routeEdges);
					}}
				>
					Route Flow
				</Button>
				<Button
					variant="outline"
					onClick={() => {
						setNodes(projectNodes);
						setEdges(projectEdges);
					}}
				>
					Project Structure
				</Button>
				<Button
					onClick={() => {
						setNodes([
							...nodes,
							{
								id: "new",
								position: { x: 100, y: 100 },
								type: "new",
								data: {
									label: "New Node",
									borderColor: "border-pink-300",
									textColor: "text-pink-800",
								},
							},
						]);
					}}
				>
					Add Node
				</Button>
				<Button
					variant={showDebugView ? "default" : "outline"}
					onClick={() => setShowDebugView(!showDebugView)}
				>
					{showDebugView ? "Hide Debug" : "Show Debug"}
				</Button>
			</div>
			<div
				className={`${showDebugView ? "grid grid-cols-2" : "grid grid-cols-1"} flex-1 min-h-0`}
			>
				<div className="border-2 m-2 h-full">
					<ReactFlow
						nodes={nodes}
						edges={edgesCustomized}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						style={{ width: "100%", height: "100%" }}
						nodeTypes={nodeTypes}
					>
						<Background />
						<Controls />
					</ReactFlow>
				</div>

				{showDebugView && (
					<div>
						<h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
							Current State
						</h2>
						<div className="grid grid-cols-2">
							<div>
								<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
									Nodes
								</h4>
								<JsonView value={nodes} />
							</div>
							<div>
								<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
									Edges
								</h4>
								<JsonView value={edges} />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
