import React from 'react';
import Navbars from '../Components/Navbar';
import Footers from '../Components/Footer';
import Carts from '../Components/Cart';

const CartPages = () => {
	return (
		<main>
			<div className='md:flex'>
				<Navbars isOpen={"cart"} />
				<Carts />
				<Footers />
			</div>
		</main>
	)
}

export default CartPages