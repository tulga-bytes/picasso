import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fifth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="p-6 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Fifth Page - Scrolling Test</h1>
			<p className="mb-4">This page demonstrates the sticky header and scrollable content functionality.</p>

			{/* Generate content to test scrolling */}
			{Array.from({ length: 50 }, (_, i) => (
				<div key={i} className="mb-4 p-4 bg-gray-100 rounded-lg">
					<h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
					<p className="text-gray-700">
						This is section {i + 1} of the content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<p className="text-gray-600 mt-2">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			))}
		</div>
	);
}
