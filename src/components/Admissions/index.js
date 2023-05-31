import React, { useState } from "react";

const AdmissionPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [fatherName, setFatherName] = useState("");
	const [studentClass, setStudentClass] = useState("");
	const [otherClasses, setOtherClasses] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};

	const handleFatherNameChange = (event) => {
		setFatherName(event.target.value);
	};

	const handleClassChange = (event) => {
		setStudentClass(event.target.value);
	};

	const handleOtherClassesChange = (event) => {
		setOtherClasses(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
		console.log(
			"Form submitted:",
			name,
			email,
			phone,
			fatherName,
			studentClass,
			otherClasses
		);
		// Reset form fields
		setName("");
		setEmail("");
		setPhone("");
		setFatherName("");
		setStudentClass("");
		setOtherClasses("");
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
			<div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
				<h2 className="text-3xl text-center font-bold mb-6">
					Admission Form
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="name" className="text-lg text-gray-700">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="w-full px-4 py-2 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
							placeholder="Enter your name"
							value={name}
							onChange={handleNameChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="text-lg text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full px-4 py-2 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
							placeholder="Enter your email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="phone"
							className="text-lg text-gray-700"
						>
							Phone
						</label>
						<input
							type="tel"
							id="phone"
							className="w-full px-4 py-2 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
							placeholder="Enter your phone number"
							value={phone}
							onChange={handlePhoneChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="fatherName"
							className="text-lg text-gray-700"
						>
							Father's Name
						</label>
						<input
							type="text"
							id="fatherName"
							className="w-full px-4 py-2 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
							placeholder="Enter father's name"
							value={fatherName}
							onChange={handleFatherNameChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="studentClass"
							className="text-lg text-gray-700"
						>
							Class
						</label>
						<input
							type="text"
							id="studentClass"
							className="w-full px-4 py-2 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
							placeholder="Enter student's class"
							value={studentClass}
							onChange={handleClassChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="otherClasses"
							className="text-lg text-gray-700"
						>
							Other Classes
						</label>
						<input
							type="text"
							id="otherClasses"
							className="w-full px-4 py-2 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
							placeholder="Enter other required classes"
							value={otherClasses}
							onChange={handleOtherClassesChange}
							required
						/>
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							className="py-2 px-6 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg focus:outline-none"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdmissionPage;
