import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import {
	FaHome,
	FaInfoCircle,
	FaCog,
	FaClipboardList,
	FaEnvelope,
	FaBriefcase,
} from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gradient-to-r from-indigo-900 to-purple-900">
			<div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="text-white text-2xl font-bold">
							<span className="text-purple-300">Pen</span> of
							scholar is{" "}
							<span className="text-purple-300">mightier</span>{" "}
							than the sword -Edward
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<Link
							to="/"
							className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							<FaHome className="h-5 w-5 mr-1" />
							Home
						</Link>
						<Link
							to="/about"
							className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							<FaInfoCircle className="h-5 w-5 mr-1" />
							About
						</Link>
						<Link
							to="/services"
							className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							<FaCog className="h-5 w-5 mr-1" />
							Services
						</Link>
						<Link
							to="/results"
							className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							<FaClipboardList className="h-5 w-5 mr-1" />
							Results
						</Link>
						<Link
							to="/contact"
							className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							<FaEnvelope className="h-5 w-5 mr-1" />
							Contact
						</Link>
						<Link
							to="/careers"
							className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							<FaBriefcase className="h-5 w-5 mr-1" />
							Careers
						</Link>
						<Link
							to="/admission"
							className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
						>
							Admission
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
								className="flex items-center text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								<FaHome className="h-5 w-5 mr-2" />
								Home
							</Link>
							<Link
								to="/about"
								className="flex items-center text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								<FaInfoCircle className="h-5 w-5 mr-2" />
								About
							</Link>
							<Link
								to="/services"
								className="flex items-center text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								<FaCog className="h-5 w-5 mr-2" />
								Services
							</Link>
							<Link
								to="/results"
								className="flex items-center text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								<FaClipboardList className="h-5 w-5 mr-2" />
								Results
							</Link>
							<Link
								to="/contact"
								className="flex items-center text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								<FaEnvelope className="h-5 w-5 mr-2" />
								Contact
							</Link>
							<Link
								to="/careers"
								className="flex items-center text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								<FaBriefcase className="h-5 w-5 mr-2" />
								Careers
							</Link>
							<Link
								to="/admission"
								className="flex items-center text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
								onClick={toggleMenu}
							>
								Admission
							</Link>
						</div>
					</div>
				)}
			</Transition>
		</nav>
	);
};

export default Navbar;
