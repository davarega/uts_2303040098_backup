import React from 'react'
import Navbars from '../Components/Navbar';
import Cards from '../Components/ProductCard';
import Footers from '../Components/Footer';
import { Drawer } from '@material-tailwind/react';

const CategoryPages = () => {
	return (
		<main>
			<div className="flex">
				<Navbars isOpen={"product"} />
				<Cards />
			</div>
			<Footers />
		</main>
	)
}

export default CategoryPages