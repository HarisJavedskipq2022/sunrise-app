import React, { useState } from "react";

const CareerComponent = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Here you can perform validation on the form inputs

		// Example code to handle form submission
		// Replace with your own implementation to send data to the backend or email service
		const formData = {
			name,
			email,
			message,
		};

		// Display success message
		setSuccessMessage("Thank you for submitting the form!");

		// Reset form fields
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="p-4">
				<h2 className="text-2xl font-bold mb-4">Career Form</h2>
				<form onSubmit={handleSubmit} className="max-w-md">
					<div className="mb-4">
						<label htmlFor="name" className="text-sm font-medium">
							Name:
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="border border-gray-300 rounded-md p-2 w-full"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="text-sm font-medium">
							Email:
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="border border-gray-300 rounded-md p-2 w-full"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="message"
							className="text-sm font-medium"
						>
							Message:
						</label>
						<textarea
							id="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							className="border border-gray-300 rounded-md p-2 w-full"
						></textarea>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
					>
						Submit
					</button>
				</form>
				{successMessage && (
					<p className="text-green-600 mt-2">{successMessage}</p>
				)}
			</div>
		</div>
	);
};

export default CareerComponent;
