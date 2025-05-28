import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useCallback, useEffect, useState } from "react";
import { projectEdges, projectNodes } from "../lib/project-structure";
import { routeEdges, routeNodes } from "../lib/route-structure";

export const Route = createFileRoute("/flow")({
	component: RouteComponent,
});

const initialNodes: Node[] = routeNodes;
const initialEdges: Edge[] = routeEdges;

const EditableNode = ({ data, id }: NodeProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [label, setLabel] = useState(data.label as string);

	const handleSave = () => {
		// Update the node data through a custom event or callback
		window.dispatchEvent(
			new CustomEvent("updateNodeLabel", {
				detail: { nodeId: id, newLabel: label },
			}),
		);
		setIsEditing(false);
	};

	const handleCancel = () => {
		setLabel(data.label as string);
		setIsEditing(false);
	};

	return (
		<div
			className="px-3 py-2 shadow-md rounded-md bg-white border-2 border-pink-300 cursor-pointer"
			style={{ width: 200, height: 100 }}
			onDoubleClick={() => setIsEditing(true)}
		>
			{isEditing ? (
				<div className="flex flex-col gap-2">
					<Input
						value={label}
						onChange={(e) => setLabel(e.target.value)}
						className="text-sm"
						autoFocus
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSave();
							if (e.key === "Escape") handleCancel();
						}}
					/>
					<div className="flex gap-1">
						<Button size="sm" onClick={handleSave}>
							Save
						</Button>
						<Button size="sm" variant="outline" onClick={handleCancel}>
							Cancel
						</Button>
					</div>
				</div>
			) : (
				<div>
					<Label className="text-sm">{label}</Label>
					<div className="text-xs text-gray-500 mt-1">Double-click to edit</div>
				</div>
			)}
		</div>
	);
};

const nodeTypes = {
	new: EditableNode,
};

function RouteComponent() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [showDebugView, setShowDebugView] = useState(false);
	const [newNodes, setNewNodes] = useState<Node[]>([]);
	const [newEdges, setNewEdges] = useState<Edge[]>([]);
	const [nodeCounter, setNodeCounter] = useState(1);
	const [edgeCounter, setEdgeCounter] = useState(1);
	const [sourceNodeId, setSourceNodeId] = useState("");
	const [targetNodeId, setTargetNodeId] = useState("");

	const onConnect = useCallback(
		(params: Connection) => {
			const newEdge = {
				...params,
				id: `new-edge-${edgeCounter}`,
			};
			setEdges((eds) => addEdge(newEdge, eds));
			setNewEdges((prev) => [...prev, newEdge]);
			setEdgeCounter((prev) => prev + 1);
		},
		[setEdges, edgeCounter],
	);

	// Listen for node label updates
	useEffect(() => {
		const handleUpdateNodeLabel = (event: CustomEvent) => {
			const { nodeId, newLabel } = event.detail;
			setNodes((nds) =>
				nds.map((node) =>
					node.id === nodeId
						? { ...node, data: { ...node.data, label: newLabel } }
						: node,
				),
			);
			// Also update newNodes if it's a new node
			setNewNodes((nds) =>
				nds.map((node) =>
					node.id === nodeId
						? { ...node, data: { ...node.data, label: newLabel } }
						: node,
				),
			);
		};

		window.addEventListener("updateNodeLabel", handleUpdateNodeLabel as EventListener);
		return () => {
			window.removeEventListener("updateNodeLabel", handleUpdateNodeLabel as EventListener);
		};
	}, [setNodes]);

	const addNewNode = () => {
		const newNode: Node = {
			id: `new-node-${nodeCounter}`,
			position: { x: Math.random() * 400 + 100, y: Math.random() * 400 + 100 },
			type: "new",
			data: {
				label: `New Node ${nodeCounter}`,
				borderColor: "border-pink-300",
				textColor: "text-pink-800",
			},
		};
		setNodes((nds) => [...nds, newNode]);
		setNewNodes((prev) => [...prev, newNode]);
		setNodeCounter((prev) => prev + 1);
	};

	const addNewEdge = () => {
		if (sourceNodeId && targetNodeId && sourceNodeId !== targetNodeId) {
			const newEdge: Edge = {
				id: `new-edge-${edgeCounter}`,
				source: sourceNodeId,
				target: targetNodeId,
			};
			setEdges((eds) => [...eds, newEdge]);
			setNewEdges((prev) => [...prev, newEdge]);
			setEdgeCounter((prev) => prev + 1);
			setSourceNodeId("");
			setTargetNodeId("");
		}
	};

	const resetToOriginal = (type: "route" | "project") => {
		if (type === "route") {
			setNodes(routeNodes);
			setEdges(routeEdges);
		} else {
			setNodes(projectNodes);
			setEdges(projectEdges);
		}
		setNewNodes([]);
		setNewEdges([]);
		setNodeCounter(1);
		setEdgeCounter(1);
	};

	// Get all node IDs for the edge creation dropdowns
	const allNodeIds = nodes.map((node) => node.id);

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
			<div className="flex gap-2 flex-shrink-0 flex-wrap">
				<Button variant="outline" onClick={() => resetToOriginal("route")}>
					Route Flow
				</Button>
				<Button variant="outline" onClick={() => resetToOriginal("project")}>
					Project Structure
				</Button>
				<Button onClick={addNewNode}>Add Node</Button>
				<div className="flex gap-1 items-center">
					<select
						value={sourceNodeId}
						onChange={(e) => setSourceNodeId(e.target.value)}
						className="px-2 py-1 border rounded text-sm"
					>
						<option value="">Source Node</option>
						{allNodeIds.map((id) => (
							<option key={id} value={id}>
								{id}
							</option>
						))}
					</select>
					<span>→</span>
					<select
						value={targetNodeId}
						onChange={(e) => setTargetNodeId(e.target.value)}
						className="px-2 py-1 border rounded text-sm"
					>
						<option value="">Target Node</option>
						{allNodeIds.map((id) => (
							<option key={id} value={id}>
								{id}
							</option>
						))}
					</select>
					<Button
						size="sm"
						onClick={addNewEdge}
						disabled={!sourceNodeId || !targetNodeId || sourceNodeId === targetNodeId}
					>
						Add Edge
					</Button>
				</div>
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
					<div className="p-4 overflow-auto">
						<h2 className="mb-4 text-2xl font-semibold">
							Debug View - Flow State
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							<div className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold text-blue-600 mb-2">
										Original Nodes ({nodes.length - newNodes.length})
									</h3>
									<div className="max-h-48 overflow-auto">
										<JsonView
											value={nodes.filter(
												(node) => !newNodes.some((newNode) => newNode.id === node.id),
											)}
										/>
									</div>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-pink-600 mb-2">
										New Nodes ({newNodes.length})
									</h3>
									<div className="max-h-48 overflow-auto">
										<JsonView value={newNodes} />
									</div>
								</div>
							</div>
							<div className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold text-blue-600 mb-2">
										Original Edges ({edges.length - newEdges.length})
									</h3>
									<div className="max-h-48 overflow-auto">
										<JsonView
											value={edges.filter(
												(edge) => !newEdges.some((newEdge) => newEdge.id === edge.id),
											)}
										/>
									</div>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-pink-600 mb-2">
										New Edges ({newEdges.length})
									</h3>
									<div className="max-h-48 overflow-auto">
										<JsonView value={newEdges} />
									</div>
								</div>
							</div>
						</div>
						<div className="mt-4 p-3 bg-gray-100 rounded">
							<h4 className="font-semibold mb-2">Statistics:</h4>
							<div className="text-sm space-y-1">
								<div>Total Nodes: {nodes.length}</div>
								<div>Total Edges: {edges.length}</div>
								<div className="text-pink-600">New Nodes Added: {newNodes.length}</div>
								<div className="text-pink-600">New Edges Added: {newEdges.length}</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
