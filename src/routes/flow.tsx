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
	Handle,
	type Node,
	type NodeProps,
	Position,
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

// Route Node component - for existing route nodes with handles but no editing
const RouteNode = ({ data }: NodeProps) => {
	return (
		<div
			className="px-4 py-3 shadow-md rounded-md bg-white border border-gray-300 relative"
			style={{ minWidth: 220, minHeight: 100 }}
		>
			{/* Source handle (output) */}
			<Handle
				type="source"
				position={Position.Bottom}
				id="bottom"
			/>

			{/* Target handle (input) */}
			<Handle
				type="target"
				position={Position.Top}
				id="top"
			/>

			<div className="space-y-2">
				<div className="font-semibold text-sm text-gray-800">
					{data.label as string}
				</div>
				{data.description ? (
					<div className="text-xs text-gray-600 leading-relaxed">
						{data.description as string}
					</div>
				) : null}
			</div>
		</div>
	);
};

// Placeholder Demo Node - factory for creating new nodes
const PlaceholderDemoNode = ({ data }: NodeProps) => {
	const handleClick = () => {
		// Dispatch custom event to create a new node
		window.dispatchEvent(
			new CustomEvent("createNewNode", {
				detail: { sourceNodeId: "placeholder-demo" },
			}),
		);
	};

	return (
		<div
			className="px-3 py-2 shadow-md rounded-md bg-gray-50 border border-dashed border-gray-400 cursor-pointer relative hover:bg-gray-100 transition-colors"
			onClick={handleClick}
		>
			{/* Source handle only - this is a factory node */}
			<Handle
				type="source"
				position={Position.Bottom}
				id="bottom"
			/>

			<div className="flex flex-col items-center justify-center h-full">
				<Label className="text-sm text-gray-700 font-medium">
					+ Add Node
				</Label>
				<Label className="text-xs text-gray-500">Click to create</Label>
			</div>
		</div>
	);
};

// Editable Node component - for new nodes with editing capability
const EditableNode = ({ data, id }: NodeProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState((data.title as string) || "New Node");
	const [description, setDescription] = useState(
		(data.description as string) || "",
	);

	const handleSave = () => {
		// Update the node data through a custom event or callback
		window.dispatchEvent(
			new CustomEvent("updateNodeData", {
				detail: { nodeId: id, newTitle: title, newDescription: description },
			}),
		);
		setIsEditing(false);
	};

	const handleCancel = () => {
		setTitle((data.title as string) || "New Node");
		setDescription((data.description as string) || "");
		setIsEditing(false);
	};

	return (
		<div
			className="px-3 py-2 shadow-md rounded-md bg-white border border-gray-400 cursor-pointer relative"
			onDoubleClick={() => setIsEditing(true)}
		>
			{/* Source handle (output) */}
			<Handle
				type="source"
				position={Position.Bottom}
				id="bottom"
			/>

			{/* Target handle (input) */}
			<Handle
				type="target"
				position={Position.Top}
				id="top"
			/>

			{isEditing ? (
				<div className="flex flex-col gap-2">
					<Input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="text-sm font-medium"
						placeholder="Node title"
						autoFocus
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSave();
							if (e.key === "Escape") handleCancel();
						}}
					/>
					<Input
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="text-xs"
						placeholder="Description (optional)"
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
					<Label className="text-sm font-medium">{title}</Label>
					{description && (
						<div className="text-xs text-gray-600 mt-1">{description}</div>
					)}
					<div className="text-xs text-gray-400 mt-1">Double-click to edit</div>
				</div>
			)}
		</div>
	);
};

const nodeTypes = {
	route: RouteNode,
	placeholder: PlaceholderDemoNode,
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
			const newEdge: Edge = {
				...params,
				id: `new-edge-${edgeCounter}`,
			};
			setEdges((eds) => addEdge(newEdge, eds));
			setNewEdges((prev) => [...prev, newEdge]);
			setEdgeCounter((prev) => prev + 1);
		},
		[setEdges, edgeCounter],
	);

	// Listen for node data updates
	useEffect(() => {
		const handleUpdateNodeData = (event: CustomEvent) => {
			const { nodeId, newTitle, newDescription } = event.detail;
			setNodes((nds) =>
				nds.map((node) =>
					node.id === nodeId
						? {
								...node,
								data: {
									...node.data,
									title: newTitle,
									description: newDescription,
									label: newTitle, // Keep label for compatibility
								},
							}
						: node,
				),
			);
			// Also update newNodes if it's a new node
			setNewNodes((nds) =>
				nds.map((node) =>
					node.id === nodeId
						? {
								...node,
								data: {
									...node.data,
									title: newTitle,
									description: newDescription,
									label: newTitle,
								},
							}
						: node,
				),
			);
		};

		const handleCreateNewNode = () => {
			const newNode: Node = {
				id: `new-node-${nodeCounter}`,
				position: {
					x: Math.random() * 400 + 200,
					y: Math.random() * 400 + 200,
				},
				type: "new",
				data: {
					title: `New Node ${nodeCounter}`,
					description: "",
					label: `New Node ${nodeCounter}`, // Keep for compatibility
				},
			};
			setNodes((nds) => [...nds, newNode]);
			setNewNodes((prev) => [...prev, newNode]);
			setNodeCounter((prev) => prev + 1);
		};

		window.addEventListener(
			"updateNodeData",
			handleUpdateNodeData as EventListener,
		);
		window.addEventListener(
			"createNewNode",
			handleCreateNewNode as EventListener,
		);

		return () => {
			window.removeEventListener(
				"updateNodeData",
				handleUpdateNodeData as EventListener,
			);
			window.removeEventListener(
				"createNewNode",
				handleCreateNewNode as EventListener,
			);
		};
	}, [setNodes, nodeCounter]);

	const addNewNode = () => {
		const newNode: Node = {
			id: `new-node-${nodeCounter}`,
			position: { x: Math.random() * 400 + 100, y: Math.random() * 400 + 100 },
			type: "new",
			data: {
				title: `New Node ${nodeCounter}`,
				description: "",
				label: `New Node ${nodeCounter}`, // Keep for compatibility
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

	const saveChangesToFile = async () => {
		if (newNodes.length === 0 && newEdges.length === 0) return;

		const changes = {
			newNodes: newNodes.map((node) => ({
				id: node.id,
				type: node.type,
				position: node.position,
				data: node.data,
			})),
			newEdges: newEdges.map((edge) => ({
				id: edge.id,
				source: edge.source,
				target: edge.target,
				type: edge.type,
			})),
			timestamp: new Date().toISOString(),
			totalNewNodes: newNodes.length,
			totalNewEdges: newEdges.length,
		};

		try {
			// Create the JSON content
			const jsonContent = JSON.stringify(changes, null, 2);

			// Create a blob and download link
			const blob = new Blob([jsonContent], { type: "application/json" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = `flow-changes-${Date.now()}.json`;

			// Trigger download
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);

			// Reset the new nodes/edges after saving
			setNewNodes([]);
			setNewEdges([]);

			console.log("Changes saved successfully!");
		} catch (error) {
			console.error("Error saving changes:", error);
		}
	};

	// Get all node IDs for the edge creation dropdowns
	const allNodeIds = nodes.map((node) => node.id);
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
				<Button
					onClick={saveChangesToFile}
					disabled={newNodes.length === 0 && newEdges.length === 0}
					variant={
						newNodes.length > 0 || newEdges.length > 0 ? "default" : "outline"
					}
				>
					Apply Changes{" "}
					{(newNodes.length > 0 || newEdges.length > 0) &&
						`(${newNodes.length + newEdges.length})`}
				</Button>
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
						disabled={
							!sourceNodeId || !targetNodeId || sourceNodeId === targetNodeId
						}
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
				<div className="border-2 m-2 h-full relative">
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						style={{ width: "100%", height: "100%" }}
						nodeTypes={nodeTypes}
					>
						<Background />
						<Controls />
					</ReactFlow>

					{/* Fixed Toolbox */}
					<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-3 z-10">
						<div className="text-xs font-medium text-gray-600 mb-2">
							Toolbox
						</div>
						<div className="flex flex-col gap-2">
							{/* Placeholder Demo Node in Toolbox */}
							<div
								className="px-3 py-2 shadow-sm rounded-md bg-gray-50 border border-dashed border-gray-400 cursor-pointer hover:bg-gray-100 transition-colors"
								style={{ width: 140, height: 60 }}
								onClick={() => {
									window.dispatchEvent(new CustomEvent("createNewNode"));
								}}
							>
								<div className="flex flex-col items-center justify-center h-full">
									<div className="text-xs font-medium text-gray-700">
										+ Add Node
									</div>
									<div className="text-xs text-gray-500">Click to create</div>
								</div>
							</div>

							{/* Placeholder for future tools */}
							<div className="text-xs text-gray-400 text-center py-1">
								More tools coming...
							</div>
						</div>
					</div>
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
												(node) =>
													!newNodes.some((newNode) => newNode.id === node.id),
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
												(edge) =>
													!newEdges.some((newEdge) => newEdge.id === edge.id),
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
								<div className="text-pink-600">
									New Nodes Added: {newNodes.length}
								</div>
								<div className="text-pink-600">
									New Edges Added: {newEdges.length}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
