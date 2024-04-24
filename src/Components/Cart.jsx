import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Input } from "@material-tailwind/react";

import CartImg1 from '../Assets/baju2.jpeg';
import CartImg2 from '../Assets/hp1.png';

const Carts = () => {
	const Cart = [
		{
			image: CartImg1,
			alt: "baju",
			title: "Kaos oblong layak",
			price: "Rp. 23.450",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			amount: 3,
		},
		{
			image: CartImg2,
			alt: "hp",
			title: "POCO X6 5G",
			price: "Rp. 39.999.999",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			amount: 1,
		},
	]

	const [counter, setCounter] = useState(0);
	const handleClick1 = () => {
		setCounter(counter + 1);
	};

	const handleClick2 = () => {
		setCounter(counter - 1);
	};

	return (
		<div className="m-4 p-4 pb-8 mb-[80px]">
			<div>
				<Typography variant="h1" color="blue-gray" className="font-mono">
					DAFTAR BELANJA
				</Typography>
			</div>
			<hr className="my-2 border-blue-gray-50" />
			<div className="gap-6 grid justify-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				{Cart.map((item, index) => (
					<Card className="max-w-72 scale-95 hover:scale-100 ease-in duration-200">
						<a href="/">
							<CardHeader shadow={false} floated={false}> {/* className="h-96" */}
								<img
									src={item.image}
									alt={item.alt}
									className="h-full w-full object-cover"
								/>
							</CardHeader>
							<CardBody>
								<div className="mb-2 flex items-center justify-between">
									<Typography color="blue-gray" className="font-medium hover:text-blue-gray-400 duration-200">
										{item.title}
									</Typography>
									<Typography color="blue-gray" className="font-medium hover:text-blue-gray-400 duration-200">
										{item.price}
									</Typography>
								</div>
								<Typography
									variant="small"
									color="gray"
									className="font-normal opacity-75 max-h-20 overflow-hidden text-elipsis"
								>
									{item.description}
								</Typography>
							</CardBody>
						</a>
						<CardFooter className="pt-0 flex justify-between items-center">
							<Typography variant='h5' color="blue-gray" className="font-mono">Jumlah :</Typography>
							<div className='flex'>
								<Button onClick={handleClick2} ripple={false} color='green' className='rounded-none rounded-l-lg'>-</Button>
								<input
									type='number'
									defaultValue={item.amount}
									// value={counter}
									className='h-auto max-w-[50px] outline outline-2 outline-offset-[-2px] outline-green-400 rounded-none text-center' />
								<Button onClick={handleClick1} ripple={false} color='green' className='rounded-none rounded-r-lg'>+</Button>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</div >
	)
}

export default Carts