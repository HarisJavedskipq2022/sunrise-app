import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5 } },
	};

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
	};

	return (
		<div className="bg-gray-100 py-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="bg-white rounded-lg shadow-lg p-8"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.h1
						className="text-4xl font-bold mb-4"
						variants={textVariants}
					>
						About Our School
					</motion.h1>
					<motion.p
						className="text-gray-600 mb-6"
						variants={textVariants}
					>
						Sunrise Grammar High School is a leading educational
						institution committed to providing a nurturing and
						inclusive environment for students. With a rich history
						spanning over 50 years, our school has been a pillar of
						academic excellence and character development.
					</motion.p>
					<motion.p
						className="text-gray-600 mb-6"
						variants={textVariants}
					>
						We believe in fostering a holistic approach to
						education, combining rigorous academic programs with a
						wide range of extracurricular activities. Our dedicated
						faculty and staff are passionate about helping students
						discover their passions, develop critical thinking
						skills, and become well-rounded individuals prepared for
						success in the modern world.
					</motion.p>
					<motion.p
						className="text-gray-600 mb-6"
						variants={textVariants}
					>
						At Sunrise Grammar High School, we value diversity,
						respect, and a strong sense of community. We strive to
						create a supportive and inclusive environment where
						every student feels valued and empowered to reach their
						full potential. Our commitment to character education
						and social-emotional development ensures that students
						not only excel academically but also grow as
						compassionate and responsible citizens.
					</motion.p>
					<motion.p
						className="text-gray-600 mb-6"
						variants={textVariants}
					>
						We take pride in our state-of-the-art facilities,
						including well-equipped classrooms, modern laboratories,
						a comprehensive library, and extensive sports
						facilities. These resources enable us to provide a
						dynamic and engaging learning experience for our
						students, fostering a love for learning and exploration.
					</motion.p>
					<motion.p className="text-gray-600" variants={textVariants}>
						As we look towards the future, we remain dedicated to
						our mission of preparing students for a rapidly changing
						world. We continuously adapt our curriculum to
						incorporate innovative teaching methods and emerging
						technologies, ensuring our students are well-prepared
						for the challenges and opportunities of the 21st
						century.
					</motion.p>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutPage;
