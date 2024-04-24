import React from 'react'
import { Carousel } from "@material-tailwind/react";

import slide1 from "../Assets/slide1.jpg";
import slide2 from "../Assets/slide2.jpg";
import slide3 from "../Assets/slide3.jpg";

const HomeSliders = () => {
	const Slides = [
		{img: slide1, alt: "image 1"},
		{img: slide2, alt: "image 2"},
		{img: slide3, alt: "image 3"},
	];

	return (
		<div className="m-4 p-4">
			<Carousel className="rounded-xl h-auto" loop={true}>
				{Slides.map((item, index) => (
					<img
						src={item.img}
						alt={item.alt}
						className="h-full w-full object-cover"
					/>
				))}
			</Carousel>
			<hr className="my-4" />
		</div>
	)
}

export default HomeSliders;