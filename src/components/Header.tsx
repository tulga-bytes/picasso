import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 p-2 flex gap-2 bg-white text-black justify-between border-b border-gray-200 shadow-sm">
			<nav className="flex flex-row">
				<div className="font-bold">
					<Link
						to="/"
						className="px-2 py-1 rounded-md hover:text-blue-600 transition-colors"
						activeProps={{
							className: "px-2 py-1 rounded-md text-blue-600 bg-blue-50"
						}}
					>
						Home
					</Link>
				</div>

				<div className="font-bold">
					<Link
						to="/demo/tanstack-query"
						className="px-2 py-1 rounded-md hover:text-blue-600 transition-colors"
						activeProps={{
							className: "px-2 py-1 rounded-md text-blue-600 bg-blue-50"
						}}
					>
						TanStack Query
					</Link>
				</div>

				<div className="font-bold">
					<Link
						to="/demo/store"
						className="px-2 py-1 rounded-md hover:text-blue-600 transition-colors"
						activeProps={{
							className: "px-2 py-1 rounded-md text-blue-600 bg-blue-50"
						}}
					>
						Store
					</Link>
				</div>

				<div className="font-bold">
					<Link
						to="/flow"
						className="px-2 py-1 rounded-md hover:text-blue-600 transition-colors"
						activeProps={{
							className: "px-2 py-1 rounded-md text-blue-600 bg-blue-50"
						}}
					>
						Flow
					</Link>
				</div>
				<div className="font-bold">
					<Link
						to="/fifth"
						className="px-2 py-1 rounded-md hover:text-blue-600 transition-colors"
						activeProps={{
							className: "px-2 py-1 rounded-md text-blue-600 bg-blue-50"
						}}
					>
						Fifth
					</Link>
				</div>
				<div className="font-bold">
					<Link
						to="/macbook"
						className="px-2 py-1 rounded-md hover:text-blue-600 transition-colors"
						activeProps={{
							className: "px-2 py-1 rounded-md text-blue-600 bg-blue-50"
						}}
					>
						MacBook
					</Link>
				</div>
			</nav>
		</header>
	);
}
