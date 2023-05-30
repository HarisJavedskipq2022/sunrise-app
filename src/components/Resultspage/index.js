// Pages/ResultsPage.js
import React from "react";
import ExpandableRow from "./ExpandableRow";

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
		subject: "English",
		marks: "90",
		result: "Pass",
		details: "Jane excelled in Math and Science subjects.",
	},
	// Add more 10th grade students here...
];

const ResultsPage = () => {
	return (
		<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<div className="max-w-md mx-auto">
						<div>
							<h1 className="text-2xl font-semibold">Results</h1>
						</div>
						<div className="divide-y divide-gray-200">
							<h2 className="text-xl font-semibold mt-4 mb-2">
								9th Grade
							</h2>
							<table className="min-w-full divide-y divide-gray-200 mb-6">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Student
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Marks Obtained
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Percentage
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Result
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{students9th.map((student) => (
										<ExpandableRow
											key={student.name}
											student={student}
										/>
									))}
								</tbody>
							</table>

							<h2 className="text-xl font-semibold mt-4 mb-2">
								10th Grade
							</h2>
							<table className="min-w-full divide-y divide-gray-200 mb-6">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Student
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Marks Obtained
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Percentage
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Result
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{students9th.map((student) => (
										<ExpandableRow
											key={student.name}
											student={student}
										/>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultsPage;
