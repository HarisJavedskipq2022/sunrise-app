import React from "react";
import { motion } from "framer-motion";
import {
	EnvelopeIcon,
	PhoneIcon,
	ClockIcon,
	BuildingOfficeIcon,
} from "@heroicons/react/24/solid";

const ContactPage = () => {
	return (
		<motion.div
			className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg shadow-lg"
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.5, opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					className="bg-gray-200 p-4 rounded-md shadow-md"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Contact Information
					</h2>
					<motion.div
						className="flex items-center mb-4"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.1 }}
					>
						<EnvelopeIcon className="h-6 w-6 text-gray-800 mr-4" />
						<p className="text-gray-800">
							haris_javed95@hotmail.com
						</p>
					</motion.div>
					<motion.div
						className="flex items-center mb-4"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<PhoneIcon className="h-6 w-6 text-gray-800 mr-4" />
						<p className="text-gray-800">+92334-3182277</p>
					</motion.div>
					<motion.div
						className="flex items-start"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						<BuildingOfficeIcon className="h-6 w-6 text-gray-800 mr-4 mt-1" />
						<div>
							<p className="text-gray-800">
								B-170 Gulshan-e-Hadeed, Karachi
							</p>
							<p className="text-gray-800">Sindh, Pakistan</p>
						</div>
					</motion.div>
				</motion.div>
				<motion.div
					className="bg-gray-200 p-4 rounded-md shadow-md"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Business Hours
					</h2>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.1 }}
					>
						<ClockIcon className="h-6 w-6 text-gray-800 mr-4" />
						<div>
							<p className="text-gray-800 mb-2">
								Monday - Friday: 8:00 AM - 2:00 PM
							</p>
							<p className="text-gray-800 mb-2">
								Saturday: Closed
							</p>
							<p className="text-gray-800">Sunday: Closed</p>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default ContactPage;
