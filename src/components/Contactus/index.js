// Pages/ContactPage.js
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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
				<div className="bg-gray-200 p-4 rounded-md shadow-md">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Contact Information
					</h2>
					<div className="flex items-center mb-4">
						<EnvelopeIcon className="h-6 w-6 text-gray-800 mr-4" />
						<p className="text-gray-800">example@example.com</p>
					</div>
					<div className="flex items-center mb-4">
						<PhoneIcon className="h-6 w-6 text-gray-800 mr-4" />
						<p className="text-gray-800">+1 234 567 8900</p>
					</div>
					<div className="flex items-start">
						<BuildingOfficeIcon className="h-6 w-6 text-gray-800 mr-4 mt-1" />
						<div>
							<p className="text-gray-800">123 Street, City</p>
							<p className="text-gray-800">State, Country</p>
						</div>
					</div>
				</div>
				<div className="bg-gray-200 p-4 rounded-md shadow-md">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Business Hours
					</h2>
					<div>
						<ClockIcon className="h-6 w-6 text-gray-800 mr-4" />
						<div>
							<p className="text-gray-800 mb-2">
								Monday - Friday: 9:00 AM - 5:00 PM
							</p>
							<p className="text-gray-800 mb-2">
								Saturday: 10:00 AM - 2:00 PM
							</p>
							<p className="text-gray-800">Sunday: Closed</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ContactPage;
