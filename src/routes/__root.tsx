import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";

import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<div className="h-screen flex flex-col">
			<Header />

			<main className="flex-1 overflow-y-auto">
				<Outlet />
			</main>

			<TanStackRouterDevtools position="top-right" />
			{/* <TanStackQueryLayout /> */}
		</div>
	),
});
