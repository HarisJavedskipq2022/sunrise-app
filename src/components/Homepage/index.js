import React from "react";
import {
	RiBook2Line,
	RiGroupLine,
	RiShieldUserLine,
	RiBuilding4Line,
} from "react-icons/ri";
import { motion } from "framer-motion";

const HomePage = () => {
	const introVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	const cardVariants = {
		hover: { scale: 1.05 },
	};

	return (
		<div className="bg-gray-100 py-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h1
					className="text-4xl font-bold mb-8 text-center"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Welcome to Sunrise Grammar High School
				</motion.h1>
				<motion.p
					className="text-lg text-gray-600 mb-8"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					Our school is committed to providing a nurturing and
					inclusive environment that fosters academic growth, personal
					development, and prepares students for a dynamic future.
					With a dedicated team of passionate educators,
					state-of-the-art facilities, and a comprehensive curriculum,
					we strive to empower each student to reach their full
					potential. Join us on this exciting journey of learning and
					discovery at our school.
				</motion.p>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
					variants={introVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div
						className="bg-blue-400 rounded-lg shadow-lg overflow-hidden text-center"
						variants={cardVariants}
					>
						<div className="flex items-center justify-center h-48 bg-blue-500 text-white">
							<RiBook2Line className="text-5xl" />
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold mb-2">
								Academic Excellence
							</h3>
							<p className="text-gray-600">
								Academic excellence is our top priority. We
								maintain high standards of teaching and learning
								to ensure that every student receives a quality
								education that prepares them for future success.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-purple-400 rounded-lg shadow-lg overflow-hidden text-center"
						variants={cardVariants}
					>
						<div className="flex items-center justify-center h-48 bg-purple-500 text-white">
							<RiGroupLine className="text-5xl" />
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold mb-2">
								Extra-curricular Activities
							</h3>
							<p className="text-gray-600">
								We believe in the power of extra-curricular
								activities to enrich the educational experience.
								At our school, we offer a diverse range of
								clubs, sports, and arts programs that foster
								creativity, teamwork, and personal growth,
								allowing students to explore their passions
								beyond the classroom.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-yellow-400 rounded-lg shadow-lg overflow-hidden text-center"
						variants={cardVariants}
					>
						<div className="flex items-center justify-center h-48 bg-yellow-500 text-white">
							<RiShieldUserLine className="text-5xl" />
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold mb-2">
								Discipline
							</h3>
							<p className="text-gray-600">
								Discipline is an integral part of our school
								community. We promote a culture of respect,
								responsibility, and accountability, instilling
								in our students the values of self-discipline
								and positive behavior, creating a conducive
								environment for learning and personal
								development.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="bg-green-400 rounded-lg shadow-lg overflow-hidden text-center"
						variants={cardVariants}
					>
						<div className="flex items-center justify-center h-48 bg-green-500 text-white">
							<RiBuilding4Line className="text-5xl" />
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold mb-2">
								State-of-the-Art Facilities
							</h3>
							<p className="text-gray-600">
								Our school provides state-of-the-art facilities
								to support the learning and growth of our
								students. From well-equipped classrooms to
								advanced technology labs, we ensure a conducive
								environment that enhances the educational
								experience.
							</p>
						</div>
					</motion.div>
				</motion.div>
				<motion.p
					className="mt-8 text-center text-gray-500"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1 }}
				>
					Thank you for visiting our website. We invite you to explore
					more about our school and the opportunities we provide.
				</motion.p>
			</div>
		</div>
	);
};

export default HomePage;
