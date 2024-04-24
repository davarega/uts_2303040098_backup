import React from 'react'
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

import CategoryBaju from '../Assets/baju.png';
import CategorySepatu from '../Assets/sepatu.png';
import CategoryHp from '../Assets/hp.png';

const HomeCards = () => {
	const Carts = [
		{ img: CategoryBaju, alt: "baju", title: "Baju", link: "/category/baju" },
		{ img: CategorySepatu, alt: "sepatu", title: "Sepatu", link: "/category/sepatu"},
		{ img: CategoryHp, alt: "handphone", title: "Handphone", link: "/category/handphone"},

	];
	return (
		<div className="m-4 p-4 pb-8 mb-[80px]">
			<Typography variant="h1" color="blue-gray" className="font-nunito">
				KATEGORI
			</Typography>
			<Card className='bg-blue-gray-50/50 grid grid-cols-2 sm:grid-cols-3 justify-items-center lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
				{Carts.map((item, index) => (
					<a href={"/product"}>
						<Card className='h-[180px] w-[130px] m-3 max-w-screen'>
							<CardHeader floated={false}>
								<img
									src={item.img}
									alt={item.alt}
									className="h-full w-full object-cover"
								/>
							</CardHeader>
							<CardBody className='pt-4'>
								<Typography color="blue-gray" className="font-medium text-center">
									{item.title}
								</Typography>
							</CardBody>
						</Card>
					</a>
				))}
			</Card>
		</div >
	)
}

export default HomeCards;