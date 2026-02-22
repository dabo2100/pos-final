import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { domain } from '../store';
import { useParams } from 'react-router-dom';

export default function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    let categoryId = params.categoryId;

    let endPoint = '/api/categories/' + categoryId;
    let url = domain + endPoint;

    axios
      .get(url, {
        params: {
          populate: {
            products: {
              populate: '*',
            },
          },
        },
      })
      .then((res) => {
        setProducts(res.data.data.products);
      });
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
          {products.map((el, index) => {
            return <ProductCard key={index} el={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
