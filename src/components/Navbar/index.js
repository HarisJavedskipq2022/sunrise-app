import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gradient-to-r from-indigo-900 to-purple-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="text-white text-2xl font-bold">
							Pen of scholar is mightier than the sword -Edward
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<Link
							to="/"
							className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							Home
						</Link>
						<Link
							to="/about"
							className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							About
						</Link>
						<Link
							to="/services"
							className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							Services
						</Link>
						<Link
							to="/results"
							className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							Results
						</Link>
						<Link
							to="/contact"
							className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							Contact
						</Link>
					</div>
					<div className="flex md:hidden">
						<button
							className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
							aria-label="Open mobile menu"
							onClick={toggleMenu}
						>
							<svg
								className="h-6 w-6"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<Transition
				show={isOpen}
				enter="transition duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				{(ref) => (
					<div className="md:hidden">
						<div
							className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="mobile-menu"
							ref={ref}
						>
							<Link
								to="/"
								className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								Home
							</Link>
							<Link
								to="/about"
								className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								About
							</Link>
							<Link
								to="/services"
								className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								Services
							</Link>
							<Link
								to="/results"
								className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								Results
							</Link>
							<Link
								to="/contact"
								className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								Contact
							</Link>
						</div>
					</div>
				)}
			</Transition>
		</nav>
	);
};

export default Navbar;
