import React from "react";
import { motion } from "framer-motion";
import {
	GiBookshelf,
	GiTeacher,
	GiCompass,
	GiStairsGoal,
} from "react-icons/gi";

const serviceData = [
	{
		icon: <GiBookshelf />,
		title: "Extensive Library",
		description:
			"We have a comprehensive library with books covering a vast range of subjects.",
	},
	{
		icon: <GiTeacher />,
		title: "Experienced Faculty",
		description:
			"Our dedicated faculty and staff are passionate about helping students discover their passions.",
	},
	{
		icon: <GiCompass />,
		title: "Guidance and Counseling",
		description:
			"We offer guidance and counseling services to help students with their academic and personal issues.",
	},
	{
		icon: <GiStairsGoal />,
		title: "Career Guidance",
		description:
			"Our career guidance program helps students make informed decisions about their future career paths.",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.7, delayChildren: 0.3 },
	},
};

const childVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ServicesPage = () => (
	<div
		className="bg-center bg-cover py-20"
		style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
	>
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<motion.h1
				className="text-5xl text-white text-center mb-10"
				variants={childVariants}
				initial="hidden"
				animate="visible"
			>
				Our Services
			</motion.h1>
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{serviceData.map((service, index) => (
					<motion.div
						key={index}
						className="bg-white rounded-lg shadow-lg p-10"
						variants={childVariants}
					>
						<div className="text-6xl text-blue-500 mb-6">
							{service.icon}
						</div>
						<motion.h2
							className="text-2xl font-bold mb-4 text-blue-500"
							variants={childVariants}
						>
							{service.title}
						</motion.h2>
						<motion.p
							className="text-gray-600"
							variants={childVariants}
						>
							{service.description}
						</motion.p>
					</motion.div>
				))}
			</motion.div>
		</div>
	</div>
);

export default ServicesPage;
