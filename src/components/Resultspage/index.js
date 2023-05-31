import React from "react";
import ExpandableRow from "./ExpandableRow";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const students9th = [
	{
		name: "John Doe",
		grade: "9",
		marks: "85",
		percentage: "85%",
		result: "Pass",
		details: "John performed exceptionally well in all subjects.",
	},
	{
		name: "Jane Doe",
		grade: "9",
		marks: "85",
		percentage: "85%",
		result: "Pass",
		details: "John performed exceptionally well in all subjects.",
	},
	// Add more 9th grade students here...
];

const students10th = [
	{
		name: "Jane Smith",
		grade: "10",
		marks: "785",
		percentage: "90%",
		result: "Pass",
		details: "Jane excelled in Math and Science subjects.",
	},
	// Add more 10th grade students here...
];

const ResultsPage = () => {
	return (
		<motion.div
			className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 py-6 flex flex-col justify-center sm:py-12"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<motion.div
					className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<div className="max-w-md mx-auto space-y-4">
						<div>
							<h1 className="text-3xl font-semibold text-center text-purple-900 mb-6">
								Results
							</h1>
						</div>
						<div className="divide-y divide-gray-200 space-y-4">
							<Disclosure as="div" className="mt-2">
								{({ open }) => (
									<>
										<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span className="text-lg">
												9th Grade
											</span>
											<ChevronUpIcon
												className={`${
													open
														? "transform rotate-180"
														: ""
												} w-5 h-5 text-white`}
											/>
										</Disclosure.Button>
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 space-y-2">
											<motion.table
												className="min-w-full divide-y divide-gray-200"
												initial={{ x: -100 }}
												animate={{ x: 0 }}
												transition={{
													type: "spring",
													stiffness: 300,
												}}
											>
												<thead className="bg-gray-50">
													<tr>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Student
														</th>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Marks Obtained
														</th>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Percentage
														</th>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Result
														</th>
													</tr>
												</thead>
												<tbody className="bg-white divide-y divide-gray-200">
													{students9th.map(
														(student) => (
															<ExpandableRow
																key={
																	student.name
																}
																student={
																	student
																}
															/>
														)
													)}
												</tbody>
											</motion.table>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>

							<Disclosure as="div" className="mt-4">
								{({ open }) => (
									<>
										<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span className="text-lg">
												10th Grade
											</span>
											<ChevronUpIcon
												className={`${
													open
														? "transform rotate-180"
														: ""
												} w-5 h-5 text-white`}
											/>
										</Disclosure.Button>
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 space-y-2">
											<motion.table
												className="min-w-full divide-y divide-gray-200"
												initial={{ x: -100 }}
												animate={{ x: 0 }}
												transition={{
													type: "spring",
													stiffness: 300,
												}}
											>
												<thead className="bg-gray-50">
													<tr>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Student
														</th>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Marks Obtained
														</th>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Percentage
														</th>
														<th
															scope="col"
															className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
														>
															Result
														</th>
													</tr>
												</thead>
												<tbody className="bg-white divide-y divide-gray-200">
													{students10th.map(
														(student) => (
															<ExpandableRow
																key={
																	student.name
																}
																student={
																	student
																}
															/>
														)
													)}
												</tbody>
											</motion.table>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default ResultsPage;
