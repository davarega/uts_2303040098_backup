import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

import baju1 from '../Assets/baju1.jpeg';
import baju2 from '../Assets/baju2.jpeg';
import baju3 from '../Assets/baju3.jpeg';
import baju4 from '../Assets/baju4.jpeg';
import baju5 from '../Assets/baju5.jpeg';
import sepatu1 from '../Assets/sepatu1.jpeg';
import sepatu2 from '../Assets/sepatu2.jpeg';
import sepatu3 from '../Assets/sepatu3.jpeg';
import sepatu4 from '../Assets/sepatu4.jpeg';
import sepatu5 from '../Assets/sepatu5.jpeg';
import hp1 from '../Assets/hp1.png';
import hp2 from '../Assets/hp2.jpeg';
import hp3 from '../Assets/hp3.jpeg';
import hp4 from '../Assets/hp4.jpeg';
import hp5 from '../Assets/hp5.jpeg';

const ProductCards = () => {
	const Product = [
		{ image: baju1, alt: "baju", title: "Kaos polo shirt polos", price: "Rp. 52.900", description: "" },
		{ image: baju2, alt: "baju", title: "Kaos oblong layak", price: "Rp. 23.450", description: "" },
		{ image: baju3, alt: "baju", title: "Kemeja polos pria", price: "Rp. 126.000", description: "" },
		{ image: baju4, alt: "baju", title: "Jaket/sweeater/hoodie", price: "Rp. 76.800", description: "" },
		{ image: baju5, alt: "baju", title: "Kaos distro pria", price: "Rp. 36.700", description: "" },
		{ image: sepatu1, alt: "sepatu", title: "Aerostreet osaka putih", price: "Rp. 169.900", description: "" },
		{ image: sepatu2, alt: "sepatu", title: "Thunderbear sneakers", price: "Rp. 272.525", description: "" },
		{ image: sepatu3, alt: "sepatu", title: "Sepatu Sneakers Putih Kasual", price: "Rp. 55.000", description: "" },
		{ image: sepatu4, alt: "sepatu", title: "SEPATU CONVERSE ALLSTAR HIGH", price: "Rp. 39.500", description: "" },
		{ image: sepatu5, alt: "sepatu", title: "SEPATU PANTOFEL OXFORD FORMAL", price: "Rp. 79.000", description: "" },
		{ image: hp1, alt: "hp", title: "POCO X6 5G", price: "Rp. 39.999.999", description: "" },
		{ image: hp2, alt: "hp", title: "Samsung S23 Ultra", price: "Rp. 19.999.000", description: "" },
		{ image: hp3, alt: "hp", title: "OPPO Find N3", price: "Rp. 29.999.000", description: "" },
		{ image: hp4, alt: "hp", title: "Vivo V30 Pro 5G ", price: "Rp. 8.999.000", description: "" },
		{ image: hp5, alt: "hp", title: "IPhone 14 Pro Max", price: "Rp. 13.999.000", description: "" },
	]
	return (
		<div className="m-4 p-4 flex flex-col pb-8 mb-[80px]">
			<div>
				<Typography variant="h1" color="blue-gray" className="font-mono">
					DAFTAR PRODUK
				</Typography>
			</div>
			<hr className="my-2 border-blue-gray-50" />
			<div className="gap-6 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{Product.map((item, index) => (
					<Card className="max-w-72 md:max-w-52 scale-95 hover:scale-100 ease-in duration-200">
						<a href="/">
							<CardHeader shadow={false} floated={false}>
								<img
									src={item.image}
									alt={item.alt}
									className="h-full w-full object-cover"
								/>
							</CardHeader>
							<CardBody>
								<Typography color="blue-gray" className="font-medium hover:text-blue-gray-400 duration-200">
									{item.title}
								</Typography>
								<Typography
									variant="small"
									color="gray"
									className="font-normal opacity-75 max-h-20 overflow-hidden truncate"
								>
									{item.title}
								</Typography>
							</CardBody>
						</a>
						<CardFooter className="pt-0">
							<Typography color="blue-gray" className="font-medium hover:text-blue-gray-400 duration-200">
								{item.price}
							</Typography>
							<Button
								ripple={false}
								fullWidth={true}
								className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
							>
								Tambah ke Keranjang
							</Button>
						</CardFooter>
					</Card>

				))}
			</div>
		</div>
	);
}

export default ProductCards;