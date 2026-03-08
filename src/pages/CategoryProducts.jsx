import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import { getCategoryProducts } from '../data/getCategoryProducts';

export default function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCategoryProducts(params.categoryId).then(setProducts);
  }, [params]);

  return (
    <div className="p-10 bg-[#FFFF] flex-col">
      <div className="flex flex-col gap-8 items-center justify-center h-full grow ">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-textDark ">Main Course</h1>
          <div className=" flex gap-4">
            <button className="btn bg-[#FFF] text-black  rounded-2xl border-[#E2E8F0]">Filter</button>
            <button className="btn bg-[#FFF] text-black   rounded-2xl border-[#E2E8F0]">Sort By</button>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 h-dvh ">
          {products.map((el, index) => (
            <ProductCard key={index} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}


// ui Layer
// logic Layer Custom hook
// data layer api