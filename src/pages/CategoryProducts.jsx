import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

import Img1 from '../assets/Img 1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img 3.jpg';
import Img4 from '../assets/Img4.jpg';
import axios from 'axios';

export default function CategoryProducts() {
  const [products, setProducts] = useState([
    // {
    //   name: 'Classic Wagyu Burger',
    //   price: '$18.50',
    //   description: 'Organic beef, cheddar, truffle mayo',
    //   img: Img1,
    // },
    // {
    //   name: 'Truffle Margherita',
    //   price: '$22.00',
    //   description: 'Buffalo mozzarella, fresh basil',
    //   img: Img2,
    // },
    // {
    //   name: 'Avocado Power Bowl',
    //   price: '$14.20',
    //   description: 'Quinoa, baby spinach, citrus dressing',
    //   img: Img3,
    // },
    // {
    //   name: 'Crispy Calamari',
    //   price: '$12.50',
    //   description: 'Zesty lemon, homemade tartare',
    //   img: Img4,
    // },
  ]);

  useEffect(() => {
    let domain = 'http://localhost:1337';
    let endPoint = '/api/products';
    let url = domain + endPoint;

    axios
      .get(url, {
        params: {
          populate: '*',
        },
      })
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  return (
    <div className="p-10 bg-[#FFFF] flex-col">
      <div className="flex flex-col gap-8 items-center justify-center h-full grow ">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-textDark ">Main Course</h1>

          <div className=" flex gap-4">
            <button className="  btn bg-[#FFF] text-black  rounded-2xl border-[#E2E8F0] ">Filter</button>
            <button className="  btn bg-[#FFF] text-black   rounded-2xl border-[#E2E8F0]">Sort By</button>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 h-dvh ">
          {products.map((el, index) => {
            return <ProductCard key={index} el={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
