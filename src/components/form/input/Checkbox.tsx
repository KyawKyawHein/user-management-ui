import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Checkbox = ({ name, value, id, labelText, required,isActive,setIsActive }) => {
	// const {isActive,setIsActive} = useUserDetailStore()
	const [checked, setChecked] = useState(false);
	const handleCheck = (e) => {
		// const { checked } = e.target;
		// console.log(checked)
		// setChecked(checked)
		// setIsActive(checked? 'true':'false')
	};
	return (
		<React.Fragment>
			<div className="flex items-center">
				<div
					className={`w-5 h-5 relative overflow-hidden border rounded cursor-pointer`}
				>
					<input
						type="checkbox"
						className="w-full h-full cursor-pointer focus:outline-none"
						checked={true}
						// value={isActive=='true'? true:false}
						value={true}
						onChange={handleCheck}
						name={name}
						id={id}
					/>
					<div
						className={` w-full h-full absolute top-0 left-0 flex items-center justify-center text-xs text-white shadow-inner ${
							checked
								? "bg-[#3e97ff] border-[#3e97ff]"
								: "bg-gray-100 border-gray-300"
						}`}
					>
						{checked ? <FontAwesomeIcon icon={faCheck} /> : null}
					</div>
				</div>
				{labelText ? (
					<div className="ml-2">
						<label
							htmlFor={id}
							className="text-sm font-base text-gray-400 cursor-pointer"
						>
							{labelText}
						</label>
						{required === true && <span className="text-red-500 ml-1">*</span>}
					</div>
				) : null}
			</div>
		</React.Fragment>
	);
};

export default Checkbox;
