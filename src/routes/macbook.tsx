import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/macbook")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-4xl mx-auto p-6 bg-gray-50">
			<div className="bg-white rounded-lg shadow-lg p-8">
				<h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
					MacBook Air & Logitech Wireless Mouse Combo
				</h1>
				
				<div className="grid md:grid-cols-2 gap-8">
					{/* MacBook Air Section */}
					<div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
						<h2 className="text-2xl font-semibold text-indigo-800 mb-4">
							MacBook Air M3
						</h2>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Processor:</span>
								<span className="text-gray-600">Apple M3 Chip</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Memory:</span>
								<span className="text-gray-600">8GB - 24GB Unified Memory</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Storage:</span>
								<span className="text-gray-600">256GB - 2TB SSD</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Display:</span>
								<span className="text-gray-600">13.6" Liquid Retina</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Battery:</span>
								<span className="text-gray-600">Up to 18 hours</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Weight:</span>
								<span className="text-gray-600">2.7 lbs (1.24 kg)</span>
							</div>
						</div>
						
						<div className="mt-6">
							<h3 className="text-lg font-semibold text-indigo-700 mb-2">Key Features:</h3>
							<ul className="list-disc list-inside text-gray-600 space-y-1">
								<li>Fanless design for silent operation</li>
								<li>MagSafe 3 charging port</li>
								<li>Two Thunderbolt ports</li>
								<li>1080p FaceTime HD camera</li>
								<li>Four-speaker sound system</li>
								<li>Touch ID for secure authentication</li>
							</ul>
						</div>
					</div>

					{/* Logitech Mouse Section */}
					<div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg">
						<h2 className="text-2xl font-semibold text-emerald-800 mb-4">
							Logitech MX Master 3S
						</h2>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Connectivity:</span>
								<span className="text-gray-600">Bluetooth & USB-C</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">DPI:</span>
								<span className="text-gray-600">200-8000 DPI</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Battery:</span>
								<span className="text-gray-600">Up to 70 days</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Buttons:</span>
								<span className="text-gray-600">7 customizable buttons</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Scroll Wheel:</span>
								<span className="text-gray-600">MagSpeed electromagnetic</span>
							</div>
							<div className="flex justify-between">
								<span className="font-medium text-gray-700">Weight:</span>
								<span className="text-gray-600">141g</span>
							</div>
						</div>
						
						<div className="mt-6">
							<h3 className="text-lg font-semibold text-emerald-700 mb-2">Key Features:</h3>
							<ul className="list-disc list-inside text-gray-600 space-y-1">
								<li>Ultra-quiet clicks (90% noise reduction)</li>
								<li>Multi-device connectivity (up to 3 devices)</li>
								<li>Thumb wheel for horizontal scrolling</li>
								<li>Ergonomic design for all-day comfort</li>
								<li>Logitech Flow for seamless multi-computer use</li>
								<li>Quick charging: 1 min = 3 hours of use</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Combo Benefits Section */}
				<div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-100 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
						Perfect Combo Benefits
					</h2>
					<div className="grid md:grid-cols-3 gap-4">
						<div className="text-center">
							<div className="bg-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
								<span className="text-2xl">⚡</span>
							</div>
							<h3 className="font-semibold text-purple-700 mb-2">Enhanced Productivity</h3>
							<p className="text-gray-600 text-sm">
								Seamless workflow with precision mouse control and powerful MacBook performance
							</p>
						</div>
						<div className="text-center">
							<div className="bg-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
								<span className="text-2xl">🔄</span>
							</div>
							<h3 className="font-semibold text-purple-700 mb-2">Multi-Device Sync</h3>
							<p className="text-gray-600 text-sm">
								Use Logitech Flow to control multiple devices including your MacBook seamlessly
							</p>
						</div>
						<div className="text-center">
							<div className="bg-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
								<span className="text-2xl">🎯</span>
							</div>
							<h3 className="font-semibold text-purple-700 mb-2">Precision & Comfort</h3>
							<p className="text-gray-600 text-sm">
								Ergonomic mouse design complements the MacBook's sleek portability
							</p>
						</div>
					</div>
				</div>

				{/* Pricing Section */}
				<div className="mt-8 bg-gray-100 p-6 rounded-lg text-center">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing</h2>
					<div className="flex justify-center space-x-8">
						<div>
							<h3 className="font-semibold text-gray-700">MacBook Air M3</h3>
							<p className="text-2xl font-bold text-blue-600">Starting at $1,099</p>
						</div>
						<div>
							<h3 className="font-semibold text-gray-700">Logitech MX Master 3S</h3>
							<p className="text-2xl font-bold text-green-600">$99.99</p>
						</div>
					</div>
					<div className="mt-4 p-4 bg-yellow-100 rounded-lg">
						<p className="text-lg font-semibold text-yellow-800">
							Combo Deal: Save $50 when purchased together!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
