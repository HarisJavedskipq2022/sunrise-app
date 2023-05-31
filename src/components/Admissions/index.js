import React, { useState } from "react";
import { object, string } from "zod";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AdmissionPage = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [fatherName, setFatherName] = useState("");
	const [studentClass, setStudentClass] = useState("");
	const [otherClasses, setOtherClasses] = useState("");
	const [errors, setErrors] = useState({});

	const admissionSchema = object({
		name: string()
			.min(2, "Name must be at least 2 characters")
			.max(50, "Name must be at most 50 characters"),
		email: string().email("Invalid email address"),
		phone: string()
			.nonempty("Phone number is required")
			.regex(/^\+?[1-9]\d{1,14}$/, "Phone number must be valid"),
		fatherName: string()
			.min(2, "Father's name must be at least 2 characters")
			.max(50, "Father's name must be at most 50 characters"),
		studentClass: string()
			.min(1, "Student's class must be at least 1 character")
			.max(20, "Student's class must be at most 20 characters"),
		otherClasses: string()
			.min(2, "Other classes must be at least 2 characters")
			.max(100, "Other classes must be at most 100 characters"),
	});

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

		const admissionData = {
			name,
			email,
			phone,
			fatherName,
			studentClass,
			otherClasses,
		};

		try {
			admissionSchema.parse(admissionData);
			// Validation successful
			// Handle form submission logic here
			console.log("Form submitted:", admissionData);
			// Show success message
			setModalContent("Form submitted successfully!");
			setModalIsOpen(true);
			// Reset form fields and errors
			setName("");
			setEmail("");
			setPhone("");
			setFatherName("");
			setStudentClass("");
			setOtherClasses("");
			setErrors({});
		} catch (error) {
			// Validation failed
			const validationErrors = {};
			const { fieldErrors } = error.flatten();
			Object.keys(fieldErrors).forEach((field) => {
				validationErrors[field] = fieldErrors[field][0];
			});
			setErrors(validationErrors);
			// Show error message
			setModalContent(
				"Form submission failed, please correct the errors!"
			);
			setModalIsOpen(true);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			{/* Modal */}
			<Transition.Root show={modalIsOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					onClose={() => setModalIsOpen(false)}
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<div className="mt-2">
												<p className="text-sm text-gray-500">
													{modalContent}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									<button
										type="button"
										className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setModalIsOpen(false)}
									>
										Close
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

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
							className={`w-full px-4 py-2 mt-2 rounded-lg border-2 ${
								errors.name
									? "border-red-500"
									: "border-gray-300"
							} focus:outline-none focus:border-purple-500`}
							placeholder="Enter your name"
							value={name}
							onChange={handleNameChange}
							required
						/>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">
								{errors.name}
							</p>
						)}
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
							className={`w-full px-4 py-2 mt-2 rounded-lg border-2 ${
								errors.email
									? "border-red-500"
									: "border-gray-300"
							} focus:outline-none focus:border-purple-500`}
							placeholder="Enter your email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">
								{errors.email}
							</p>
						)}
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
							className={`w-full px-4 py-2 mt-2 rounded-lg border-2 ${
								errors.phone
									? "border-red-500"
									: "border-gray-300"
							} focus:outline-none focus:border-purple-500`}
							placeholder="Enter your phone number"
							value={phone}
							onChange={handlePhoneChange}
							required
						/>
						{errors.phone && (
							<p className="text-red-500 text-sm mt-1">
								{errors.phone}
							</p>
						)}
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
							className={`w-full px-4 py-2 mt-2 rounded-lg border-2 ${
								errors.fatherName
									? "border-red-500"
									: "border-gray-300"
							} focus:outline-none focus:border-purple-500`}
							placeholder="Enter father's name"
							value={fatherName}
							onChange={handleFatherNameChange}
							required
						/>
						{errors.fatherName && (
							<p className="text-red-500 text-sm mt-1">
								{errors.fatherName}
							</p>
						)}
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
							className={`w-full px-4 py-2 mt-2 rounded-lg border-2 ${
								errors.studentClass
									? "border-red-500"
									: "border-gray-300"
							} focus:outline-none focus:border-purple-500`}
							placeholder="Enter student's class"
							value={studentClass}
							onChange={handleClassChange}
							required
						/>
						{errors.studentClass && (
							<p className="text-red-500 text-sm mt-1">
								{errors.studentClass}
							</p>
						)}
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
							className={`w-full px-4 py-2 mt-2 rounded-lg border-2 ${
								errors.otherClasses
									? "border-red-500"
									: "border-gray-300"
							} focus:outline-none focus:border-purple-500`}
							placeholder="Enter other required classes"
							value={otherClasses}
							onChange={handleOtherClassesChange}
							required
						/>
						{errors.otherClasses && (
							<p className="text-red-500 text-sm mt-1">
								{errors.otherClasses}
							</p>
						)}
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
