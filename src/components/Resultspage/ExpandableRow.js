import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ExpandableRow = ({ student }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<tr className="cursor-pointer" onClick={() => setIsOpen(true)}>
				<td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
				<td className="px-6 py-4 whitespace-nowrap">{student.marks}</td>
				<td className="px-6 py-4 whitespace-nowrap">
					{student.percentage}
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					{student.result}
				</td>
			</tr>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={setIsOpen}
				>
					<div className="min-h-screen px-4 text-center">
						<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									Details for {student.name}
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-500">
										{student.details}
									</p>
								</div>
								<div className="mt-4">
									<button
										type="button"
										className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
										onClick={() => setIsOpen(false)}
									>
										Close
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default ExpandableRow;
