import React, { useState } from "react";
import Button from "../form/button/Button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Select from "../form/input/Select";

const data = [{ name: 10 }, { name: 20 }, { name: 30 }, { name: 40 }];
const TablePagination = ({countPagination,currentPage,setCurrentPage}) => {
	const getItemProps = (index) => {
		setCurrentPage(index);
	};
	const next = () => {
		if (countPagination === currentPage) return;
		setCurrentPage(currentPage + 1);
	};

	const prev = () => {
		if (currentPage === 1) return;
		setCurrentPage(currentPage - 1);
	};
	return (
		<div className="flex items-center justify-end px-8">
			<div className="flex">
				<Button
					variant="text"
					className="bg-transparent text-[#95989a]"
					onClick={prev}
					disabled={currentPage === 1}
					leftIcon={faArrowLeft}
					iconColor="text-[#95989a] h-[1rem] w-[1rem]"
				>
					Previous
				</Button>
				<div className="flex items-center gap-1">
				{
					Array.from({length:countPagination},(_,index)=>(
						<span
						key={index+1}
						onClick={() => getItemProps(index+1)}
						className={`h-8 w-8 text-sm flex justify-center items-center  rounded-md cursor-pointer ${
							index+1 === currentPage ? "bg-gray-400 text-gray-100" : "hover:bg-gray-300"
						}`}
					>
						{index+1}
					</span>
					))
				}
				</div>
				<Button
					variant="text"
					className="bg-transparent text-[#95989a]"
					onClick={next}
					disabled={currentPage === countPagination}
					rightIcon={faArrowRight}
					iconColor="text-[#95989a] h-[1rem] w-[1rem]"
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default TablePagination;
