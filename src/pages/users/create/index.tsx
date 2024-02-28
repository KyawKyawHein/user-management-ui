import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/Input";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const index = () => {
  return (
    <Layout>
			<div className="w-full h-full">
				<div className="my-2">
					<Button
						leftIcon={faArrowLeft}
						className="bg-transparent text-gray-400 hover:bg-gray-200"
					>
						Back
					</Button>
				</div>
				<div className="bg-white rounded-xl px-8">
					<div className="pt-6">
						<h1 className="font-semibold text-xl text-gray-700">
							Create User Account
						</h1>
						<div>
							<Breadcrumbs />
						</div>
					</div>
					<div className="py-4">
						<div className="grid grid-cols-5 gap-10">
							<div>
								<Input labelText="Prefix:" placeholder="Mr / Mrs / Miss" />
							</div>
							<div className="col-span-2">
								<Input
									labelText="First Name"
									placeholder="First Name"
									required
								/>
							</div>
							<div className="col-span-2">
								<Input labelText="Last Name" placeholder="Last Name" />
							</div>
						</div>
						<div className="mt-3">
							<Input
								labelText="Email Address"
								placeholder="username@domain.xyz"
							/>
						</div>
						<div className="flex items-center gap-5 mt-5 mb-7">
							<Checkbox />
							<div className="flex flex-col">
								<h1 className="text-sm text-gray-400">Is Active?</h1>
								<p className="text-xs text-gray-500">
									User account is activate or deactivate
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
  );
};

export default index;
