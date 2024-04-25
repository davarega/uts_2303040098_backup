import React from 'react';
import Navbars from '../Components/Navbar';
import Footers from '../Components/Footer';
import Sliders from '../Components/HomeSlider';
import Category from '../Components/HomeCard';

const HomePages = () => {
	return (
		<main>
			<div className="md:flex">
				<Navbars isOpen={"home"} />
				<div className='w-full'>
					<Sliders />
					<Category />
				</div>
			</div>
			<Footers />
		</main>
	)
}

export default HomePages