import React from "react";
import hero from '../Assets/main-character.jpg';
import { Drawer } from "@material-tailwind/react";

const Footers = () => {
	return (
		<Drawer open={true} placement='bottom' overlay={false} size={60}>
			<footer className="bg-gray-800 text-white p-4 text-center flex flex-col">
				<a href="https://eriksan123.carrd.co/" className="flex justify-center text-xl items-center space-x-4 mx-auto">
					{/* <img src={hero} alt="main-character" height={35} width={35} /> */}
					<p>&copy; Mochamad Faishal Rafi 2303040098</p>
				</a>
			</footer>
		</Drawer>
	);
};

export default Footers;