import React from 'react';
import Navbars from '../Components/Navbar';
import Footers from '../Components/Footer';
import Carts from '../Components/Cart';

const CartPages = () => {
	return (
		<main>
			<div className='flex'>
				<Navbars isOpen={"cart"} />
				<Carts />
			</div>
			<Footers />
		</main>
	)
}

export default CartPages